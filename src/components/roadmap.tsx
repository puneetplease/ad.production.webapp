import { cn } from '@/lib/utils';

const roadmapData = [
  {
    step: '01',
    title: "Let's Talk First on a Discovery Call",
    description: 'We begin by understanding your business goals, target audience, and specific requirements. This helps us tailor our approach to best meet your needs.',
  },
  {
    step: '02',
    title: 'Research and Planning',
    description: 'Our team conducts thorough research on your industry, competitors, and market trends. We then develop a detailed project plan and strategy to ensure we are aligned with your vision.',
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'We create stunning, user-friendly designs and bring them to life with clean, efficient code. We keep you in the loop with regular updates and feedback sessions.',
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Before going live, we rigorously test everything to ensure a flawless user experience. Once everything is perfect, we deploy the project and make it live for the world to see.',
  },
  {
    step: '05',
    title: 'Support & Growth',
    description: 'Our partnership doesn’t end at launch. We provide ongoing support, maintenance, and strategies for growth to ensure your continued success.',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="w-full py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Streamlined Process
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            From initial idea to final launch, we follow a structured path to ensure your project's success.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-24">
          {roadmapData.map((item, index) => (
            <div key={item.step} className="relative mb-12 sm:mb-24 last:mb-0">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center text-center sm:text-left w-full">
                  <div className={`flex w-full items-center justify-center ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}>
                    <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right sm:pr-16' : 'sm:text-left sm:pl-16 sm:order-2'}`}>
                      <p className="font-headline text-6xl lg:text-8xl font-bold text-primary/30 leading-none">
                        {item.step}
                      </p>
                    </div>
                  </div>
                  <div className={`flex w-full items-start -mt-4 lg:-mt-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pl-16' : 'sm:pr-16'}`}>
                        <h3 className="font-headline text-2xl font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          {item.description}
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
