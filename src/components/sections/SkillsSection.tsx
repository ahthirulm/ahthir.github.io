import { motion } from "framer-motion";
import { Monitor, Cloud, Shield, Network, Users, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: ["Windows 10/11", "macOS", "Linux", "Windows Server"],
  },
  {
    title: "Cloud & Identity",
    icon: Cloud,
    skills: ["Microsoft 365", "Azure AD (Entra)", "AWS", "OneLogin", "Microsoft Intune"],
  },
  {
    title: "Security Tools",
    icon: Shield,
    skills: ["SentinelOne (EDR)", "Proofpoint", "Microsoft Defender", "Fortinet Firewall", "CCTV & Access Control"],
  },
  {
    title: "Networking",
    icon: Network,
    skills: ["DNS", "DHCP", "VPN", "VLANs", "HPE Switches", "CAT Cabling"],
  },
  {
    title: "Remote Support",
    icon: Users,
    skills: ["TeamViewer", "ConnectWise", "LogMeIn", "Zendesk", "Help Desk Systems"],
  },
  {
    title: "IT Management",
    icon: Wrench,
    skills: ["Snipe-IT", "Active Directory", "Rippling HRIS", "User Lifecycle Management", "SOP Documentation"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-glow group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
