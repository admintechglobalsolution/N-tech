'use client';
//WHY CHOOSE US SECTION

import { motion } from 'motion/react';
//icon imports
import {
  FaFortAwesome,
  FaHandHoldingUsd,
  FaHourglassHalf,
  FaShieldAlt,
} from 'react-icons/fa';
import { FaHeadset, FaMedal } from 'react-icons/fa6';
//lottie Player
import LottiePlayer from '@/components/LottiePlayer';

//Animation variants
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

//Main Component
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
    <section className="py-10 md:py-20 xl:px-10 xl:py-32">
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
            WHY CHOOSE <span className="text-primary">US?</span>
          </h2>
          <div className="mb-4 flex h-1 w-full gap-2">
            <div className="h-1 w-10 bg-blue-800"></div>
            <div className="h-1 w-5 bg-yellow-400"></div>
          </div>
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
                  className="flex items-start gap-3 p-2"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                    <reason.icon className="size:6 text-yellow-400 xl:size-8" />
                  </div>
                  <span className="text-foreground text-lg font-medium xl:text-xl">
                    {reason.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Lottie */}
          <motion.div
            className="relative overflow-clip sm:pr-10 md:pr-0"
            initial={{ opacity: 0, scale: 1, translateY: 100 }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <LottiePlayer
              src="/Teamwork.lottie"
              loop={true}
              autoplay={true}
              className="h-auto xl:w-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
