// schemas/contactSchema.ts
import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Enter a valid email'),
  countryCode: z.string().min(1, 'Choose a country code'),
  phone: z
    .string()
    .min(6, 'Phone number is too short')
    .max(15, 'Phone number is too long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(120, 'Message cannot exceed 120 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
