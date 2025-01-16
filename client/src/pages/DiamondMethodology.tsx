import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function DiamondMethodology() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/programs">
          <Button variant="ghost" className="mb-6">← Back to Programs</Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Diamond Methodology</h1>
        
        <div className="relative mb-12 aspect-video rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1619968987472-4d1b2784592e"
            alt="Diamond Methodology"
            className="object-cover w-full h-full"
          />
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-6">
              The Diamond Methodology is a transformative approach to healing trauma and discovering 
              inner strength. This comprehensive program integrates mind, body, and spirit to create 
              lasting positive change in your life.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Key Components</h3>
            <ul className="space-y-3 mb-6 text-muted-foreground">
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Trauma-Informed Healing:</strong> Learn evidence-based techniques to process and heal from past trauma in a safe, supportive environment.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Personal Transformation Framework:</strong> Develop a personalized roadmap for growth and healing, tailored to your unique journey and goals.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Integrated Wellness Practices:</strong> Incorporate holistic approaches including meditation, breathwork, and somatic experiencing.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>One-on-One Guidance:</strong> Receive personalized support and guidance throughout your healing journey.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Program Benefits</h3>
            <ul className="space-y-3 mb-6 text-muted-foreground">
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Develop resilience and emotional regulation skills</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Release limiting beliefs and patterns</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Create sustainable self-care practices</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Experience deep healing and transformation</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Link href="/contact">
          <Button size="lg" className="w-full">Schedule a Consultation</Button>
        </Link>
      </div>
    </div>
  );
}
