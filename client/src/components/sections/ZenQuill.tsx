import { Button } from "@/components/ui/button";

export default function ZenQuill() {
  return (
    <div className="py-16 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">ZenQuill Collaboration</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the power of guided meditations through our exclusive partnership with ZenQuill. 
            Enhance your wellness journey with carefully curated content designed to complement your healing process.
          </p>
          <Button 
            size="lg"
            onClick={() => window.open('https://zenquill.ai', '_blank')}
          >
            Discover ZenQuill Meditations
          </Button>
        </div>
      </div>
    </div>
  );
}