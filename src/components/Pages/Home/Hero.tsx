'use client';
//HERO SECTION OF THE LANDING PAGE

//icon imports
import { ArrowRight, ChevronDown } from 'lucide-react';
//motion imports
import { motion, useMotionValue, useSpring } from 'motion/react';
import Image from 'next/image';
//React
import { type MouseEvent, useEffect, useState } from 'react';
//shadcn-ui
import { Button } from '@/components/ui/button';

//Main Component
const Hero = () => {
  // Typewriter text
  const phrases = [
    'IT Support and Services',
    'Web Development',
    'Cloud Solutions',
  ];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(phrases[index].substring(0, subIndex + 1));
      if (subIndex + 1 === phrases[index].length) {
        setTimeout(() => {
          setSubIndex(0);
          setIndex((prev) => (prev + 1) % phrases.length);
        }, 1500);
      } else {
        setSubIndex((prev) => prev + 1);
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  // MOUSE-FOLLOW PARALLAX FOR IMAGE
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = (clientX - left - width / 2) / 25;
    const y = (clientY - top - height / 2) / 25;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center pt-16 md:pt-20 xl:px-10"
    >
      {/* ANIMATED GRID BACKGROUND */}
      <div className="animate-grid-drift animate-grid-wave animate-grid-fade dark:animate-grid-drift-dark dark:animate-grid-wave-dark dark:animate-grid-fade-dark absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-3" />
      {/* GRADIENT LIGHT STREAK */}
      <div className="via-primary/60 pointer-events-none absolute top-32 left-0 h-2 w-full bg-linear-to-r from-transparent to-transparent opacity-80 blur-2xl" />
      {/* GLASSMORPHIC OVERLAY */}
      <div className="pointer-events-none absolute inset-0 dark:bg-white/4 dark:backdrop-blur-[2px]" />

      {/* HERO CONTENT */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* TEXT CONTENT */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="magneto mb-6 text-2xl leading-tight font-bold text-nowrap md:text-3xl lg:text-4xl">
              <span className="text-primary">N-tech</span> Global Solutions
            </h1>

            {/* TYPEWRITER */}
            <div className="mb-4 hidden rounded-full py-2 select-none lg:block">
              <span className="text-foreground text-lg font-semibold">
                {text}
                <span className="border-primary ml-1 animate-pulse border-r-2" />
              </span>
            </div>

            <p className="text-muted-foreground mb-8 text-base leading-relaxed select-none md:text-lg xl:text-xl">
              Your one-stop partner for intelligent IT Support and cutting-edge
              Digital Services, trusted by businesses seeking reliability,
              innovation, and measurable results.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <a href="#contact">
                  <Button
                    size="lg"
                    className="gradient-primary group relative overflow-hidden"
                  >
                    Get Started
                    <ArrowRight className="transition-smooth ml-2 h-5 w-5 group-hover:translate-x-1" />
                    {/* Glow Trail */}
                    <span className="absolute inset-0 bg-white opacity-0 blur-xl transition-all group-hover:opacity-40" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* HERO IMAGE WITH MICRO-ANIMATIONS + MOUSE PARALLAX */}

          <motion.div
            className="pointer-events-none -z-10 hidden w-full justify-center select-none md:flex xl:w-auto xl:min-w-[40%]"
            style={{
              x: springX,
              y: springY,
            }}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.8, ease: 'easeOut' },
              scale: { duration: 0.8, ease: 'easeOut' },
              rotate: { duration: 0.8, ease: 'easeOut' },
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, -2, 0, 2, 0],
              scale: [1, 1.02, 1],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <Image
              src="/assets/sit.svg"
              alt="Students studying together"
              height={671}
              width={700}
              className="pointer-events-none h-auto w-3/4 object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about">
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="border-primary flex h-7 w-4 justify-center rounded-full border-2 sm:h-10 sm:w-6">
            <div className="bg-primary sm: mt-2 h-1.5 w-0.5 translate-0 translate-x-[0.25px] rounded-full sm:h-3 sm:w-1" />
          </div>
          <div className="flex justify-center">
            <ChevronDown className="text-primary size-4 sm:size-[26px]" />
          </div>
        </div>
      </a>
    </motion.section>
  );
};

export default Hero;
