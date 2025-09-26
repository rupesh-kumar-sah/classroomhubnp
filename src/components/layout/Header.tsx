

"use client";

import Link from "next/link";
import {
  BookOpen,
  Code,
  GraduationCap,
  LayoutDashboard,
  Menu,
  SearchIcon,
  Sparkles,
  Contact,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/notes", label: "Notes", icon: BookOpen },
  { href: "/coding", label: "Coding", icon: Code },
  { href: "/premium", label: "Premium", icon: Sparkles },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/search", label: "Search", icon: SearchIcon },
  { href: "/contact", label: "Contact", icon: Contact },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLink = (href: string, label: string, Icon: React.ElementType, isMobile = false) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        key={label}
        className={cn(
          "transition-colors hover:text-foreground",
          isActive ? "text-foreground" : "text-muted-foreground",
          isMobile ? "flex items-center gap-4 px-2.5 py-2 text-lg" : "text-sm font-medium"
        )}
      >
        <Icon className="h-5 w-5" />
        {label}
      </Link>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              ClassroomHub
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label, icon }) => renderNavLink(href, label, icon))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">ClassroomHub</span>
                </Link>
                {navLinks.map(({ href, label, icon }) => (
                  <SheetClose asChild key={href}>
                    {renderNavLink(href, label, icon, true)}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost">Log in</Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
