import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function HarmonyOfHer() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/programs">
          <Button variant="ghost" className="mb-6">← Back to Programs</Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Harmony of Her</h1>
        
        <div className="relative mb-12 aspect-video rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1598555763574-dca77e10427e"
            alt="Harmony of Her"
            className="object-cover w-full h-full"
          />
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-6">
              Harmony of Her is a transformative program designed specifically for women, 
              creating a sacred space for healing, growth, and empowerment through holistic 
              wellness practices and supportive community.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Program Elements</h3>
            <ul className="space-y-3 mb-6 text-muted-foreground">
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Women's Wellness Circles:</strong> Regular gatherings for sharing, healing, and supporting one another in a safe, nurturing environment.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Emotional Healing Practices:</strong> Learn and implement techniques for processing emotions and building emotional resilience.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Community Support:</strong> Connect with like-minded women on similar healing journeys, forming lasting bonds and support networks.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span><strong>Monthly Workshops:</strong> Explore various aspects of feminine wellness through guided workshops and practical exercises.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">What You'll Gain</h3>
            <ul className="space-y-3 mb-6 text-muted-foreground">
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Enhanced self-awareness and personal growth</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Deeper connection to your feminine wisdom</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>Tools for emotional and spiritual well-being</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold">•</span>
                <span>A supportive community of like-minded women</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Link href="/contact">
          <Button size="lg" className="w-full">Join Our Circle</Button>
        </Link>
      </div>
    </div>
  );
}
