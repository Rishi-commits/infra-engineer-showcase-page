
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // This data would typically come from a CMS or API
  // Replace with your own information
  const personalData = {
    name: "John Doe",
    title: "DevOps Engineer & Cloud Architect",
    summary: "I build scalable infrastructure and automate deployment pipelines, helping companies streamline their operations and deliver software more efficiently.",
    bio: `I'm a passionate DevOps engineer with over 5 years of experience designing, implementing, and managing cloud infrastructure and CI/CD pipelines. 

I focus on creating reliable, secure, and efficient systems that enable development teams to deliver software faster and with higher quality. My approach combines infrastructure as code, containerization, and automation to solve complex operational challenges.

My goal is to bridge the gap between development and operations, fostering a culture of collaboration and continuous improvement.`,
    tagline: "Building bridges between development and operations",
    resumeLink: "#", // Add your resume link here
    contactInfo: {
      email: "john.doe@example.com",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
  };

  const skillCategories = [
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "Terraform", level: 85 },
      ],
    },
    {
      name: "CI/CD & Automation",
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "GitHub Actions", level: 85 },
        { name: "Ansible", level: 75 },
        { name: "Python", level: 80 },
      ],
    },
  ];

  const tools = [
    "AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", 
    "Ansible", "Jenkins", "GitHub Actions", "CircleCI", "Prometheus", 
    "Grafana", "ELK Stack", "Python", "Bash", "Git", "Linux"
  ];

  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description: [
        "Led the migration of legacy infrastructure to Kubernetes, reducing deployment time by 70% and improving scalability.",
        "Implemented GitOps workflows with ArgoCD, enabling continuous deployment with improved reliability and auditability.",
        "Designed and implemented a multi-account AWS architecture following security best practices and compliance requirements."
      ],
      technologies: ["Kubernetes", "AWS", "Terraform", "ArgoCD", "Prometheus", "Grafana"]
    },
    {
      title: "DevOps Engineer",
      company: "Innovate Solutions",
      period: "2018 - 2021",
      description: [
        "Built CI/CD pipelines using Jenkins, reducing release cycles from weeks to days.",
        "Implemented Infrastructure as Code using Terraform and AWS CloudFormation.",
        "Set up monitoring and alerting systems using Prometheus and Grafana, improving system reliability."
      ],
      technologies: ["Jenkins", "AWS", "Terraform", "Docker", "Prometheus", "Bash"]
    },
    {
      title: "Systems Administrator",
      company: "Data Systems LLC",
      period: "2016 - 2018",
      description: [
        "Managed on-premises Linux servers and virtualization platforms.",
        "Automated routine operational tasks using Bash and Python scripts.",
        "Implemented backup and disaster recovery solutions, improving data security."
      ],
      technologies: ["Linux", "VMware", "Bash", "Python", "Backup Solutions"]
    },
  ];

  const education = [
    {
      degree: "B.S. in Computer Science",
      institution: "University of Technology",
      year: "2012 - 2016",
      description: "Focus on distributed systems and network security"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified DevOps Engineer Professional",
      issuer: "Amazon Web Services",
      year: "2021",
      link: "#"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2020",
      link: "#"
    },
    {
      name: "Terraform Associate",
      issuer: "HashiCorp",
      year: "2019",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection 
          name={personalData.name}
          title={personalData.title}
          summary={personalData.summary}
          resumeLink={personalData.resumeLink}
        />
        
        <AboutSection 
          bio={personalData.bio}
          tagline={personalData.tagline}
        />
        
        <SkillsSection 
          skillCategories={skillCategories}
          tools={tools}
        />
        
        <ExperienceSection 
          experiences={experiences}
        />
        
        <EducationSection 
          education={education}
          certifications={certifications}
        />
        
        <ContactSection 
          contactInfo={personalData.contactInfo}
        />
      </main>
      
      <Footer name={personalData.name} />
    </div>
  );
};

export default Index;
