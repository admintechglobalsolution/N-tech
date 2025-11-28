import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import nodemailer from 'nodemailer';
//lib
import { contactEmailTemplate } from '@/lib/email/contact-template';
import { isRateLimited } from '@/lib/rate-limit';
//zod schema
import { contactSchema } from '@/lib/validations/contact';
export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get('x-forwarded-for') ??
      req.headers.get('x-real-ip') ??
      'unknown';

    // 1. Rate limit check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Slow down!' },
        { status: 429 },
      );
    }

    // 2. Validate body
    const data = await req.json();
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 422 },
      );
    }

    const { firstName, lastName, email, countryCode, phone, message } = data;

    // Load logo from /public
    const logoPath = path.join(process.cwd(), 'public/assets/logo.png');
    const logoContent = await fs.readFile(logoPath);
    const logoCid = 'nt-logo-123';

    // 4. SMTP transporter
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error('Missing SMTP environment variables');
      return NextResponse.json(
        { error: 'SMTP configuration is incomplete.' },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"NTech Contact Form" <${process.env.SMTP_USER}>`,
      to: 'admin@ntechglobalsolutions.com',
      subject: `New Contact Form Submission — ${firstName}`,
      // Attach the logo
      attachments: [
        {
          filename: 'logo.png',
          content: logoContent,
          cid: logoCid, // ← MUST MATCH TEMPLATE
        },
      ],
      html: contactEmailTemplate(
        {
          firstName,
          lastName,
          email,
          countryCode,
          phone,
          message,
        },
        logoCid,
      ),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('SMTP error:', err);
    return NextResponse.json(
      { error: 'Something went wrong while sending the message.' },
      { status: 500 },
    );
  }
}
