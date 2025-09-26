
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Atom, Zap, Magnet } from 'lucide-react';

export default function PhysicsNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Class 12 Physics Notes
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          An overview of key topics in the Class 12 Physics syllabus, from electrostatics to modern physics.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Electrostatics</CardTitle>
            </div>
            <CardDescription>The study of stationary electric charges.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This unit deals with the forces, fields, and potentials arising from static charges.
            </p>
            <p>
              <strong>Key Concepts:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Coulomb's Law:</strong> Describes the force between two point charges.
              </li>
              <li>
                <strong>Electric Field:</strong> The region around a charged particle where a force is exerted on other charged particles.
              </li>
              <li>
                <strong>Gauss's Law:</strong> Relates the distribution of electric charge to the resulting electric field.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Magnet className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Magnetic Effects of Current</CardTitle>
            </div>
            <CardDescription>Understanding the relationship between electricity and magnetism.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Moving charges or currents produce magnetic fields. This unit explores this fundamental interaction.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Biot-Savart Law:</strong> Used to calculate the magnetic field produced by a current element.
              </li>
              <li>
                <strong>Ampere's Circuital Law:</strong> Relates the integrated magnetic field around a closed loop to the electric current passing through the loop.
              </li>
              <li>
                <strong>Lorentz Force:</strong> The combined force on a charged particle due to electric and magnetic fields.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Atom className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Modern Physics</CardTitle>
            </div>
            <CardDescription>Delving into the world of quantum mechanics and nuclear physics.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
                This area of physics emerged in the 20th century, revolutionizing our understanding of the universe at a subatomic level.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Dual Nature of Matter and Radiation:</strong> The concept that particles can exhibit both wave and particle properties.
              </li>
              <li>
                <strong>Atoms & Nuclei:</strong> Explores the structure of atoms, radioactive decay, and nuclear reactions like fission and fusion.
              </li>
              <li>
                <strong>Semiconductor Electronics:</strong> The physics behind modern electronic devices like diodes and transistors.
              </li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

