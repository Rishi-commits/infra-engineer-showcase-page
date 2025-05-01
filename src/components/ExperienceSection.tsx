
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <p className="text-xl font-medium text-devops-accent mb-12">My professional journey</p>
          
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-border md:-translate-x-0.5"></div>
            
            {experiences.map((experience, i) => (
              <div 
                key={`${experience.company}-${i}`}
                className={`relative mb-12 animate-fade-in opacity-0`}
                style={{ animationDelay: `${0.2 * i}s`, animationFillMode: 'forwards' }}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="absolute top-0 left-0 md:left-1/2 w-12 h-12 rounded-full bg-background border-4 border-devops-accent flex items-center justify-center -translate-x-6 md:-translate-x-6">
                    <Calendar className="h-5 w-5 text-devops-accent" />
                  </div>
                  
                  <Card className="bg-background border border-border/50">
                    <CardContent className="p-6">
                      <div className="text-sm font-mono text-devops-muted mb-2">{experience.period}</div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <p className="text-devops-accent mb-4">{experience.company}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="text-foreground/80">• {item}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-secondary/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
