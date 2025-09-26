
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { BookOpen, PenTool, Mic } from 'lucide-react';

export default function EnglishNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Class 12 English Notes
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Guidance on literature, writing skills, and reading comprehension for the Core English syllabus.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Literature: Flamingo & Vistas</CardTitle>
            </div>
            <CardDescription>Summaries, character sketches, and theme analysis.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This section covers the prescribed textbooks, helping you understand the stories and poems in depth.
            </p>
            <p>
              <strong>Key Focus Areas:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Theme and Message:</strong> Understanding the central ideas the author is conveying.
              </li>
              <li>
                <strong>Character Analysis:</strong> Exploring the motivations and development of key characters.
              </li>
              <li>
                <strong>Literary Devices:</strong> Identifying and explaining the use of metaphors, similes, irony, etc.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <PenTool className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Writing Skills</CardTitle>
            </div>
            <CardDescription>Mastering the formats for formal writing tasks.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              The writing section tests your ability to compose clear, coherent, and formally structured pieces.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Notice Writing:</strong> A formal means of communication used to announce events and information.
              </li>
              <li>
                <strong>Formal Letter Writing:</strong> Includes letters to the editor, job applications, and official correspondence.
              </li>
              <li>
                <strong>Article & Report Writing:</strong> Presenting information or a point of view on a specific topic in a structured manner.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <div className="flex items-center gap-3">
              <Mic className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Reading Comprehension</CardTitle>
            </div>
            <CardDescription>Techniques for unseen passages.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
                This skill involves understanding a text, interpreting it, and drawing inferences.
            </p>
             <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Skimming and Scanning:</strong> Quickly reading to get a general overview or to find specific information.
              </li>
              <li>
                <strong>Vocabulary in Context:</strong> Deducing the meaning of unfamiliar words from the surrounding text.
              </li>
              <li>
                <strong>Summarizing and Note-Making:</strong> Condensing the main points of a passage into a concise format.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
