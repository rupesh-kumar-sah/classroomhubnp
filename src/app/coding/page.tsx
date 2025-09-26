import { CourseCard } from "@/components/shared/CourseCard";
import { CodeEditor } from "@/components/shared/CodeEditor";
import { codingCourses } from "@/lib/data";
import { Lightbulb } from "lucide-react";

export default function CodingPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Coding & Computer Science
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Learn practical coding skills with our interactive tutorials and challenges.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-8 font-headline">
          Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {codingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight mb-8 font-headline">
          Coding Challenges
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
                <div className="p-6 bg-card rounded-lg border">
                    <h3 className="text-xl font-semibold mb-2 font-headline">Challenge: Palindrome Checker</h3>
                    <p className="text-muted-foreground mb-4">
                        Write a function that takes a string as input and returns `true` if the string is a palindrome (reads the same forwards and backward) and `false` otherwise.
                    </p>
                    <div className="flex items-start p-4 bg-muted/50 rounded-lg">
                        <Lightbulb className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                            <strong>Hint:</strong> Try reversing the string or comparing characters from both ends moving inwards.
                        </p>
                    </div>
                </div>
                 <div className="p-6 bg-card rounded-lg border">
                    <h3 className="text-xl font-semibold mb-2 font-headline">Challenge: Find the Factorial</h3>
                    <p className="text-muted-foreground mb-4">
                        Write a function to calculate the factorial of a non-negative integer. For example, the factorial of 5 (5!) is 120.
                    </p>
                </div>
            </div>
            <div>
              <CodeEditor />
            </div>
        </div>
      </section>
    </div>
  );
}
