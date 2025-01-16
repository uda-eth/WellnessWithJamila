import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ZenQuill() {
  return (
    <div className="py-16 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <Link href="/zenquill">
              <motion.div className="mb-8 cursor-pointer hover:opacity-90 transition-opacity">
                <img 
                  src="/images/zenquill-hero.jpeg"
                  alt="ZenQuill"
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </Link>

            <h2 className="text-3xl font-bold mb-6">ZenQuill Collaboration</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the power of guided meditations through our exclusive partnership with ZenQuill. 
              Enhance your wellness journey with carefully curated content designed to complement your healing process.
            </p>
            <div className="flex gap-4">
              <Link href="/zenquill">
                <Button 
                  size="lg"
                  className="bg-primary/90 hover:bg-primary"
                >
                  Learn More About ZenQuill
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://zenquill.ai', '_blank')}
              >
                Visit ZenQuill Website
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}