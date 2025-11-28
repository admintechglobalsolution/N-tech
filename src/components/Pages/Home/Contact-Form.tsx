'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion, type Variants } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
//shadcn components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
//zod schema and type
import { type ContactFormData, contactSchema } from '@/lib/validations/contact';

const fieldVariant1: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fieldVariant2: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AnimatedContactForm() {
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '91',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormData) {
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ ...values }),
      });
      if (!res.ok) {
        toast.error('Failed to submit. Try again.');
        return;
      }

      toast.success('Message sent successfully!');
      form.reset();
    } catch (err) {
      toast.error('Something went wrong. Please try again.', {
        description: (err as Error).message,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false }}
      className="bg-card relative w-fit justify-self-center rounded-3xl p-3 pt-0! shadow-lg md:mt-0 md:p-6"
    >
      {/* FLOATING BACKGROUND SHAPES */}
      <motion.div
        className="bg-primary/25 dark:bg-primary/15 absolute -top-10 -right-10 size-40 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="bg-chart-4/25 absolute -bottom-12 -left-20 -z-10 size-64 rounded-full blur-2xl dark:left-30 dark:size-64"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      <h3 className="my-4 text-2xl font-semibold md:text-3xl">
        You can reach us anytime
      </h3>

      <motion.form
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={{
          show: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* FIRST + LAST NAME */}
        <motion.div
          variants={fieldVariant1}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <div
            className={`transition-all ${focused === 'first' ? 'scale-[1.02]' : ''}`}
          >
            <Label className="mb-2">First Name</Label>
            <Input
              {...form.register('firstName')}
              onFocus={() => setFocused('first')}
              onBlur={() => setFocused(null)}
              placeholder="First name"
            />
            <div className="mt-1 h-2">
              {form.formState.errors.firstName && (
                <motion.p
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  className="text-xs text-red-500"
                >
                  {form.formState.errors.firstName.message}
                </motion.p>
              )}
            </div>
          </div>

          <div
            className={`transition-all ${focused === 'last' ? 'scale-[1.02]' : ''}`}
          >
            <Label className="mb-2">Last Name</Label>
            <Input
              {...form.register('lastName')}
              onFocus={() => setFocused('last')}
              onBlur={() => setFocused(null)}
              placeholder="Last name"
            />
            <div className="mt-1 h-2">
              {form.formState.errors.lastName && (
                <motion.p
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  className="text-xs text-red-500"
                >
                  {form.formState.errors.lastName.message}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>

        {/* EMAIL */}
        <motion.div
          variants={fieldVariant2}
          className={`transition-all ${focused === 'email' ? 'scale-[1.02]' : ''}`}
        >
          <Label className="mb-2">Email</Label>
          <Input
            {...form.register('email')}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            placeholder="Your email"
          />
          <div className="mt-1 h-2">
            {form.formState.errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                className="text-xs text-red-500"
              >
                {form.formState.errors.email.message}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* PHONE */}
        <motion.div variants={fieldVariant1} className="flex gap-4 md:flex-row">
          <div>
            <Label className="mb-2">Code</Label>
            <Select
              onValueChange={(v) => form.setValue('countryCode', v)}
              defaultValue="91"
            >
              <SelectTrigger>
                <SelectValue placeholder="+91" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="91">+91</SelectItem>
                <SelectItem value="1">+1</SelectItem>
                <SelectItem value="44">+44</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div
            className={`w-full transition-all ${focused === 'phone' ? 'scale-[1.02]' : ''}`}
          >
            <Label className="mb-2">Phone</Label>
            <Input
              {...form.register('phone')}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused(null)}
              placeholder="Phone number"
            />
            <div className="mt-1 h-2">
              {form.formState.errors.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  className="text-xs text-red-500"
                >
                  {form.formState.errors.phone.message}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>

        {/* MESSAGE */}
        <motion.div
          variants={fieldVariant2}
          className={`transition-all ${focused === 'message' ? 'scale-[1.02]' : ''}`}
        >
          <Label className="mb-2">Message</Label>
          <Textarea
            {...form.register('message')}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            placeholder="How can we help?"
            rows={4}
          />
          <div className="mt-1 h-2">
            {form.formState.errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                className="text-xs text-red-500"
              >
                {form.formState.errors.message.message}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* SUBMIT */}
        <motion.div variants={fieldVariant1}>
          <Button
            className="w-full rounded-full py-3"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </Button>
        </motion.div>

        <motion.p
          variants={fieldVariant1}
          className="text-muted-foreground text-center text-xs"
        >
          By contacting us, you agree to our{' '}
          <Link href="/legal/terms" target="_blank" rel="noopener noreferrer">
            <span className="text-primary font-semibold">
              Terms of Service
            </span>{' '}
          </Link>
          and{' '}
          <Link href="/legal/privacy" target="_blank" rel="noopener noreferrer">
            <span className="text-primary font-semibold">Privacy Policy</span>
          </Link>
          .
        </motion.p>
      </motion.form>
    </motion.div>
  );
}
