
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0"></div>
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-10"
        style={{
          '--grid-color': 'hsl(var(--primary))',
          '--grid-size': '30px'
        } as React.CSSProperties}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-foreground mb-6">
          Tania
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-8">
          Experienced Product Manager with over 5 years of experience driving revenue growth, leading cross-functional teams, and enhancing customer engagement.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects"><Button size="lg">View My Work</Button></a>
          <a href="/tania-resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">Download CV</Button>
          </a>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </a>
      <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
          background-size: var(--grid-size) var(--grid-size);
        }
      `}</style>
    </section>
  );
};

export default Hero;
