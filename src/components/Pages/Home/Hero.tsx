import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16 md:pt-20 xl:px-10"
    >
      {/* Background gradient */}
      <div className="gradient-hero absolute inset-0 opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Content */}
          <div className="animate-fade-in text-center md:text-left">
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              <span className="text-primary">N-tech</span> Global Solutions
            </h1>
            <div className="mb-4 hidden rounded-full py-2 lg:block">
              <span className="text-foregroud text-lg font-semibold">
                IT Support and Services
              </span>
            </div>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl">
              Your one-stop partner for intelligent IT Support and cutting-edge
              Digital Services, trusted by businesses seeking reliability,
              innovation, and measurable results.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a href="#contact">
                <Button size="lg" className="gradient-primary group">
                  Get Started
                  <ArrowRight className="transition-smooth ml-2 h-5 w-5 group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground border-2"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="-z-10 hidden w-full justify-center md:flex xl:w-auto xl:min-w-[40%]">
            <Image
              src="/assets/sit.svg"
              alt="Students studying together"
              height={671.757}
              width={699.975}
              className="h-auto w-3/4 object-contain"
            />
          </div>
          <div className="animate-scale-in relative">
            <div className="bg-primary/20 absolute rounded-full blur-3xl" />
            <Image
              src="/assets/sit.svg"
              alt="N-tech Services"
              fill
              className="drop-shadow-large absolute mx-auto w-full max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="border-primary flex h-10 w-6 justify-center rounded-full border-2">
          <div className="bg-primary mt-2 h-3 w-1 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
