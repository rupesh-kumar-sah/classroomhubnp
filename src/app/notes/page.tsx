import { SubjectCard } from "@/components/shared/SubjectCard";
import { subjects } from "@/lib/data";

export default function NotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Class 12 Subject Notes
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Browse our comprehensive, syllabus-aligned notes for all your core subjects. Completely free.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-12">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}
