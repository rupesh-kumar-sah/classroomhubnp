
"use client";

import * as React from "react";
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
  LogOut,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";
import AuthModal from "@/components/auth/AuthModal";

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
  const { user, loading, logout } = useAuth();
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<"login" | "signup">("login");

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const renderNavLink = (href: string, label: string, Icon: React.ElementType, isMobile = false) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        key={href}
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
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block font-headline">
                ClassroomHubNP
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
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline">ClassroomHubNP</span>
                    </Link>
                  </SheetClose>
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
             {loading ? null : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                       <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                      <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.displayName || "User"}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" onClick={() => openAuthModal("login")}>Log in</Button>
                <Button onClick={() => openAuthModal("signup")} className="bg-primary hover:bg-primary/90 text-primary-foreground">Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </header>
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={(newMode) => setAuthMode(newMode)}
      />
    </>
  );
}
