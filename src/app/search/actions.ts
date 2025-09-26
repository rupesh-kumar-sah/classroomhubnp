"use server";

import { intelligentSearch, type IntelligentSearchInput, type IntelligentSearchOutput } from "@/ai/flows/intelligent-search";

export async function handleIntelligentSearch(input: IntelligentSearchInput): Promise<IntelligentSearchOutput> {
  try {
    // In a real application, you might add more complex logic, validation, or data fetching here.
    // For now, we directly call the Genkit flow.
    const output = await intelligentSearch(input);
    return output;
  } catch (error) {
    console.error("Error in intelligent search action:", error);
    // You can customize the error response as needed.
    return { results: [] };
  }
}
