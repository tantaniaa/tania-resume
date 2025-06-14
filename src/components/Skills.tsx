
import { Briefcase, Code, BarChart2 } from 'lucide-react';

const skillCategories = [
  {
    name: 'Product Management',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    skills: ['JIRA', 'Confluence'],
  },
  {
    name: 'Technical & Business',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ['JavaScript (ReactJS)', 'SAP', 'RPA'],
  },
  {
    name: 'Tools & Analytics',
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    skills: ['Excel/Google Sheet'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">My Toolbox</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">The skills and tools I use to build great products.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-secondary p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-4">{category.name}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map(skill => (
                  <li key={skill} className="text-muted-foreground flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
