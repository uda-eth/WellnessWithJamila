import { Link } from "wouter";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10">
              <img
                src="/images/jamila-logo.jpeg"
                alt="Wellness with Jamila Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold text-primary">Wellness with Jamila</span>
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                onClick={() => window.location.href = '/about'}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                onClick={() => window.location.href = '/programs'}
              >
                Programs
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">
                <Button variant="default" className="ml-4">
                  Contact
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

interface NavigationMenuLinkProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function NavigationMenuLink({ className, onClick, children }: NavigationMenuLinkProps) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}