import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "ClassroomHub",
  description: "Your modern eLearning platform for Class 12 and coding.",
};

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          ptSans.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
