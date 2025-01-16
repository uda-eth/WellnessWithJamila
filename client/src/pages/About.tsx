import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Jamila Leina</h1>

        <div className="relative mb-12 rounded-lg overflow-hidden shadow-xl">
          <div className="relative w-full">
            <img 
              src="/images/jamila-profile.jpeg"
              alt="Jamila Leina"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="text-muted-foreground mb-4">
              With years of experience in holistic wellness and trauma-informed healing,
              I've dedicated my life to helping others find their path to wholeness and harmony.
            </p>
            <p className="text-muted-foreground">
              Through the development of unique methodologies like the Diamond Methodology
              and Harmony of Her, I've created a comprehensive approach to healing that
              addresses both body and spirit.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
            <p className="text-muted-foreground mb-4">
              I believe in creating a safe, nurturing environment where healing can naturally
              unfold. My trauma-informed programs are designed to meet you where you are
              and guide you toward your wellness goals with compassion and understanding.
            </p>
            <p className="text-muted-foreground">
              Through the integration of various healing modalities and the power of
              guided meditation through ZenQuill, we work together to restore balance
              and promote lasting transformation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}