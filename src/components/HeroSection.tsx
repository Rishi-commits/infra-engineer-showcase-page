
import { GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  name: string;
  title: string;
  summary: string;
  resumeLink: string;
}

const HeroSection = ({ name, title, summary, resumeLink }: HeroSectionProps) => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center bg-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background"></div>
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <GitBranch className="h-5 w-5 text-devops-accent" />
            <p className="text-devops-muted font-mono text-sm">main</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Hi, I'm <span className="text-gradient">{name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/90 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <Button size="lg" className="bg-devops-accent hover:bg-devops-accent/90">
              Contact Me
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-foreground/20 rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
