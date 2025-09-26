import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <p className="text-sm font-semibold text-foreground font-headline">
            ClassroomHubNP
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ClassroomHubNP. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm hover:underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm hover:underline underline-offset-4"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
