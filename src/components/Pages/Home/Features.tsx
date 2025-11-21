'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const Features = () => {
  const features = [
    {
      icon: '/assets/services-idea.svg',
      title: 'Creative Concepts',
      description:
        'We will listen to reach out your goals regardless of what you sell. Based on that, we introduce more creative ideas for perfective work.',
    },
    {
      icon: '/assets/girl.svg',
      title: 'Testing for Perfection',
      description:
        'We deal individually with each project. Our design is sharp, clean, and we make sure that it is 99.9% error-free.',
    },
    {
      icon: '/assets/services-p-boy.svg',
      title: 'Innovative Solutions',
      description:
        'N-tech has the best team who is qualified and certified. They are well experienced by providing accurate and timely work.',
    },
    {
      icon: '/assets/cup.jpg',
      title: 'We are the Best',
      description:
        'We proudly say that we are One of the top IT Support and Service Providers with over 100+ employees team work is our key to success.',
    },
  ];

  return (
    <section id="about" className="bg-secondary/50 py-20 md:py-32">
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
            Do More With <span className="text-primary">Us</span>
          </h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: false }}
          >
            We analyze trends and come up with creativity connecting the virtual
            and real worlds.
          </motion.p>
        </motion.div>

        {/* Grid Animation */}
        <motion.div
          className="grid gap-6 sm:grid-cols-1 md:gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeIn}>
              <Card className="hover:shadow-large transition-smooth shadow-soft bg-card group border-0 p-6 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
