'use client';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  codingCourses,
  premiumCourses,
  subjects,
} from "@/lib/data";
import { SubjectCard } from "@/components/shared/SubjectCard";
import { CourseCard } from "@/components/shared/CourseCard";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-1");

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Unlock Your Potential with ClassroomHubNP
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Comprehensive notes for Class 12, hands-on coding tutorials, and
                premium guides to ace your exams. All in one place.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/notes">
                    Start Learning for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/premium">
                    Explore Premium
                  </Link>
                </Button>
              </div>
            </div>
            {heroImage && (
               <Image
                 src={heroImage.imageUrl}
                 alt={heroImage.description}
                 width={600}
                 height={400}
                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                 data-ai-hint={heroImage.imageHint}
               />
             )}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Master Your Subjects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Free, comprehensive, and syllabus-aligned notes for your core
                Class 12 subjects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-12">
            {subjects.slice(0, 5).map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Learn to Code
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dive into the world of programming with our beginner-friendly
                coding tutorials and challenges.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {codingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Go Premium for an Edge
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get access to exclusive study guides, video lectures, and mock tests for competitive exams.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {premiumCourses.map((course) => (
              <CourseCard key={course.id} course={course} isPremium />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/premium">
                View All Premium Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
