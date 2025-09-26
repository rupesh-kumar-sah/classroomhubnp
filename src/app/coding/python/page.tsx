
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, FileText, FunctionSquare, Pilcrow, Variable } from 'lucide-react';

export default function PythonNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Python Fundamentals
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Your comprehensive guide to mastering the basics of Python programming.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Introduction to Python</CardTitle>
            </div>
            <CardDescription>What is Python and why is it so popular?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Python is a high-level, interpreted programming language known for its clear syntax and readability. It was created by Guido van Rossum and first released in 1991.
            </p>
            <p>
              <strong>Key Features:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Easy to Learn:</strong> Python's simple syntax is similar to the English language, making it an excellent choice for beginners.
              </li>
              <li>
                <strong>Versatile:</strong> It's used in web development, data science, artificial intelligence, automation, and more.
              </li>
              <li>
                <strong>Large Community:</strong> A massive global community means you can find libraries and support for almost any task.
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
            <CardDescription>Storing and managing data in Python.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              A variable is a container for a value. In Python, you don't need to declare the variable type.
            </p>
            <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  name = "Alice"  # String
                  <br />
                  age = 30       # Integer
                  <br />
                  height = 5.5   # Float
                  <br />
                  is_student = True # Boolean
                </code>
              </pre>
            </div>
            <p className="text-muted-foreground pt-4">
              <strong>Common Data Types:</strong>
            </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Badge variant="secondary" className="justify-center py-2 text-sm">String (str)</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Integer (int)</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Float (float)</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Boolean (bool)</Badge>
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
                Control flow statements allow you to control the order in which code is executed.
            </p>
             <h3 className="font-semibold text-lg text-foreground pt-2">Conditional Statements (if, elif, else)</h3>
             <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'temperature = 25\nif temperature > 30:\n    print("It\'s a hot day!")\nelif temperature > 20:\n    print("It\'s a pleasant day.")\nelse:\n    print("It\'s cold.")'}
                </code>
              </pre>
            </div>
            <h3 className="font-semibold text-lg text-foreground pt-2">Loops (for, while)</h3>
             <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'# For loop\nfor i in range(5):\n    print(i)\n\n# While loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1'}
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
              Functions are blocks of code that run when called. They can take input data (parameters) and return a result.
            </p>
            <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'def greet(name):\n    return f"Hello, {name}!"\n\nmessage = greet("Rupesh")\nprint(message)  # Output: Hello, Rupesh!'}
                </code>
              </pre>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}
