
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Atom, FlaskConical, Sigma } from 'lucide-react';

export default function JeeNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          JEE Advanced Prep Guide
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          An overview of the core subjects and strategy for cracking the Joint Entrance Examination (Advanced).
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Atom className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Physics</CardTitle>
            </div>
            <CardDescription>Key topics and concepts for the Physics section.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              The JEE Physics paper is known for its conceptual depth and requires a strong foundation in both theory and problem-solving.
            </p>
            <p>
              <strong>High-Weightage Topics:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Mechanics:</strong> Rotational Motion, SHM, and Gravitation are consistently important.
              </li>
              <li>
                <strong>Electrodynamics:</strong> Focus on Gauss's Law, Ampere's Law, and electromagnetic induction.
              </li>
              <li>
                <strong>Optics & Modern Physics:</strong> Wave optics, photoelectric effect, and Bohr's model are crucial.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Chemistry</CardTitle>
            </div>
            <CardDescription>A look at Physical, Organic, and Inorganic Chemistry.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Chemistry is often considered the most scoring subject in JEE. A balanced approach across all three branches is essential.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Physical Chemistry:</strong> Thermodynamics, Chemical Equilibrium, and Electrochemistry are calculation-intensive.
              </li>
              <li>
                <strong>Organic Chemistry:</strong> Master General Organic Chemistry (GOC) and reaction mechanisms. Named reactions are key.
              </li>
              <li>
                <strong>Inorganic Chemistry:</strong> Coordination Compounds, Chemical Bonding, and p-Block elements are memory-based but high-yield.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Sigma className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Mathematics</CardTitle>
            </div>
            <CardDescription>Tackling the most challenging section of the exam.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
                The Mathematics paper tests your analytical and problem-solving skills with complex, multi-concept questions.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Calculus:</strong> Functions, Limits, Continuity, and Differentiability form the base. Definite integrals are very important.
              </li>
              <li>
                <strong>Coordinate Geometry:</strong> Conic sections (parabola, ellipse, hyperbola) are a major component.
              </li>
              <li>
                <strong>Algebra:</strong> Complex Numbers, Quadratic Equations, and Permutations & Combinations are fundamental topics.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
