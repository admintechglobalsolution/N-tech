'use client';
import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';
import { FaApple, FaEye } from 'react-icons/fa';
import {
  FaCrown,
  FaDragon,
  FaRankingStar,
  FaSoundcloud,
} from 'react-icons/fa6';

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

  return (
    <section id="services" className="bg-secondary/50 py-20 md:py-32">
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
            Our <span className="text-primary">Services</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerParent}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeIn}>
              <Card className="hover:shadow-large transition-smooth shadow-soft bg-card group h-full border-0 p-8 hover:-translate-y-2">
                <div className="gradient-primary transition-smooth mb-6 flex h-16 w-16 items-center justify-center rounded-2xl group-hover:scale-110">
                  <service.icon className="text-primary-foreground h-8 w-8" />
                </div>
                <h3 className="text-card-foreground mb-4 text-start text-3xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-start text-lg leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
