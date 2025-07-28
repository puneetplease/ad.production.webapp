// This file holds the Genkit flow for optimizing call-to-action button text.

'use server';

/**
 * @fileOverview An AI agent for suggesting better wording for call-to-action buttons.
 *
 * - optimizeCtaText - A function that suggests optimized wording for a CTA button.
 * - OptimizeCtaTextInput - The input type for the optimizeCtaText function.
 * - OptimizeCtaTextOutput - The return type for the optimizeCtaText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeCtaTextInputSchema = z.object({
  ctaText: z.string().describe('The current call-to-action text.'),
  landingPageDescription: z
    .string()
    .describe('A brief description of the landing page content and goals.'),
});
export type OptimizeCtaTextInput = z.infer<typeof OptimizeCtaTextInputSchema>;

const OptimizeCtaTextOutputSchema = z.object({
  optimizedCtaText: z
    .string()
    .describe('The AI-suggested optimized call-to-action text.'),
  reasoning: z
    .string()
    .describe('The AI reasoning behind the suggested optimization.'),
});
export type OptimizeCtaTextOutput = z.infer<typeof OptimizeCtaTextOutputSchema>;

export async function optimizeCtaText(input: OptimizeCtaTextInput): Promise<OptimizeCtaTextOutput> {
  return optimizeCtaTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeCtaTextPrompt',
  input: {schema: OptimizeCtaTextInputSchema},
  output: {schema: OptimizeCtaTextOutputSchema},
  prompt: `You are an expert copywriter specializing in optimizing call-to-action (CTA) text for landing pages.

  Given the current CTA text and a description of the landing page, suggest a better wording for the CTA that is more likely to increase conversion rates. Also, explain your reasoning behind the suggested optimization.

Current CTA Text: {{{ctaText}}}
Landing Page Description: {{{landingPageDescription}}}

Optimize CTA Text: 
Reasoning: `,
});

const optimizeCtaTextFlow = ai.defineFlow(
  {
    name: 'optimizeCtaTextFlow',
    inputSchema: OptimizeCtaTextInputSchema,
    outputSchema: OptimizeCtaTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
