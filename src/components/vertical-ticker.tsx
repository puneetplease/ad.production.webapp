
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
  { src: 'https://placehold.co/300x400.png', alt: 'placeholder 1', hint: 'app screenshot' },
  { src: 'https://placehold.co/300x500.png', alt: 'placeholder 2', hint: 'mobile ui' },
  { src: 'https://placehold.co/300x350.png', alt: 'placeholder 3', hint: 'website design' },
  { src: 'https://placehold.co/300x450.png', alt: 'placeholder 4', hint: 'dashboard analytics' },
  { src: 'https://placehold.co/300x550.png', alt: 'placeholder 5', hint: 'social media' },
  { src: 'https://placehold.co/300x420.png', alt: 'placeholder 6', hint: 'e-commerce product' },
];

const VerticalTicker = ({ direction = 'normal' }: { direction?: 'normal' | 'reverse' }) => {
  const tickerImages = [...images, ...images]; // Duplicate for seamless loop

  return (
    <div className="relative h-[600px] w-full max-w-[300px] overflow-hidden ticker-mask pointer-events-none">
      <div
        className={cn(
          'absolute top-0 left-0 w-full flex flex-col gap-4 animate-scroll-vertical',
          direction === 'reverse' ? 'animate-scroll-vertical-reverse' : 'animate-scroll-vertical'
        )}
      >
        {tickerImages.map((image, index) => (
          <div key={index} className="w-full h-auto rounded-lg shadow-lg bg-secondary/50 p-2 border border-white/10">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={500}
              className="rounded-md object-cover w-full h-auto"
              data-ai-hint={image.hint}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTicker;
