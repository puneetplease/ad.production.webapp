
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
  { src: 'https://i.postimg.cc/Gm1QWBCJ/pexels-cottonbro-6195663.jpg', alt: 'Team meeting with laptops', hint: 'teamwork meeting' },
  { src: 'https://i.postimg.cc/TYnjJRDy/pexels-canvastudio-3153204.jpg', alt: 'Woman working on a laptop', hint: 'developer coding' },
  { src: 'https://i.postimg.cc/zGjn40p8/pexels-cottonbro-4709288.jpg', alt: 'Man coding on a computer in a dark room', hint: 'hacker coding' },
  { src: 'https://i.postimg.cc/Sxq6Zw6g/pexels-knownasovan-57690.jpg', alt: 'Laptop with code on the screen', hint: 'laptop code' },
  { src: 'https://i.postimg.cc/pTg8K7VY/pexels-divinetechygirl-1181673.jpg', alt: 'Woman pointing at a screen with code', hint: 'programming lesson' },
  { src: 'https://i.postimg.cc/XNdBTs7m/pexels-mikael-blomkvist-6476790.jpg', alt: 'Team collaborating around a table', hint: 'collaboration office' },
  { src: 'https://i.postimg.cc/Qxq9MV7q/pexels-canvastudio-3194519.jpg', alt: 'People having a discussion in a meeting', hint: 'business discussion' },
  { src: 'https://i.postimg.cc/zGXLH5SY/pexels-diva-plavalaguna-6937933.jpg', alt: 'Woman in a server room', hint: 'server technology' },
  { src: 'https://i.postimg.cc/VNJd4RV7/pexels-mart-production-7679865.jpg', alt: 'Woman presenting in a meeting', hint: 'business presentation' },
  { src: 'https://i.postimg.cc/g01r7h9G/pexels-cottonbro-5474296.jpg', alt: 'Overhead view of a team working on laptops', hint: 'team working' },
  { src: 'https://i.postimg.cc/Y26jXjdw/pexels-cottonbro-5473957.jpg', alt: 'Man on a video call', hint: 'video conference' },
  { src: 'https://i.postimg.cc/J4R0SmFH/pexels-divinetechygirl-1181292.jpg', alt: 'Close up of code on a screen', hint: 'code screen' },
  { src: 'https://i.postimg.cc/NfbFcShJ/pexels-markusspiske-225250.jpg', alt: 'Laptop with a development environment open', hint: 'web development' },
];

const VerticalTicker = ({ direction = 'normal' }: { direction?: 'normal' | 'reverse' }) => {
  const tickerImages = [...images, ...images]; // Duplicate for seamless loop

  return (
    <div className="relative h-[700px] w-full max-w-[300px] overflow-hidden ticker-mask pointer-events-none">
      <div
        className={cn(
          'absolute top-0 left-0 w-full flex flex-col gap-4',
          direction === 'reverse' ? 'animate-scroll-vertical-reverse' : 'animate-scroll-vertical'
        )}
        style={{ animationTimingFunction: 'linear' }}
      >
        {tickerImages.map((image, index) => (
          <div key={index} className="w-full h-auto rounded-lg shadow-lg bg-secondary/20 p-2 border border-border">
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
