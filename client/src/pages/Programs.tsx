import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Diamond Methodology",
    description: "A comprehensive healing approach that integrates mind, body, and spirit.",
    details: [
      "Trauma-informed healing techniques",
      "Personal transformation framework",
      "Integrated wellness practices",
      "One-on-one guidance"
    ]
  },
  {
    title: "Harmony of Her",
    description: "Empowering women through collective healing and personal growth.",
    details: [
      "Women's wellness circles",
      "Emotional healing practices",
      "Community support",
      "Monthly workshops"
    ]
  },
  {
    title: "Divine Pressure",
    description: "Therapeutic bodywork designed to release physical and emotional tension.",
    details: [
      "Specialized pressure point therapy",
      "Energy balancing",
      "Stress relief techniques",
      "Personalized treatment plans"
    ]
  }
];

export default function Programs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <Card key={program.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 mb-6">
                {program.details.map((detail) => (
                  <li key={detail} className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
