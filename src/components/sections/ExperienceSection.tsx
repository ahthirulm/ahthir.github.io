import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";

const experiences = [
  {
    title: "IT Operations & Support Specialist",
    company: "DTiQ",
    location: "United States · Hybrid",
    period: "Sep 2025 – Present · 5 mos",
    isGrouped: true,
    groupLabel: "6 mos at DTiQ",
    description: [
      "Deliver technical support for Windows 10/11, macOS, and Linux environments, Microsoft 365 ecosystem, and internal business applications",
      "Manage and deploy endpoints using Microsoft Intune (Endpoint Manager) to enforce security policies and application standards",
      "Troubleshoot hardware, software, and complex network issues, including advanced DHCP/DNS configuration and endpoint connectivity",
      "Manage user accounts, permissions, and identity services across platforms such as Azure AD (Entra), OneLogin, and MS365",
      "Support remote users via TeamViewer, ConnectWise, and LogMeIn, ensuring minimal downtime and seamless access",
      "Participate in IT infrastructure and process improvement projects, including global inventory migration (XLS → Snipe-IT)",
      "Assist in deploying and managing EDR solutions (SentinelOne) to enhance cybersecurity posture",
      "Collaborate with cross-functional teams across the US, Australia, and Sri Lanka to deliver consistent IT operations globally",
    ],
    skills: ["Microsoft 365", "Microsoft Azure", "+10 skills"],
  },
  {
    title: "Technical Support Specialist",
    company: "DTiQ",
    location: "United States · Hybrid",
    period: "Aug 2025 – Sep 2025 · 2 mos",
    isGrouped: true,
    description: [
      "Provided exceptional remote IT support, addressing hardware, software, and networking issues for clients across the USA and Australia",
      "Efficiently managed customer inquiries through various channels, ensuring high satisfaction levels",
      "Troubleshot Windows/macOS environments, configured workstations, and documented support tickets",
      "Collaborated with senior IT teams on complex issues",
    ],
    skills: ["Zendesk", "Remote IT Support", "+3 skills"],
  },
  {
    title: "Digital Operations & IT Support Executive",
    company: "AARCO Real Estate L.L.C",
    location: "Dubai, UAE · Hybrid",
    period: "May 2025 – Present · 9 mos",
    contractType: "Contract",
    description: [
      "Administered cloud infrastructure, email servers, and company web servers, ensuring 99% uptime",
      "Monitored system health, performed troubleshooting, and handled license renewals and compliance",
      "Supported the CEO and staff with digital operations and IT needs",
      "Documented system configurations and support activities for operational continuity",
    ],
    skills: ["IT Support", "Digital Operations", "+2 skills"],
  },
  {
    title: "Networking Intern",
    company: "DMS Electronics (Pvt) Ltd",
    location: "Colombo, Sri Lanka · On-site",
    period: "Dec 2021 – Jun 2022 · 7 mos",
    contractType: "Full-time",
    description: [
      "Assisted with configuration of enterprise firewalls (Fortinet) and HPE switches, including VLAN setups and security policies",
      "Supported Windows Server installation, configuration, and monitoring for stable IT operations",
      "Conducted structured cabling, patch panel management, and server room installations following best practices",
      "Monitored corporate email servers, ensuring uptime, filtering spam, and resolving user access issues",
      "Participated in network upgrades, backups, and security monitoring, gaining practical hands-on experience",
    ],
    skills: ["Networking", "Fortinet", "+2 skills"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10 glow-box" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <div className="glass-card rounded-xl p-6 hover-glow">
                  {/* Group Label for DTiQ roles */}
                  {exp.isGrouped && exp.groupLabel && (
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{exp.groupLabel}</span>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                        {exp.contractType && <span className="text-muted-foreground font-normal"> · {exp.contractType}</span>}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
