
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Senior Associate Product Manager - Insurance at Traveloka',
    description: "Increased Transactional User Rate (TUR) by 20% through strategic product experiments. Negotiated improved insurance deals, boosting customer benefits and company margins by 10%, achieving 35% revenue growth.",
    imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Product Management', 'Insurance', 'Fintech', 'Optimization'],
    link: '#',
  },
  {
    title: 'Associate Product Manager - Platform at Spenmo',
    description: 'Rebuilt the Know Your Business (KYB) system, reducing operational costs and improving onboarding. Reduced manual onboarding work by 45% with a self-service KYB system and improved user engagement by 5% through rebranding.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Product Management', 'KYB', 'SaaS', 'Platform'],
    link: '#',
  },
  {
    title: 'Product Owner - Financial Analyst at IBM',
    description: 'Led AI-driven automation projects, increasing system accuracy and operational efficiency. Built and implemented a Watson AI Bot that reduced the transition period by 15% and improved partner system accuracy by 5%.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Product Owner', 'Automation', 'AI', 'Process Improvement'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Case Studies</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">A selection of projects that I'm proud of.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
