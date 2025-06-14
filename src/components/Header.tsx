
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-serif font-bold text-primary">Tania</a>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-block">
            <Button>Get In Touch</Button>
          </a>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col items-center px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block w-full text-center py-2 text-foreground/80 hover:text-primary transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Get In Touch</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
