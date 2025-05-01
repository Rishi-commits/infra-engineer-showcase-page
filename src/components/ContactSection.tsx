
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-devops-dark text-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="text-xl font-medium text-devops-accent mb-12">Let's discuss how we can work together</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-devops-accent/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-devops-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-devops-accent transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                {contactInfo.linkedin && (
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-devops-accent/20 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-devops-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">LinkedIn</p>
                      <a 
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-devops-accent transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                )}
                
                {contactInfo.github && (
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-devops-accent/20 flex items-center justify-center">
                      <Github className="h-5 w-5 text-devops-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">GitHub</p>
                      <a 
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-devops-accent transition-colors"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {contactInfo.linkedin && (
                    <a 
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-devops-accent/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                  )}
                  
                  {contactInfo.github && (
                    <a 
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-devops-accent/20 transition-colors"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                  )}
                  
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-devops-accent/20 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-devops-accent"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-devops-accent"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-devops-accent min-h-[120px]"
                    placeholder="Your message"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-devops-accent hover:bg-devops-accent/90 text-white"
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
