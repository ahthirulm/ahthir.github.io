import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "IT Operations & Support Specialist",
    company: "DTiQ",
    location: "United States (Remote)",
    period: "Sep 2025 – Present",
    description: [
      "Delivered technical support across Windows 10/11, macOS, and Linux environments",
      "Managed Microsoft 365, Azure AD (Entra), and OneLogin environments with SSO and MFA",
      "Deployed and monitored endpoints through Microsoft Intune (Endpoint Manager)",
      "Implemented EDR (SentinelOne), Proofpoint, and Microsoft 365 Defender solutions",
      "Collaborated with Global Head of IT across US, Australia, and Sri Lanka teams",
    ],
  },
  {
    title: "Digital Operations & IT Support Executive",
    company: "AARCO Real Estate L.L.C",
    location: "UAE",
    period: "May 2025 – Present (Contract)",
    description: [
      "Ensured 99% uptime across cloud infrastructure and web services",
      "Oversaw web server, email systems, and digital platform optimization",
      "Act as digital advisor to CEO for executive-level technical support",
      "Managed regulatory compliance and license renewals",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "ideaGeek",
    location: "Sri Lanka",
    period: "Jan 2023 – Feb 2025 (2 yr 1 mos)",
    description: [
      "Delivered IT and network support achieving faster incident resolution",
      "Deployed client devices, network switches, and CAT cabling",
      "Set up web hosting, business emails, and network configurations",
      "Managed CCTV and access control systems",
    ],
  },
  {
    title: "Intern Networking",
    company: "DMS Electronics",
    location: "Sri Lanka",
    period: "Dec 2021 – Jun 2022 (7 mos)",
    description: [
      "Provided technical support resolving network and system issues",
      "Configured HPE switches, VLANs, and Fortinet firewall systems",
      "Supported network monitoring and infrastructure security initiatives",
    ],
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
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
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

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
