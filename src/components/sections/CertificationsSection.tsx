import { motion } from "framer-motion";
import { Award, ExternalLink, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "ICSI | CNSS Certified Network Security Specialist",
    issuer: "ICSI, UK",
    type: "certification",
  },
  {
    title: "Fortinet NSE-3",
    issuer: "Fortinet",
    type: "certification",
  },
  {
    title: "System Administration and IT Infrastructure Services",
    issuer: "Coursera",
    type: "certification",
  },
  {
    title: "AWS Fundamentals: Going Cloud-Native",
    issuer: "Coursera",
    type: "certification",
  },
  {
    title: "Computer Graphic Designer (NVQ Level 4)",
    issuer: "Vocational Training Centre (VTC)",
    type: "certification",
  },
];

const education = {
  degree: "BSc (Hons) in Cyber Security & Digital Forensics",
  university: "Kingston University – London, UK",
  year: "2022",
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-xl p-8 mb-12 glow-box max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-xl bg-primary/10">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{education.degree}</h3>
              <p className="text-primary font-medium">{education.university}</p>
              <p className="text-muted-foreground mt-1">Graduated {education.year}</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-lg p-5 hover-glow group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
