
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, FileText, FunctionSquare, Pilcrow, Variable } from 'lucide-react';

export default function CppNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          C++ for Beginners
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          An introduction to the fundamental concepts of C++, a powerful language for system programming and competitive coding.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Introduction to C++</CardTitle>
            </div>
            <CardDescription>What is C++ and why is it used?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              C++ is a powerful, high-performance general-purpose programming language. It was developed by Bjarne Stroustrup as an extension of the C language.
            </p>
            <p>
              <strong>Key Features:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Performance:</strong> C++ provides low-level memory manipulation, making it very fast and efficient.
              </li>
              <li>
                <strong>Object-Oriented:</strong> It supports object-oriented programming (OOP) principles like classes, inheritance, and polymorphism.
              </li>
              <li>
                <strong>Versatile:</strong> Used in game development, operating systems, high-frequency trading, and embedded systems.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Variable className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Variables and Data Types</CardTitle>
            </div>
            <CardDescription>Storing and managing data in C++.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              In C++, you must declare the type of a variable. This tells the compiler how much memory to allocate.
            </p>
            <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  #include &lt;iostream&gt;
                  <br />
                  #include &lt;string&gt;
                  <br />
                  <br />
                  int main() {'{'}
                  <br />
                  {'  '}std::string name = "Alice";  // String
                  <br />
                  {'  '}int age = 30;              // Integer
                  <br />
                  {'  '}double height = 5.5;        // Double (for floating-point numbers)
                  <br />
                  {'  '}bool is_student = true;     // Boolean
                  <br />
                  {'  '}return 0;
                  <br />
                  {'}'}
                </code>
              </pre>
            </div>
            <p className="text-muted-foreground pt-4">
              <strong>Common Data Types:</strong>
            </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Badge variant="secondary" className="justify-center py-2 text-sm">string</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">int</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">double / float</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">bool</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Pilcrow className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Control Flow</CardTitle>
            </div>
            <CardDescription>Making decisions and repeating actions in your code.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
                Control flow statements direct the order of execution in a C++ program.
            </p>
             <h3 className="font-semibold text-lg text-foreground pt-2">Conditional Statements (if, else if, else)</h3>
             <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'int temp = 25;\nif (temp > 30) {\n    std::cout << "It\'s a hot day!";\n} else if (temp > 20) {\n    std::cout << "It\'s a pleasant day.";\n} else {\n    std::cout << "It\'s cold.";\n}'}
                </code>
              </pre>
            </div>
            <h3 className="font-semibold text-lg text-foreground pt-2">Loops (for, while)</h3>
             <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'// For loop\nfor (int i = 0; i < 5; ++i) {\n    std::cout << i << std::endl;\n}\n\n// While loop\nint count = 0;\nwhile (count < 5) {\n    std::cout << count << std::endl;\n    count++;\n}'}
                </code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <FunctionSquare className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Functions</CardTitle>
            </div>
            <CardDescription>Organizing code into reusable blocks.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Functions are blocks of code designed to perform a particular task. They help in making the code modular and reusable.
            </p>
            <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'std::string greet(std::string name) {\n    return "Hello, " + name + "!";\n}\n\nint main() {\n    std::string message = greet("Rupesh");\n    std::cout << message << std::endl; // Output: Hello, Rupesh!\n    return 0;\n}'}
                </code>
              </pre>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}
