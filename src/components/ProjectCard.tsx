
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link: string;
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="bg-secondary border-border/50 group overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <CardHeader>
        <CardTitle className="font-serif text-2xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-primary/30 text-primary/80">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Button variant="link" className="p-0 text-primary">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
