'use client';

import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

import LottiePlayer from '@/components/LottiePlayer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: false },
};

const staggerParent = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: false },
};

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9346622679',
      href: 'tel:+919346622679',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'admin@ntechglobalsolution.com',
      href: 'mailto:admin@ntechglobalsolution.com',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.ntechglobalsolution.com',
      href: 'https://ntechglobalsolution.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: false }}
          >
            Ready to transform your business? Contact us today
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          {/* Contact Info Cards with stagger */}
          <motion.div
            className="space-y-6"
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false }}
          >
            {contactInfo.map((info, i) => (
              <motion.div key={info.label} variants={fadeInUp}>
                <Card className="hover:shadow-medium transition-smooth shadow-soft bg-card group border-0 p-6">
                  <a
                    href={info.href}
                    className="flex items-center gap-4"
                    target={info.label === 'Website' ? '_blank' : undefined}
                    rel={
                      info.label === 'Website'
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    <div className="gradient-primary transition-smooth flex h-12 w-12 shrink-0 items-center justify-center rounded-xl group-hover:scale-110">
                      <info.icon className="text-primary-foreground h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1 text-sm">
                        {info.label}
                      </p>
                      <p className="text-card-foreground group-hover:text-primary transition-smooth font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <LottiePlayer src="/Welcome.lottie" loop autoplay />

            {/* <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: false }}
            >
              <Button size="lg" className="gradient-primary">
                Schedule a Consultation
              </Button>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
