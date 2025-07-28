"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, Lightbulb } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Skeleton } from '@/components/ui/skeleton';
import { handleOptimizeCta } from '@/app/actions';
import { type OptimizeCtaTextOutput } from '@/ai/flows/cta-optimizer';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  ctaText: z.string().min(2, { message: 'CTA text must be at least 2 characters.' }).max(50),
  landingPageDescription: z.string().min(10, { message: 'Description must be at least 10 characters.' }).max(500),
});

export default function CtaOptimizer() {
  const [result, setResult] = useState<OptimizeCtaTextOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewText, setPreviewText] = useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ctaText: 'Sign Up',
      landingPageDescription: 'A landing page for a new SaaS product that helps teams collaborate more effectively.',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    setPreviewText('');

    const response = await handleOptimizeCta(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: response.error,
      })
    }
    setIsLoading(false);
  }

  return (
    <section id="optimizer" className="w-full py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Sparkles className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A/B Test Your CTAs
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Use AI to generate high-converting Call-to-Action text. Find the words that resonate with your audience and boost your sign-ups.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:max-w-4xl md:grid-cols-2">
          <Card className="bg-background/50 border-white/10">
            <CardHeader>
              <CardTitle className="font-headline">Optimize Your CTA</CardTitle>
              <CardDescription>Enter your details below to get an AI-powered suggestion.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="ctaText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current CTA Text</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Learn More" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="landingPageDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Landing Page Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe your page's purpose and audience..." className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full font-headline rounded-full" size="lg">
                    {isLoading ? 'Optimizing...' : 'Generate Suggestion'}
                    {!isLoading && <Sparkles className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {isLoading && (
              <>
                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-4 w-full mt-2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-10 w-3/4" />
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <Skeleton className="h-6 w-1/3" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-2" />
                    <Skeleton className="h-4 w-3/4 mt-2" />
                  </CardContent>
                </Card>
              </>
            )}

            {result && !isLoading && (
              <>
                <Card className="bg-green-900/20 border-green-500/30">
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center text-green-400">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Optimized CTA
                    </CardTitle>
                    <CardDescription>Our AI suggests this text for higher conversion.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <p className="text-lg font-bold text-foreground font-headline">{result.optimizedCtaText}</p>
                    <Button variant="outline" className="rounded-full" onClick={() => setPreviewText(result.optimizedCtaText)}>Preview</Button>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                      Reasoning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{result.reasoning}</p>
                  </CardContent>
                </Card>
              </>
            )}

            {previewText && (
              <div className="text-center p-6 border rounded-lg bg-card border-white/10">
                <h3 className="font-headline text-lg mb-4">Live Preview</h3>
                <div className="flex justify-center items-center gap-4 flex-wrap">
                  <Button variant="secondary" className="font-headline rounded-full" disabled>{form.getValues('ctaText')}</Button>
                  <span className="text-muted-foreground">vs.</span>
                  <Button className="font-headline rounded-full scale-110 shadow-lg shadow-primary/20">{previewText}</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
