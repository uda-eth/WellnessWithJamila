import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: "Diamond Methodology",
    description: "A transformative approach to healing trauma and discovering inner strength.",
    image: "https://images.unsplash.com/photo-1619968987472-4d1b2784592e"
  },
  {
    title: "Harmony of Her",
    description: "Empowering women through holistic wellness practices and community support.",
    image: "https://images.unsplash.com/photo-1598555763574-dca77e10427e"
  },
  {
    title: "Divine Pressure",
    description: "Specialized therapeutic techniques for physical and emotional release.",
    image: "https://images.unsplash.com/photo-1532009877282-3340270e0529"
  }
];

export default function Programs() {
  return (
    <div className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
