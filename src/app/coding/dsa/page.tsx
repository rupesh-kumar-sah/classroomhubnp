
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Pilcrow, Variable, FunctionSquare, Share2, ToyBrick } from 'lucide-react';

export default function DsaNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Data Structures & Algorithms
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          A guide to fundamental data structures and algorithms for efficient problem-solving.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">What is DSA?</CardTitle>
            </div>
            <CardDescription>Understanding the importance of Data Structures and Algorithms.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>Data Structures</strong> are a way of organizing and storing data so that they can be accessed and worked with efficiently. They define the relationship between the data, and the operations that can be performed on the data.
            </p>
            <p>
              <strong>Algorithms</strong> are a set of well-defined instructions or a step-by-step procedure for solving a problem or accomplishing a task.
            </p>
             <p>
              Learning DSA is crucial for writing efficient, scalable, and optimized code, and it's a key topic in technical interviews for software engineering roles.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <ToyBrick className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Common Data Structures</CardTitle>
            </div>
            <CardDescription>An overview of the most used data structures.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Badge variant="secondary" className="justify-center py-2 text-sm">Arrays & Strings</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Linked Lists</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Stacks & Queues</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Trees & Tries</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Graphs</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Hash Tables</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Heaps</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Share2 className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Common Algorithms</CardTitle>
            </div>
            <CardDescription>Key algorithmic techniques every programmer should know.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <h3 className="font-semibold text-lg text-foreground">Sorting & Searching</h3>
             <p className="text-muted-foreground">
                Algorithms like Bubble Sort, Merge Sort, Quick Sort for sorting, and Linear Search, Binary Search for searching are fundamental. Binary search, for instance, is highly efficient for searching in sorted arrays.
            </p>
             <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'// Example: Binary Search in Python\ndef binary_search(arr, target):\n  left, right = 0, len(arr) - 1\n  while left <= right:\n    mid = (left + right) // 2\n    if arr[mid] == target:\n      return mid\n    elif arr[mid] < target:\n      left = mid + 1\n    else:\n      right = mid - 1\n  return -1'}
                </code>
              </pre>
            </div>

            <h3 className="font-semibold text-lg text-foreground pt-4">Recursion</h3>
            <p className="text-muted-foreground">
              A method where the solution to a problem depends on solutions to smaller instances of the same problem.
            </p>

            <h3 className="font-semibold text-lg text-foreground pt-4">Dynamic Programming</h3>
            <p className="text-muted-foreground">
              An optimization technique for solving complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant computations.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    