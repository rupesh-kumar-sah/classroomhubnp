import { CourseCard } from "@/components/shared/CourseCard";
import { premiumCourses } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

      <section className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 font-headline">
          Available Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumCourses.map((course) => (
            <CourseCard key={course.id} course={course} isPremium />
            ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 font-headline">
          Payment Methods
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Pay with eSewa</CardTitle>
              <CardDescription>Send payment to the details below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="text-center">
                    <p className="text-lg font-semibold">Rupesh Kumar Sah</p>
                </div>
                <p className="text-xs text-muted-foreground text-center">After payment, please send a screenshot of the transaction to <a href="mailto:rsah0123456@gmail.com" className="underline">rsah0123456@gmail.com</a> to get access.</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Pay with Khalti</CardTitle>
              <CardDescription>Send payment to the details below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="text-center">
                    <p className="text-lg font-semibold">Rupesh Kumar Sah</p>
                </div>
                <p className="text-xs text-muted-foreground text-center">After payment, please send a screenshot of the transaction to <a href="mailto:rsah0123456@gmail.com" className="underline">rsah0123456@gmail.com</a> to get access.</p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
