'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import ModeToggle from '../ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-background/95 border-border shadow-soft fixed top-0 right-0 left-0 z-50 border-b px-10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-10 items-center justify-between md:h-15">
          {/* Logo */}
          <a
            href="#home"
            className="text-primary magneto transition-smooth hover:text-primary-light text-2xl font-bold md:text-3xl"
          >
            N-tech
          </a>

          {/* Right side: nav links (desktop), mode toggle, hamburger */}
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <ModeToggle />

            <button
              className="text-foreground hover:text-primary transition-smooth md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`border-border overflow-hidden border-t transition-all duration-300 md:hidden ${isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'} `}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-smooth py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* <Button className="gradient-primary w-full">Get Started</Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
