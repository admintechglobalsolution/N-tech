'use client';

import { motion } from 'motion/react';
//icons
import { FaFacebookF } from 'react-icons/fa';
import {
  FaAndroid,
  FaChartLine,
  FaCircleDollarToSlot,
  FaEnvelopeOpenText,
  FaMagnifyingGlassDollar,
} from 'react-icons/fa6';
//shadcn
import { Card } from '@/components/ui/card';
//custom hooks
import useMediaQuery from '@/hooks/useMediaQuery';

//animation variants
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

//marketing services data
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
      'Social media and page management, Designing Ad, lead generation, and tracking, Ad campaigns, and creatives.',
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

const Marketing = () => {
  //responsive check
  const isMobile = useMediaQuery(768);

  return (
    <section
      id="services"
      className="bg-secondary/50 py-10 md:py-20 xl:px-10 xl:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Title Animation */}
        <motion.div
          className="mb-2 text-center lg:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
            DIGITAL MARKETING <span className="text-primary">SERVICES</span>
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
                <div className="text-primary bg-card absolute top-8 left-1/2 flex size-20 -translate-x-1/2 items-center justify-center rounded-2xl shadow-md">
                  <service.icon className="size-10" />
                </div>

                <Card className="group h-full gap-2 rounded-4xl border-0 p-4 pt-20 shadow-lg">
                  <h3 className="text-center text-lg font-semibold md:text-xl xl:mb-4 xl:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mx-auto max-w-xs text-center text-xs leading-relaxed md:text-base">
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

export default Marketing;
