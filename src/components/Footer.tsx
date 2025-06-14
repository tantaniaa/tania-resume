
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Tania. All Rights Reserved.</p>
        <p className="text-sm mt-2">Designed & Built with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
