
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { BookOpen, Calculator, PenSquare } from 'lucide-react';

export default function SatNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          SAT Masterclass Guide
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          An overview of the sections in the Digital SAT for international university admissions.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Reading and Writing</CardTitle>
            </div>
            <CardDescription>Assessing comprehension, analysis, and editing skills.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This consolidated section of the Digital SAT tests a range of skills through short passages on various subjects.
            </p>
            <p>
              <strong>Key Question Types:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Information and Ideas:</strong> Finding explicit or implicit information, and determining the central idea.
              </li>
              <li>
                <strong>Craft and Structure:</strong> Analyzing word choice, text structure, and purpose.
              </li>
              <li>
                <strong>Expression of Ideas:</strong> Improving the effectiveness of written expression (transitions, rhetorical synthesis).
              </li>
              <li>
                <strong>Standard English Conventions:</strong> Editing for grammar, usage, and punctuation.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Calculator className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Math</CardTitle>
            </div>
            <CardDescription>Covering Algebra, Advanced Math, and more.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              The Math section is divided into two modules. A calculator is now allowed on the entire section (using the built-in Desmos calculator).
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Algebra:</strong> Linear equations and inequalities, systems of equations.
              </li>
              <li>
                <strong>Advanced Math:</strong> Equivalent expressions, quadratic equations, exponential functions, and other nonlinear functions.
              </li>
              <li>
                <strong>Problem-Solving and Data Analysis:</strong> Ratios, percentages, proportional relationships, and analyzing data from graphs and tables.
              </li>
              <li>
                <strong>Geometry and Trigonometry:</strong> Area, volume, lines, angles, triangles, and trigonometric functions.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
