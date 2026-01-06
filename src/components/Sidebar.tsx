import { useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Award, Code, Mail, Menu, X, Linkedin, Github, MessageCircle } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/ahthir", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: MessageCircle, href: "https://wa.me/971504093473", label: "WhatsApp" },
];

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 glass-card rounded-lg hover-glow"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isMobileOpen ? 0 : -300 }}
        className="fixed lg:translate-x-0 left-0 top-0 h-screen w-72 glass-card border-r border-border z-40 flex flex-col items-center py-8 lg:animate-none"
        style={{ transform: "none" }}
      >
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex fixed left-0 top-0 h-screen w-72 glass-card border-r border-border z-40 flex-col items-center py-8"
        >
          <SidebarContent activeSection={activeSection} onNavigate={onNavigate} setIsMobileOpen={setIsMobileOpen} />
        </motion.aside>

        {/* Mobile Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: isMobileOpen ? 0 : -300 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed left-0 top-0 h-screen w-72 glass-card border-r border-border z-40 flex flex-col items-center py-8"
        >
          <SidebarContent activeSection={activeSection} onNavigate={onNavigate} setIsMobileOpen={setIsMobileOpen} />
        </motion.aside>
      </motion.aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

interface SidebarContentProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  setIsMobileOpen: (open: boolean) => void;
}

const SidebarContent = ({ activeSection, onNavigate, setIsMobileOpen }: SidebarContentProps) => (
  <>
    {/* Profile Section */}
    <div className="flex flex-col items-center mb-8">
      <motion.div
        className="relative w-28 h-28 mb-4"
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-cyan-400 animate-pulse-glow" />
        <img
          src={profileImg}
          alt="Ul. Ahthir"
          className="relative w-full h-full rounded-full object-cover border-2 border-primary p-1"
        />
      </motion.div>
      <h2 className="text-xl font-bold text-foreground">Ul. Ahthir</h2>
      <p className="text-sm text-muted-foreground text-center px-4">Cyber Security Specialist</p>
    </div>

    {/* Social Links */}
    <div className="flex gap-3 mb-8">
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-4 h-4" />
        </motion.a>
      ))}
    </div>

    {/* Navigation */}
    <nav className="flex flex-col gap-1 w-full px-4">
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => {
            onNavigate(item.id);
            setIsMobileOpen(false);
          }}
          whileHover={{ x: 5 }}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            activeSection === item.id
              ? "bg-primary/10 text-primary border-l-2 border-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          }`}
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium">{item.label}</span>
        </motion.button>
      ))}
    </nav>

    {/* Footer */}
    <div className="mt-auto text-center text-xs text-muted-foreground px-4">
      <p>© 2025 Ul. Ahthir</p>
      <p className="mt-1">Dubai, UAE</p>
    </div>
  </>
);

export default Sidebar;
