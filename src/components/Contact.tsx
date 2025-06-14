
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">I'm currently open to new opportunities. Feel free to reach out!</p>
        </div>
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's build something great.</h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a question, a project idea, or just want to say hello, my inbox is always open.
            </p>
            <div className="space-y-4">
              <a href="mailto:taniaa2707@gmail.com" className="flex items-center group">
                <Mail className="h-6 w-6 text-primary mr-4" />
                <span className="text-lg text-foreground group-hover:text-primary transition-colors">taniaa2707@gmail.com</span>
              </a>
              <div className="flex items-center space-x-6 pt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={28} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={28} /></a>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <Input type="text" placeholder="Your Name" required className="bg-background"/>
            <Input type="email" placeholder="Your Email" required className="bg-background"/>
            <Textarea placeholder="Your Message" required rows={5} className="bg-background"/>
            <Button type="submit" className="w-full" size="lg">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
