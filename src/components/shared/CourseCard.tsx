import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

type CourseCardProps = {
  course: Course;
  isPremium?: boolean;
};

export function CourseCard({ course, isPremium = false }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-0 relative">
        <Link href={course.path} className="group">
          <Image
            src={course.image.url}
            alt={course.title}
            width={500}
            height={300}
            className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={course.image.hint}
          />
        </Link>
        {isPremium && course.price ? (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
            {course.price}
          </Badge>
        ) : (
           <Badge variant="secondary" className="absolute top-3 right-3">Free</Badge>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-bold font-headline">
            <Link href={course.path} className="hover:text-primary transition-colors">
                {course.title}
            </Link>
        </CardTitle>
        <CardDescription className="mt-2 text-base">
          {course.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={course.path}>
            {isPremium ? "Get Access" : "Start Learning"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
