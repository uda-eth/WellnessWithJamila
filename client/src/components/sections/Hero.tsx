import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534096210335-a3b961613bb5')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.15
        }}
      />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <img 
            src="/images/jamila-logo.jpeg"
            alt="Jamila Leina Logo"
            className="w-48 h-auto mb-8"
          />
        </div>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Begin Your Journey to Holistic Wellness
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover transformative healing through trauma-informed programs and personalized wellness services.
          </p>
          <div className="flex gap-4">
            <Link href="/programs">
              <Button size="lg">Explore Programs</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Book a Session</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}