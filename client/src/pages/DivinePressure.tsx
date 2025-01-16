import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function DivinePressure() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/programs">
          <Button variant="ghost" className="mb-6">← Back to Programs</Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Divine Pressure</h1>
        
        <div className="relative mb-12 aspect-video rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1532009877282-3340270e0529"
            alt="Divine Pressure"
            className="object-cover w-full h-full"
          />
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-6">
              Divine Pressure is a specialized therapeutic bodywork program designed to release 
              both physical and emotional tension. This unique approach combines traditional 
              pressure point therapy with energy work for a complete healing experience.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Treatment Approach</h3>
            <ul className="space-y-3 mb-6 text-muted-foreground">
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Specialized Pressure Point Therapy:</strong> Targeted work on specific points to release tension and promote healing throughout the body.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Energy Balancing:</strong> Subtle energy work to harmonize the body's natural flow and promote overall wellness.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Stress Relief Techniques:</strong> Learn and experience methods for ongoing tension release and stress management.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Personalized Treatment Plans:</strong> Customized sessions based on your specific needs and healing goals.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <ul className="space-y-3 mb-6 text-muted-foreground">
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Relief from chronic tension and pain</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Improved energy flow and vitality</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Enhanced body awareness and connection</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Deep relaxation and stress reduction</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Link href="/contact">
          <Button size="lg" className="w-full">Book a Session</Button>
        </Link>
      </div>
    </div>
  );
}
