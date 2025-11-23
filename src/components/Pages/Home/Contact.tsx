'use client';

//icons
import { motion } from 'motion/react';
import { FaGlobe, FaMapMarkedAlt } from 'react-icons/fa';
import { FaEnvelope, FaPhoneVolume } from 'react-icons/fa6';
//custom components
import LottiePlayer from '@/components/LottiePlayer';
//shadcn
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
      icon: FaPhoneVolume,
      label: 'Phone',
      value: '+91 9346622679',
      href: 'tel:+919346622679',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'admin@ntechglobalsolution.com',
      href: 'mailto:admin@ntechglobalsolution.com',
    },
    {
      icon: FaGlobe,
      label: 'Website',
      value: 'www.ntechglobalsolution.com',
      href: 'https://ntechglobalsolution.com',
    },
    {
      icon: FaMapMarkedAlt,
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-10 md:py-20 xl:px-10 xl:py-32">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="mb-4 text-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <div className="mb-4 flex h-1 w-full gap-2">
            <div className="h-1 w-10 bg-blue-800"></div>
            <div className="h-1 w-5 bg-yellow-400"></div>
          </div>
          <motion.p
            className="text-muted-foreground md:text-md max-w-2xl text-start text-sm xl:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: false }}
          >
            Ready to transform your business? Contact us today
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid items-center md:grid-cols-2">
          {/* Contact Info Cards with stagger */}
          <motion.div
            className="space-y-6"
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false }}
          >
            {contactInfo.map((info) => (
              <motion.div key={info.label} variants={fadeInUp}>
                <Card className="transition-smooth group border-0 p-6 pl-0 shadow-none">
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
                    <div className="bg-primary-foreground transition-smooth flex h-12 w-12 shrink-0 items-center justify-center rounded-xl group-hover:scale-110">
                      <info.icon className="h-6 w-6 text-blue-800" />
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
