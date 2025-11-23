'use client';

import { motion } from 'motion/react';
//icons
import { FaApple, FaEye } from 'react-icons/fa';
import {
  FaCrown,
  FaDragon,
  FaRankingStar,
  FaSoundcloud,
} from 'react-icons/fa6';
//shadcn
import { Card } from '@/components/ui/card';
//custom hooks
import useMediaQuery from '@/hooks/useMediaQuery';

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

const Services = () => {
  const services = [
    {
      id: 'web-design',
      icon: FaCrown,
      title: 'Web Design',
      description:
        'Crafting World-Class Website Designs for Real World Experiences, transforming your ideas into live.',
    },
    {
      id: 'digital-marketing',
      icon: FaRankingStar,
      title: 'Digital Marketing',
      description:
        'Digital Marketing Service has become an integral demand for every business to make its brand popular.',
    },
    {
      id: 'mobile-application',
      icon: FaApple,
      title: 'Mobile Application',
      description:
        'Deploying a rich and powerful Mobile App that drives your Mobile Savvy audience with your business',
    },
    {
      id: 'cyber-security',
      icon: FaEye,
      title: 'Cyber Security',
      description:
        '24/7 security operations to provide seamless protection from known and unknown cyber threats',
    },
    {
      id: 'cloud-service',
      icon: FaSoundcloud,
      title: 'Cloud Service',
      description:
        'Cloud Services are designed around our customers and delivered on the platform that best meets their needs.',
    },
    {
      id: 'logo-design',
      icon: FaDragon,
      title: 'Logo Design',
      description:
        'Logo Designing is the start point of any business. Logo design that will stay with your brand for a long time.',
    },
  ];
  const isMobile = useMediaQuery(768);
  return (
    <section
      id="services"
      className="bg-secondary/50 py-10 md:py-20 xl:px-10 xl:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="mb-6 text-center md:mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
        </motion.div>

        {/* Cards with Stagger Animation */}
        <motion.div
          className="mt-4 grid auto-rows-fr grid-cols-1 md:mt-8 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
          variants={staggerParent}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeIn}>
              <div className="relative mx-6 h-full pt-12 transition-all hover:-translate-y-2">
                <div className="text-primary absolute top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl bg-white shadow-md">
                  <service.icon className="h-8 w-8" />
                </div>

                <Card className="group h-full rounded-4xl border-0 bg-white p-8 pt-16 shadow-lg">
                  <h3 className="text-center text-lg font-semibold text-gray-900 md:text-xl xl:mb-4 xl:text-3xl">
                    {service.title}
                  </h3>
                  <p className="md:text-md mx-auto max-w-xs text-center text-xs leading-relaxed text-gray-500 xl:text-xl">
                    {service.description}
                  </p>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
