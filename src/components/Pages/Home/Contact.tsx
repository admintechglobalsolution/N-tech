'use client';

import { motion } from 'motion/react';
import { FaGlobe, FaMapMarkedAlt } from 'react-icons/fa';
import { FaEnvelope, FaPhoneVolume } from 'react-icons/fa6';
//icons
import AnimatedContactForm from '@/components/Pages/Home/Contact-Form';

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
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-4 md:flex-row md:px-0 xl:justify-around xl:px-4">
        {/* Title */}
        <motion.div
          className="mb-4 text-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <div className="mb-4 flex h-1 w-full gap-2">
            <div className="h-1 w-10 bg-blue-800"></div>
            <div className="h-1 w-5 bg-yellow-400"></div>
          </div>
          <motion.p
            className="text-muted-foreground max-w-2xl text-start text-sm md:text-base xl:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: false }}
          >
            Ready to transform your business? Contact us today
          </motion.p>

          {/* Grid */}
          <div className="relative grid items-start">
            <motion.div
              className="bg-chart-4/5 dark:bg-chart-4/10 absolute -left-10 -z-10 size-64 rounded-full blur-2xl dark:size-108"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
            {/* Contact Info Cards with stagger */}
            <motion.div
              className="mt-5 grid grid-cols-1 space-y-10 sm:mt-18 sm:grid-cols-2 md:grid-cols-1"
              variants={staggerParent}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: false }}
            >
              {contactInfo.map((info) => (
                <motion.div key={info.label} variants={fadeInUp}>
                  <a
                    href={info.href}
                    className="transition-smooth group flex w-fit items-center gap-4"
                    target={info.label === 'Website' ? '_blank' : undefined}
                    rel={
                      info.label === 'Website'
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    <div className="transition-smooth flex size-8 shrink-0 items-center justify-center rounded-lg group-hover:scale-110 md:size-10 md:rounded-xl">
                      <info.icon className="text-primary size-3 md:size-5" />
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        {/* Animated Contact Form Component */}
        <AnimatedContactForm />
      </div>
    </section>
  );
};

export default Contact;
