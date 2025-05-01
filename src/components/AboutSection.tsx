
import { Code, Server, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AboutSectionProps {
  bio: string;
  tagline: string;
}

const AboutSection = ({ bio, tagline }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-xl font-medium text-devops-accent mb-8">{tagline}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-background border border-border/50 hover:border-devops-accent/50 transition-all">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-lg bg-devops-accent/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-devops-accent" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Infrastructure as Code</h3>
              <p className="text-muted-foreground">Creating and managing cloud infrastructure with code for reproducibility and consistency.</p>
            </Card>
            
            <Card className="p-6 bg-background border border-border/50 hover:border-devops-accent/50 transition-all">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-lg bg-devops-accent/10 flex items-center justify-center">
                  <Server className="h-6 w-6 text-devops-accent" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-muted-foreground">Designing robust, scalable, and secure cloud solutions that meet business needs.</p>
            </Card>
            
            <Card className="p-6 bg-background border border-border/50 hover:border-devops-accent/50 transition-all">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-lg bg-devops-accent/10 flex items-center justify-center">
                  <Terminal className="h-6 w-6 text-devops-accent" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">CI/CD Automation</h3>
              <p className="text-muted-foreground">Building automated pipelines for continuous integration and deployment workflows.</p>
            </Card>
          </div>
          
          <p className="text-foreground/80 text-lg leading-relaxed whitespace-pre-line">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
