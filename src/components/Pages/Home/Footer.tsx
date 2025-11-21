const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-border border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-primary mb-2 text-2xl font-bold">
              N-tech Global Solutions
            </p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#home"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              About
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Services
            </a>
            <a
              href="#clients"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Client
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
