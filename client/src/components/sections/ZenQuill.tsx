import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";

export default function ZenQuill() {
  const [imageError, setImageError] = useState(false);
  const [, setLocation] = useLocation();

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
            <div 
              className="mb-8 cursor-pointer hover:opacity-90 transition-opacity relative w-64 h-64"
              onClick={() => setLocation('/zenquill')}
            >
              {!imageError ? (
                <img 
                  src="/ZenQuill_Logo-removebg-preview.png"
                  alt="ZenQuill"
                  className="w-full h-full object-contain rounded-lg"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary/10 rounded-lg shadow-lg">
                  <p className="text-muted-foreground">ZenQuill</p>
                </div>
              )}
            </div>

            <h2 className="text-3xl font-bold mb-6">ZenQuill Collaboration</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the power of guided meditations through our exclusive partnership with ZenQuill. 
              Enhance your wellness journey with carefully curated content designed to complement your healing process.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg"
                className="bg-primary/90 hover:bg-primary"
                onClick={() => setLocation('/zenquill')}
              >
                Learn More About ZenQuill
              </Button>
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