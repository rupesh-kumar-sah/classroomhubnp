
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Dna, FlaskConical, Stethoscope } from 'lucide-react';

export default function NeetNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          NEET Ultimate Prep Guide
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Your guide to the core subjects for the National Eligibility cum Entrance Test (NEET-UG).
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Dna className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Biology</CardTitle>
            </div>
            <CardDescription>Botany & Zoology: The most important section for NEET.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Biology carries the highest weightage in NEET (360 out of 720 marks). Mastering NCERT is the key to scoring high.
            </p>
            <p>
              <strong>High-Weightage Units:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Human Physiology:</strong> A large and crucial unit covering all major organ systems.
              </li>
              <li>
                <strong>Genetics and Evolution:</strong> Conceptually challenging but very high-yield.
              </li>
              <li>
                <strong>Ecology & Environment:</strong> Factual and scoring, requires thorough reading of NCERT.
              </li>
               <li>
                <strong>Plant Physiology:</strong> Photosynthesis and Respiration are important chapters.
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
            <CardDescription>Balancing Physical, Organic, and Inorganic Chemistry.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              NEET Chemistry tests fundamental concepts and their applications. It is generally considered easier than the JEE chemistry section.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Physical Chemistry:</strong> Focus on formula-based chapters like Chemical Kinetics, Equilibrium, and Thermodynamics.
              </li>
              <li>
                <strong>Organic Chemistry:</strong> Basic principles, Hydrocarbons, and oxygen-containing compounds are key.
              </li>
              <li>
                <strong>Inorganic Chemistry:</strong> Chemical Bonding and the s-block & p-block elements are crucial.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Stethoscope className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Physics</CardTitle>
            </div>
            <CardDescription>Tackling the most numerically intensive section.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
                Physics in NEET requires a clear understanding of concepts and quick application of formulas.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Mechanics:</strong> Laws of Motion, Work, Energy, and Power are foundational.
              </li>
              <li>
                <strong>Modern Physics & Electrodynamics:</strong> These two units combined contribute a significant portion of the paper.
              </li>
              <li>
                <strong>Thermodynamics:</strong> Questions are often straightforward and formula-based.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
