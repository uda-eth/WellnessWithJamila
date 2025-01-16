import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Wellness with Jamila</h3>
            <p className="text-sm text-muted-foreground">
              Holistic wellness services focused on healing and personal growth.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-primary">About</a>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <a className="text-sm text-muted-foreground hover:text-primary">Programs</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground">
              Follow our journey on social media for wellness tips and updates.
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Wellness with Jamila Leina, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
