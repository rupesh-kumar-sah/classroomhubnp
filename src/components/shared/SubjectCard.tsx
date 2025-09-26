import Image from "next/image";
import Link from "next/link";
import type { Subject } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type SubjectCardProps = {
  subject: Subject;
};

export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <Link href={subject.path} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
            <Image
              src={subject.image.url}
              alt={subject.title}
              width={400}
              height={300}
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={subject.image.hint}
            />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-bold font-headline">{subject.title}</CardTitle>
          <CardDescription className="mt-1 text-sm">
            {subject.description}
          </CardDescription>
          <div className="mt-4 flex items-center text-sm font-semibold text-primary group-hover:underline">
            View Notes
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
