'use server';

import { optimizeCtaText, OptimizeCtaTextInput } from '@/ai/flows/cta-optimizer';

export async function handleOptimizeCta(input: OptimizeCtaTextInput) {
  try {
    const result = await optimizeCtaText(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error optimizing CTA:', error);
    // It's better to return a generic error message to the client
    return { success: false, error: 'An unexpected error occurred while optimizing the CTA. Please try again later.' };
  }
}
