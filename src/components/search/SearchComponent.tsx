"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { handleIntelligentSearch } from "@/app/search/actions";
import { subjects } from "@/lib/data";

const searchSchema = z.object({
  query: z.string().min(2, {
    message: "Search query must be at least 2 characters.",
  }),
  subject: z.string().optional(),
  contentType: z.string().optional(),
});

type SearchFormValues = z.infer<typeof searchSchema>;

const contentTypes = ["Notes", "Video", "Quiz"];

export function SearchComponent() {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
      subject: "",
      contentType: "",
    },
  });

  async function onSubmit(values: SearchFormValues) {
    setIsLoading(true);
    setError(null);
    setSearchResults([]);

    try {
      const result = await handleIntelligentSearch(values);
      if (result.results) {
        setSearchResults(result.results);
      } else {
        setError("No results found or an error occurred.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Search for Content</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Search Query</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'Newton's laws of motion'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Filter by subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="">All Subjects</SelectItem>
                          {subjects.map(s => <SelectItem key={s.id} value={s.title}>{s.title}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contentType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content Type (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Filter by content type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                           <SelectItem value="">All Types</SelectItem>
                           {contentTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <SearchIcon className="mr-2 h-4 w-4" />
                    Search
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isLoading || searchResults.length > 0 || error) && (
        <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 font-headline">Results</h3>
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-destructive">{error}</p>}
            {searchResults.length > 0 && (
                <Card>
                    <CardContent className="p-6">
                        <ul className="space-y-4">
                            {searchResults.map((result, index) => (
                                <li key={index} className="p-4 bg-muted/50 rounded-lg">{result}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
             {searchResults.length === 0 && !isLoading && !error && (
                <p className="text-muted-foreground text-center">No results to display. Try a new search.</p>
            )}
        </div>
      )}
    </div>
  );
}
