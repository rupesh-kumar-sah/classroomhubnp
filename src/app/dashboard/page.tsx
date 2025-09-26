
'use client';
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { dashboardData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Book, Bookmark, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "dashboard-hero");
  return (
    <div>
      <section className="w-full py-12 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                Welcome to Your Dashboard
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Track your progress, review your bookmarks, and continue your learning journey.
              </p>
            </div>
            {heroImage && (
               <Image
                 src={heroImage.imageUrl}
                 alt={heroImage.description}
                 width={600}
                 height={300}
                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                 data-ai-hint={heroImage.imageHint}
               />
             )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <CardTitle>Your Progress</CardTitle>
                </div>
                <CardDescription>
                  Completion status of your recent courses and subjects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {dashboardData.progress.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">{item.subject}</p>
                      <p className="text-sm text-muted-foreground">{item.progress}%</p>
                    </div>
                    <Progress value={item.progress} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                 <div className="flex items-center gap-3">
                  <Bookmark className="h-6 w-6 text-primary" />
                  <CardTitle>Bookmarked Notes</CardTitle>
                </div>
                <CardDescription>
                  Quickly access your saved notes and articles.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {dashboardData.bookmarks.map((bookmark, index) => (
                  <div key={bookmark.id}>
                    <div className="flex items-start gap-3">
                      <Book className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0"/>
                      <div>
                        <p className="font-medium hover:text-primary cursor-pointer">{bookmark.title}</p>
                        <p className="text-sm text-muted-foreground">{bookmark.subject}</p>
                      </div>
                    </div>
                    {index < dashboardData.bookmarks.length - 1 && <Separator className="mt-4"/>}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
