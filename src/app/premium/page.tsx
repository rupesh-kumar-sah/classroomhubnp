import { CourseCard } from "@/components/shared/CourseCard";
import { premiumCourses } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function PremiumPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Premium Study Guides
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Get the competitive edge with our expertly curated content for top entrance exams.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg border shadow-sm mb-16">
        <h2 className="text-2xl font-bold text-center mb-6 font-headline">Why Go Premium?</h2>
        <ul className="space-y-4 text-muted-foreground">
          <li className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <span>
              <strong className="text-foreground">In-Depth Study Guides:</strong> Access meticulously crafted notes for competitive exams like JEE, NEET, and SAT.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <span>
              <strong className="text-foreground">Expert Video Lectures:</strong> Learn from top educators with complete video courses covering complex topics.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <span>
              <strong className="text-foreground">Mock Test Series:</strong> Simulate exam conditions with full-length, timed tests and get detailed performance analysis.
            </span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {premiumCourses.map((course) => (
          <CourseCard key={course.id} course={course} isPremium />
        ))}
      </div>
    </div>
  );
}
