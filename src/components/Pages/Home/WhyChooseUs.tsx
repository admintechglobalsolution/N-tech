'use client';

import { motion } from 'motion/react';
import {
  FaFortAwesome,
  FaHandHoldingUsd,
  FaHourglassHalf,
  FaShieldAlt,
} from 'react-icons/fa';
import { FaHeadset, FaMedal } from 'react-icons/fa6';
import LottiePlayer from '@/components/LottiePlayer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const staggerParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const WhyChooseUs = () => {
  const reasons = [
    { id: 1, icon: FaFortAwesome, text: '8+ Years Of Experience' },
    { id: 2, icon: FaMedal, text: 'Quality of Work' },
    { id: 3, icon: FaHourglassHalf, text: 'Time Efficient' },
    { id: 4, icon: FaHandHoldingUsd, text: 'Affordable Cost' },
    { id: 5, icon: FaShieldAlt, text: 'Secure' },
    { id: 6, icon: FaHeadset, text: '24/7 Support' },
  ];

  return (
    <section className="py-20 md:py-32">
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
            Why Choose <span className="text-primary">Us?</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Reasons List */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerParent}
          >
            <div className="grid grid-cols-2 gap-4">
              {reasons.map((reason) => (
                <motion.div
                  key={reason.id}
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                    <reason.icon className="text-primary-foreground h-4 w-4" />
                  </div>
                  <span className="text-foreground font-medium">
                    {reason.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Lottie */}
          <motion.div
            className="relative sm:pr-10 md:pr-0"
            initial="hidden"
            whileInView={fadeIn.show(0.2)}
            viewport={{ once: false, amount: 0.3 }}
          >
            <LottiePlayer src="/Teamwork.lottie" loop={true} autoplay={true} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
