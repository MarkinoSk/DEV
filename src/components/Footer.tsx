const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="font-mono text-sm text-muted-foreground">
          © {currentYear} DEV. Všetky práva vyhradené.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
