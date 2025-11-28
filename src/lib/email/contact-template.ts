export function contactEmailTemplate(
  data: {
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    phone: string;
    message: string;
  },
  logoCid: string,
) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>

      .nt-font {
        font-family: 'Roboto', Arial, sans-serif !important;
        }
      /* Reset */
      body, table, td, div, p { margin:0; padding:0; }

      /* Mobile */
      @media(max-width:600px){
        .container { padding:16px !important; }
        .card { padding:16px !important; }
      }

      /* TRUE dark-mode support */
      @media (prefers-color-scheme: dark) {
        .wrapper { background:#0f172a !important; }
        .card { background:#1e293b !important; color:#f8fafc !important; }
        .text { color:#f8fafc !important; }
        .heading { color:#f1f5f9 !important; }
        .subtext { color:#cbd5e1 !important; }
      }

      /* Gmail dark mode override */
      [data-ogsc] .wrapper { background:#0f172a !important; }
      [data-ogsc] .card { background:#1e293b !important; }
      [data-ogsc] .text { color:#f8fafc !important; }
    </style>
  </head>

  <body class="wrapper nt-font"
    style="background:#ffffff; font-family:Roboto,Arial,sans-serif;" 
    bgcolor="#ffffff">

    <div class="container" 
      style="max-width:600px;margin:auto;
      padding:24px;background:#ffffff;"
      bgcolor="#ffffff"
    >
      
      <!-- HEADER -->
      <div style="text-align:center; margin-bottom:20px;">
        <img src="cid:${logoCid}" class="logo" alt="NTech Logo" style="width:140px;margin-bottom:8px;" />
        
        <h2 style="color:#111827;margin:0;font-size:22px;font-weight:700;">
          New Contact Form Submission
        </h2>

        <p class="muted" style="color:#6b7280;font-size:14px;margin-top:4px;">
          Website Inquiry
        </p>
      </div>

      <!-- CONTENT BOX -->
      <div style="
        background:#f9fafb;
        padding:16px;
        border-radius:10px;
        border:1px solid #e5e7eb;
        color:#111827;"
        >

        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.countryCode} ${data.phone}</p>

        <p style="margin-top:16px;"><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;margin:0;color:#374151;">
          ${data.message}
        </p>
      </div>

      <!-- FOOTER -->
      <p class="muted" style="font-size:12px;color:#9ca3af;margin-top:24px;text-align:center;">
        © ${new Date().getFullYear()} NTech Global Solutions. All rights reserved.
      </p>

    </div>
  </body>

  </html>
  `;
}
