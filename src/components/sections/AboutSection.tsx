import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Calendar, GraduationCap, Briefcase } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Dubai, UAE" },
  { icon: Phone, label: "Phone", value: "+971 50 409 3473" },
  { icon: Mail, label: "Email", value: "ahthirdxb@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/ahthir" },
  { icon: Calendar, label: "Availability", value: "Immediate" },
  { icon: GraduationCap, label: "Degree", value: "BSc (Hons) Cyber Security" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl rotate-3 opacity-20" />
              <img
                src={profileImg}
                alt="Ul. Ahthir"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 glow-box">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">3+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-foreground">
              Cyber Security & IT Operations Specialist
            </h3>
            <p className="text-primary font-medium mb-6">
              BSc (Hons) in Cyber Security & Digital Forensics
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Cyber Security and Digital Forensics graduate with proven expertise in 
              diagnosing and resolving complex hardware and network issues, executing 
              system deployments, and managing vendor relationships. Proficient in 
              networking technologies, cloud platforms (Azure, AWS), and collaboration 
              tools. Strong analytical skills combined with effective communication to 
              drive operational efficiency and technology integration.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg glass-card hover-glow"
                >
                  <info.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    <p className="text-sm font-medium text-foreground truncate">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
