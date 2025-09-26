"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { PlayCircle } from "lucide-react";

const sampleCode = `function isPalindrome(str) {
  // Your code here
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}`;

export function CodeEditor() {
  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
        <h3 className="font-semibold font-code text-lg">Code Editor</h3>
        <Select defaultValue="javascript">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="cpp">C++</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-0">
        <Textarea
          placeholder="Write your code here..."
          defaultValue={sampleCode}
          className="w-full h-80 rounded-none border-0 bg-muted/20 font-code text-base resize-none focus-visible:ring-0"
        />
      </CardContent>
      <CardFooter className="p-4 border-t flex justify-end">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <PlayCircle className="mr-2 h-5 w-5" />
          Run Code
        </Button>
      </CardFooter>
    </Card>
  );
}
