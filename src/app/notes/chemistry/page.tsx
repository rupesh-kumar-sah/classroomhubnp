
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { FlaskConical, Beaker, Recycle } from 'lucide-react';

export default function ChemistryNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Class 12 Chemistry Notes
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Core concepts in Physical, Inorganic, and Organic Chemistry for your final year.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Beaker className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Solutions & Electrochemistry</CardTitle>
            </div>
            <CardDescription>Exploring the properties of solutions and electrochemical cells.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This section covers the quantitative aspects of solutions and the principles of electricity generation from chemical reactions.
            </p>
            <p>
              <strong>Key Concepts:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Colligative Properties:</strong> Properties of solutions that depend on the number of solute particles, not their identity.
              </li>
              <li>
                <strong>Nernst Equation:</strong> Relates the reduction potential of an electrochemical reaction to the standard electrode potential, temperature, and concentrations.
              </li>
              <li>
                <strong>Kohlrausch's Law:</strong> Pertains to the conductivity of ions in solution.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Recycle className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">d- and f-Block Elements</CardTitle>
            </div>
            <CardDescription>Studying the transition and inner transition metals.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              These elements have unique properties due to their electronic configurations, such as variable oxidation states, colored ion formation, and catalytic activity.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Electronic Configuration:</strong> Understanding the filling of d and f orbitals.
              </li>
              <li>
                <strong>Lanthanoid Contraction:</strong> The steady decrease in the size of lanthanide ions with increasing atomic number.
              </li>
              <li>
                <strong>Coordination Compounds:</strong> The study of compounds containing a central metal atom bonded to surrounding molecules or ions.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Organic Chemistry</CardTitle>
            </div>
            <CardDescription>Focusing on reactions involving haloalkanes, alcohols, aldehydes, and more.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
                This part of chemistry is crucial for understanding the building blocks of life and many synthetic materials.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Named Reactions:</strong> Key reactions like the Wurtz reaction, Friedel-Crafts reaction, and Aldol condensation.
              </li>
              <li>
                <strong>Mechanisms:</strong> Understanding the step-by-step process of how reactions occur (e.g., SN1, SN2).
              </li>
              <li>
                <strong>Biomolecules:</strong> The study of carbohydrates, proteins, nucleic acids, and vitamins.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
