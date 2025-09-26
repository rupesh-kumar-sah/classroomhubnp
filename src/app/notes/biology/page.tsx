
'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Dna, Flower, Sprout } from 'lucide-react';
import { withProtected } from '@/hooks/use-auth';

function BiologyNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Class 12 Biology Notes
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          From genetics and evolution to biotechnology and ecology, explore the science of life.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Flower className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Reproduction in Organisms</CardTitle>
            </div>
            <CardDescription>How life perpetuates itself.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This unit covers the various modes of reproduction in different organisms, from asexual to sexual reproduction in plants and animals.
            </p>
            <p>
              <strong>Key Concepts:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Sexual Reproduction in Flowering Plants:</strong> Pollination, fertilization, and seed development.
              </li>
              <li>
                <strong>Human Reproduction:</strong> The male and female reproductive systems, gametogenesis, and the menstrual cycle.
              </li>
              <li>
                <strong>Reproductive Health:</strong> Methods of birth control and sexually transmitted infections.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Dna className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Genetics and Evolution</CardTitle>
            </div>
            <CardDescription>The blueprint of life and its changes over time.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This section delves into the principles of inheritance, the molecular basis of genes, and the mechanisms of evolution.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Mendelian Inheritance:</strong> The fundamental laws of heredity.
              </li>
              <li>
                <strong>Molecular Basis of Inheritance:</strong> The structure of DNA, replication, transcription, and translation.
              </li>
              <li>
                <strong>Evolution:</strong> Theories of evolution, including Darwin's theory of natural selection and evidence for evolution.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Sprout className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Ecology and Environment</CardTitle>
            </div>
            <CardDescription>The study of interactions among organisms and their environment.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
                Ecology explores the relationships between living organisms, including humans, and their physical surroundings.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Ecosystems:</strong> Structure, function, productivity, and nutrient cycling.
              </li>
              <li>
                <strong>Biodiversity and Conservation:</strong> The importance of biodiversity and strategies for its conservation.
              </li>
              <li>
                <strong>Environmental Issues:</strong> Pollution, climate change, and other challenges facing our planet.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default withProtected(BiologyNotesPage, 'premium');
