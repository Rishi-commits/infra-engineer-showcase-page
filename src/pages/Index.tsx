
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
    name: "Rishabh Jain",
    title: "Software Engineer",
    summary: "I build scalable infrastructure and automate deployment pipelines, helping companies streamline their operations and deliver software more efficiently.",
    bio: `Results-driven Software Developer with 5+ years of experience in designing and implementing data-driven solutions. Adept at CI/CD pipelines, and DevOps automation. Proven expertise in managing services such as  assisting Solution Designers and IT Architects in problem-solving, and implementing Agile methodologies for efficient project execution. Strong knowledge of cloud concepts, cloud architecture, and deployment using Jenkins.`,
    tagline: "Building bridges between development and operations",
    resumeLink: "#", // Add your resume link here
    contactInfo: {
      email: "jain98187@gmail.com",
      linkedin: "https://www.linkedin.com/in/rishabh-jain-b5836a136/",
      github: "",
    },
  };

  const skillCategories = [
    {
          name: "Development",
          skills: [
            { name: "Java", level: 90 },
            { name: "Spring Boot", level: 85 },
            { name: "Microservices", level: 80 },
            { name: "Kafka", level: 80 },
          ],
    },
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
      title: "Associate Projects",
      company: "Cognizant Technology Solutions.",
      period: "June 2022 - Present",
      description: [
        "Developed and automated CI/CD pipelines using Jenkins and Apache Airflow to ensure seamless application deployment that reduced deployment time by 30%.",
        "Implemented data pipelines and solutions, enhancing data processing efficiency by 20%.",
        "Collaborated with IT Architects and Solution Designers to troubleshoot complex issues and optimize existing processes.",
        "Migrated applications from Java 8 to Java 11, resulting in a 25% performance boost and reduced security vulnerabilities.",
        "Led Agile sprints and ensured timely project delivery with adherence to Agile best practices."
      ],
      technologies: ["Java","Spring Boot", "GitHub", "Jenkins"]
    },
    {
      title: "Senior Systems Engineer",
      company: "Infosys",
      period: "2019 - 2022",
      description: [
        "Enhanced real-time data processing by transitioning from JMS to Kafka, resulting in a 40% reduction in latency and a 30% increase in throughput.",
        "Improved security by 25% and reduced reliance on third-party services by 40% by migrating the application to Azure VM, ensuring better control over on-premises server management.",
        "Streamlined application integration by re-architecting from EJB to Spring Boot, eliminating dependency on third-party JCA adapters, which increased system reliability by 30% and reduced integration issues by 50%."
      ],
      technologies: ["Jenkins", "MS Azure", "Java", "Spring Boot", "Kafka"]
    },
  ];

  const education = [
    {
      degree: "B.E. in Computer Science",
      institution: "Solapur University",
      year: "2015 - 2019",
      description: "Focus on distributed systems and network security"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      link: "#"
    },
    {
      name: "Microsoft Certified: Azure fundamentals",
      issuer: "Microsoft",
      year: "2021",
      link: "#"
    },
    {
      name: "Infosys certified Global Agile developer",
      issuer: "Infosys",
      year: "2020",
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
