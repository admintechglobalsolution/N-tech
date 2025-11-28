const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-border border-t py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* <div className="flex justify-between text-center md:text-left"> */}
          <p className="magneto text-primary text-2xl font-bold">
            N-tech Global Solutions
          </p>
          <p className="text-muted-foreground text-sm xl:mr-18">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
