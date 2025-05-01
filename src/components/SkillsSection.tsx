
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
  tools: string[];
}

const SkillsSection = ({ skillCategories, tools }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
          <p className="text-xl font-medium text-devops-accent mb-12">My technical expertise and toolset</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillCategories.map((category, i) => (
              <div key={category.name} className="animate-fade-in opacity-0" style={{ animationDelay: `${0.1 * i}s`, animationFillMode: 'forwards' }}>
                <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-secondary" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <Card className="mt-12 p-8 bg-secondary/50 border border-border/50">
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="bg-background text-foreground py-1.5 px-3">
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
