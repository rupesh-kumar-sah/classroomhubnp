
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Braces, Brush, FileCode, Server } from 'lucide-react';

export default function WebDevNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Web Development Basics
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          An overview of the core technologies for building modern websites: HTML, CSS, and JavaScript.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <FileCode className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">HTML: The Structure</CardTitle>
            </div>
            <CardDescription>HyperText Markup Language is the skeleton of every webpage.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript.
            </p>
            <p>
              <strong>Key Concepts:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Elements:</strong> The building blocks of HTML (e.g., `<h1>`, `<p>`, `<a>`).
              </li>
              <li>
                <strong>Tags:</strong> Tags label pieces of content such as "heading", "paragraph", "table", and so on.
              </li>
              <li>
                <strong>Attributes:</strong> Provide additional information about an element (e.g., `href` in an `<a>` tag).
              </li>
            </ul>
             <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>This is a paragraph.</p>\n</body>\n</html>'}
                </code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brush className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">CSS: The Style</CardTitle>
            </div>
            <CardDescription>Cascading Style Sheets are used to style and lay out web pages.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              CSS is used to control the presentation, formatting, and layout of a webpage. It allows you to specify colors, fonts, spacing, and more.
            </p>
            <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'body {\n  font-family: sans-serif;\n  background-color: #f0f0f0;\n}\n\nh1 {\n  color: #333;\n  text-align: center;\n}'}
                </code>
              </pre>
            </div>
            <p className="text-muted-foreground pt-4">
              <strong>Core Concepts:</strong>
            </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Badge variant="secondary" className="justify-center py-2 text-sm">Selectors</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Properties & Values</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Box Model</Badge>
                <Badge variant="secondary" className="justify-center py-2 text-sm">Flexbox & Grid</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Braces className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">JavaScript: The Interactivity</CardTitle>
            </div>
            <CardDescription>Making web pages dynamic and interactive for the user.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
                JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more.
            </p>
             <h3 className="font-semibold text-lg text-foreground pt-2">DOM Manipulation</h3>
             <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'// Change the text of the h1 element\ndocument.querySelector(\'h1\').textContent = "Hello, JavaScript!";\n\n// Add a new element\nconst newPara = document.createElement(\'p\');\nnewPara.textContent = "This was added by JS.";\ndocument.body.appendChild(newPara);'}
                </code>
              </pre>
            </div>
            <h3 className="font-semibold text-lg text-foreground pt-2">Event Handling</h3>
             <div className="p-4 bg-muted/50 rounded-lg font-code">
              <pre>
                <code>
                  {'const button = document.querySelector(\'button\');\nbutton.addEventListener(\'click\', () => {\n  alert(\'Button was clicked!\');\n});'}
                </code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
