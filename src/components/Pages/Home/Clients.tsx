'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export const Clients = () => {
  const companies = [
    { id: 'infotek', logo: '/assets/companies/aa.svg' },
    { id: 'alba', logo: '/assets/companies/alba.svg' },
    { id: 'ce', logo: '/assets/companies/ce.svg' },
    { id: 'be', logo: '/assets/companies/be.svg' },
    { id: 'vibhu', logo: '/assets/companies/vibhu.svg' },
  ];

  // Duplicate array for smooth infinite loop
  const logos = [...companies, ...companies];

  return (
    <section id="clients" className="py-10 md:py-20 xl:px-10 xl:py-32">
      <div className="relative flex w-full flex-col items-center gap-10 overflow-x-hidden px-6">
        {/* Title Animation */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Our <span className="text-primary">Trusted Clients</span>
          </h2>
        </motion.div>

        {/* Logos Marquee Animation */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="animate-marquee flex gap-16 whitespace-nowrap">
            {logos.map((company, i) => (
              <div key={`${company.id}-${i}`} className="shrink-0">
                <Image
                  src={company.logo}
                  alt={company.id}
                  width={140}
                  height={60}
                  draggable={false}
                  className="pointer-events-none h-16 w-auto object-contain select-none md:h-20 lg:h-24"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
