
'use client';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Sigma, Milestone, Combine } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

function MathNotesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && (!user || user.role !== 'premium')) {
      router.push('/premium?from=' + pathname);
    }
  }, [user, loading, router, pathname]);

  if (loading || !user || user.role !== 'premium') {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Class 12 Mathematics Notes
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Covering advanced topics in calculus, algebra, and probability.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Milestone className="h-6 w-6 text-primary" />
              <CardTitle>Calculus: Integration & Differentiation</CardTitle>
            </div>
            <CardDescription>The backbone of modern mathematics and physics.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Calculus is the study of continuous change. Class 12 focuses on advanced techniques and applications.
            </p>
            <p>
              <strong>Key Concepts:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Definite Integrals:</strong> Calculating the area under a curve.
              </li>
              <li>
                <strong>Differential Equations:</strong> Equations involving a function and its derivatives.
              </li>
              <li>
                <strong>Applications of Derivatives:</strong> Finding rates of change, maxima, and minima.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Combine className="h-6 w-6 text-primary" />
              <CardTitle>Vectors and 3D Geometry</CardTitle>
            </div>
            <CardDescription>Working with objects and spaces in three dimensions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This section extends the concepts of vectors to three-dimensional space, defining lines, planes, and their relationships.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Dot and Cross Products:</strong> Operations on vectors with geometric interpretations.
              </li>
              <li>
                <strong>Lines and Planes:</strong> Representing lines and planes with equations and finding distances and angles between them.
              </li>
              <li>
                <strong>Shortest Distance Between Skew Lines:</strong> A classic problem in 3D geometry.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Sigma className="h-6 w-6 text-primary" />
              <CardTitle>Probability</CardTitle>
            </div>
            <CardDescription>The mathematics of chance and uncertainty.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
                This unit introduces conditional probability, Bayes' theorem, and probability distributions.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Conditional Probability:</strong> The probability of an event occurring given that another event has already occurred.
              </li>
              <li>
                <strong>Bayes' Theorem:</strong> Describes the probability of an event based on prior knowledge of conditions that might be related to the event.
              </li>
              <li>
                <strong>Random Variables and Probability Distributions:</strong> Analyzing the outcomes of a random experiment.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MathNotesPage;
