// use server'
'use server';

/**
 * @fileOverview Generates secure keys using AI-assisted key generation for enhanced encryption.
 *
 * - generateSecureKey - A function that handles the secure key generation process.
 * - GenerateSecureKeyInput - The input type for the generateSecureKey function.
 * - GenerateSecureKeyOutput - The return type for the generateSecureKey function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSecureKeyInputSchema = z.object({
  description: z.string().describe('The description of the key needed, including its purpose and length requirements.'),
});
export type GenerateSecureKeyInput = z.infer<typeof GenerateSecureKeyInputSchema>;

const GenerateSecureKeyOutputSchema = z.object({
  secureKey: z.string().describe('The generated secure key.'),
  explanation: z.string().describe('An explanation of why the key is secure and how it was generated.'),
});
export type GenerateSecureKeyOutput = z.infer<typeof GenerateSecureKeyOutputSchema>;

export async function generateSecureKey(input: GenerateSecureKeyInput): Promise<GenerateSecureKeyOutput> {
  return generateSecureKeyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSecureKeyPrompt',
  input: {schema: GenerateSecureKeyInputSchema},
  output: {schema: GenerateSecureKeyOutputSchema},
  prompt: `You are a quantum computing expert specializing in generating secure encryption keys.

You will use the user provided description to generate a secure key, and then explain why it is secure and how it was generated.

Description: {{{description}}}`,
});

const generateSecureKeyFlow = ai.defineFlow(
  {
    name: 'generateSecureKeyFlow',
    inputSchema: GenerateSecureKeyInputSchema,
    outputSchema: GenerateSecureKeyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
