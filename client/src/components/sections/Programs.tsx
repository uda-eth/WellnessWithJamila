import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Diamond Methodology",
    description: "A transformative approach to healing trauma and discovering inner strength.",
    image: "https://images.unsplash.com/photo-1619968987472-4d1b2784592e",
    route: "/programs/diamond-methodology"
  },
  {
    title: "Harmony of Her",
    description: "Empowering women through holistic wellness practices and community support.",
    image: "https://images.unsplash.com/photo-1598555763574-dca77e10427e",
    route: "/programs/harmony-of-her"
  },
  {
    title: "Divine Pressure",
    description: "Specialized therapeutic techniques for physical and emotional release.",
    image: "https://images.unsplash.com/photo-1532009877282-3340270e0529",
    route: "/programs/divine-pressure"
  }
];

export default function Programs() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Programs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={program.route}>
                <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
                    <motion.img 
                      src={program.image} 
                      alt={program.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="group-hover:text-muted-foreground/80 transition-colors">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-40 right-0 w-96 h-96 rounded-full bg-primary"
        style={{ filter: 'blur(100px)' }}
      />
    </div>
  );
}