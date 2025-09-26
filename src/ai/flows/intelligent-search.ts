// src/ai/flows/intelligent-search.ts
'use server';

/**
 * @fileOverview An intelligent search flow for finding notes, videos, and coding resources.
 *
 * - intelligentSearch - A function that handles the intelligent search process.
 * - IntelligentSearchInput - The input type for the intelligentSearch function.
 * - IntelligentSearchOutput - The return type for the intelligentSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentSearchInputSchema = z.object({
  query: z.string().describe('The search query.'),
  subject: z.string().optional().describe('The subject to filter by.'),
  contentType: z.string().optional().describe('The content type to filter by (Notes, Video, Quiz).'),
});

export type IntelligentSearchInput = z.infer<typeof IntelligentSearchInputSchema>;

const IntelligentSearchOutputSchema = z.object({
  results: z.array(z.string()).describe('The search results.'),
});

export type IntelligentSearchOutput = z.infer<typeof IntelligentSearchOutputSchema>;

export async function intelligentSearch(input: IntelligentSearchInput): Promise<IntelligentSearchOutput> {
  return intelligentSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentSearchPrompt',
  input: {schema: IntelligentSearchInputSchema},
  output: {schema: IntelligentSearchOutputSchema},
  prompt: `You are a search assistant for an eLearning platform, ClassroomHub, which provides Class 12 notes and coding resources.

  Based on the user's query, provide a list of relevant results.

  Here are the available subjects: Physics, Chemistry, Mathematics, Biology, English, Python, C++, Web Development.
  Here are the available content types: Notes, Video, Quiz.

  Query: {{{query}}}
  Subject: {{{subject}}}
  Content Type: {{{contentType}}}

  Results:`,
});

const intelligentSearchFlow = ai.defineFlow(
  {
    name: 'intelligentSearchFlow',
    inputSchema: IntelligentSearchInputSchema,
    outputSchema: IntelligentSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
