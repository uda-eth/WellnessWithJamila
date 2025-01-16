import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ZenQuill() {
  const features = [
    {
      title: "Multi-Modal Journaling Options",
      description: "Capture your thoughts and feelings in the way that suits you best. Whether it's through voice, text, or a picture of a handwritten journal, ZenQuill transforms your entries into meaningful reflections."
    },
    {
      title: "Personalized AI-Powered Insights",
      description: "Gain deeper understanding with AI-driven insights tailored to your unique journaling patterns. These insights illuminate emotional trends and provide actionable guidance for your growth."
    },
    {
      title: "Guided Meditations",
      description: "Immerse yourself in meditations designed to regulate your nervous system and elevate your consciousness. Each session blends Jamila's personal reflections with transformative healing techniques."
    },
    {
      title: "AI-Enhanced Analytics",
      description: "Stay connected to your journey with analytics powered by AI. Receive personalized journal prompts that inspire deeper exploration and a recent mood summary to track your emotional progress."
    },
    {
      title: "Community Engagement",
      description: "Join a supportive network of like-minded individuals who share their stories and grow together. ZenQuill's community offers a safe space for connection and encouragement."
    },
    {
      title: "Personalized Downloadable Wallpapers",
      description: "Transform your AI-generated insights into inspiring artwork! ZenQuill creates personalized mantras as downloadable wallpapers, featuring stunning visuals crafted by DALL·E AI. These unique designs keep you motivated and aligned with your goals."
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.section className="mb-16" {...fadeInUp}>
          <h1 className="text-4xl font-bold mb-6">What is ZenQuill?</h1>
          <p className="text-lg text-muted-foreground">
            ZenQuill is more than just a platform—it's a sanctuary for emotional healing, mindfulness, and personal growth. Born from a vision to empower individuals through spiritual and reflective practices, ZenQuill combines modern technology with ancient wisdom to provide tools for navigating the complexities of life.
          </p>
        </motion.section>

        <motion.section className="mb-16" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-6">Why ZenQuill?</h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground">
                ZenQuill offers a transformative space for those seeking to heal, grow, and reconnect with their inner selves. Its unique blend of technology, spiritual wisdom, and evidence-based practices make it a trusted companion on your wellness journey.
              </p>
              <p className="text-muted-foreground">
                Whether you are exploring Jamila Leina's meditations or engaging in personal reflection, ZenQuill provides the tools to regulate your nervous system, expand your consciousness, and step into your highest potential.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section className="mb-16" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8">ZenQuill's Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="text-center" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-6">Experience ZenQuill Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover the synergy between Wellness with Jamila Leina and ZenQuill. Begin your journey to emotional balance, mindful living, and spiritual connection.
          </p>
          <Button
            size="lg"
            className="bg-primary/90 hover:bg-primary"
            onClick={() => window.open('https://zenquill.ai', '_blank')}
          >
            Visit ZenQuill
          </Button>
        </motion.section>
      </div>
    </div>
  );
}
