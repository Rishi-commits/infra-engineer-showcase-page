
import { Heart } from "lucide-react";

interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-devops-dark py-8 text-white/80">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              © {currentYear} {name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
