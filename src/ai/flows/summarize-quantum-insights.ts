// 'use server';

/**
 * @fileOverview Summarizes insights from quantum data analysis using AI-powered tools.
 *
 * - summarizeQuantumInsights - A function that handles the summarization process.
 * - SummarizeQuantumInsightsInput - The input type for the summarizeQuantumInsights function.
 * - SummarizeQuantumInsightsOutput - The return type for the summarizeQuantumInsights function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeQuantumInsightsInputSchema = z.object({
  quantumDataAnalysisDetails: z
    .string()
    .describe(
      'Detailed information about quantum data analysis capabilities and past results.'
    ),
});
export type SummarizeQuantumInsightsInput = z.infer<
  typeof SummarizeQuantumInsightsInputSchema
>;

const SummarizeQuantumInsightsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of quantum data analysis insights.'),
});
export type SummarizeQuantumInsightsOutput = z.infer<
  typeof SummarizeQuantumInsightsOutputSchema
>;

export async function summarizeQuantumInsights(
  input: SummarizeQuantumInsightsInput
): Promise<SummarizeQuantumInsightsOutput> {
  return summarizeQuantumInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeQuantumInsightsPrompt',
  input: {schema: SummarizeQuantumInsightsInputSchema},
  output: {schema: SummarizeQuantumInsightsOutputSchema},
  prompt: `You are an AI expert in summarizing complex quantum data analysis information.

  Your task is to provide a clear and concise summary of the quantum data analysis capabilities and past results provided.
  Focus on the key insights and potential benefits for the user.

  Quantum Data Analysis Details: {{{quantumDataAnalysisDetails}}}
  `,
});

const summarizeQuantumInsightsFlow = ai.defineFlow(
  {
    name: 'summarizeQuantumInsightsFlow',
    inputSchema: SummarizeQuantumInsightsInputSchema,
    outputSchema: SummarizeQuantumInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
