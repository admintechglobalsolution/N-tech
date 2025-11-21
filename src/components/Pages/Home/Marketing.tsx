'use client';
import { motion } from 'motion/react';
import { FaFacebookF } from 'react-icons/fa';
import {
  FaAndroid,
  FaChartLine,
  FaCircleDollarToSlot,
  FaEnvelopeOpenText,
  FaMagnifyingGlassDollar,
} from 'react-icons/fa6';
import { Card } from '@/components/ui/card';

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

const Marketing = () => {
  const services = [
    {
      id: 'search-engine',
      icon: FaMagnifyingGlassDollar,
      title: 'Seach Engine',
      description:
        'Increase your page visibility in search engines through paid advertising and our search engine marketing services.',
    },
    {
      id: 'social-media-optimization',
      icon: FaFacebookF,
      title: 'Social Media Optimization',
      description:
        'social media and page management, Designing Ad, lead generation, and tracking, Ad campaigns, and creatives.',
    },
    {
      id: 'pay-per-click',
      icon: FaCircleDollarToSlot,
      title: 'Pay Per Click',
      description:
        'Pay Per Click helps you to compete with competitors in a faster way to achieve ROI goals.',
    },
    {
      id: 'email-marketing',
      icon: FaEnvelopeOpenText,
      title: 'E-Mail Marketing',
      description:
        'Email marketing is the process of targeting your audience and customers through email. Faster way to achieve target goals.',
    },
    {
      id: 'affiliate-marketing',
      icon: FaChartLine,
      title: 'Affiliate Marketing',
      description:
        'Affiliate marketing is an advertising model in which a company compensates third-party publishers to generate traffic.',
    },
    {
      id: 'mobile-marketing',
      icon: FaAndroid,
      title: 'Mobile Marketing',
      description:
        'Digital marketers are excited to carry out mobile campaigns because they are aware that motive customers are buyers',
    },
  ];

  return (
    <section id="services" className="bg-secondary/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Title Animation */}
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

        {/* Cards with Stagger Animation */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerParent}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeIn}>
              <Card className="hover:shadow-large transition-smooth shadow-soft bg-card group border-0 p-8 hover:-translate-y-2">
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

export default Marketing;
