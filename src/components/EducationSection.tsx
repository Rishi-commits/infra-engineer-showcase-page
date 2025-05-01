
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

interface EducationSectionProps {
  education: Education[];
  certifications: Certification[];
}

const EducationSection = ({ education, certifications }: EducationSectionProps) => {
  return (
    <section id="education" className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Education & Certifications</h2>
          <p className="text-xl font-medium text-devops-accent mb-12">My academic background and professional certifications</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-devops-accent" />
                Education
              </h3>
              
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <Card 
                    key={i} 
                    className="border border-border/50 hover:border-devops-accent/50 transition-all animate-fade-in opacity-0" 
                    style={{ animationDelay: `${0.1 * i}s`, animationFillMode: 'forwards' }}
                  >
                    <CardContent className="p-6">
                      <div className="font-mono text-sm text-devops-muted">{edu.year}</div>
                      <h4 className="text-lg font-bold mt-1">{edu.degree}</h4>
                      <p className="text-devops-accent">{edu.institution}</p>
                      {edu.description && (
                        <p className="mt-2 text-foreground/80">{edu.description}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-devops-accent" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <Card 
                    key={i} 
                    className="border border-border/50 hover:border-devops-accent/50 transition-all animate-fade-in opacity-0" 
                    style={{ animationDelay: `${0.1 * i}s`, animationFillMode: 'forwards' }}
                  >
                    <CardContent className="p-6">
                      <div className="font-mono text-sm text-devops-muted">{cert.year}</div>
                      <h4 className="text-lg font-bold mt-1">{cert.name}</h4>
                      <p className="text-devops-accent">{cert.issuer}</p>
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-2 text-sm text-devops-accent hover:underline inline-flex"
                        >
                          View Certificate
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
