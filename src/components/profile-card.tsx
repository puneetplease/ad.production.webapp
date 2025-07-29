import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Dribbble } from 'lucide-react';

type ProfileCardProps = {
  name: string;
  title: string;
  avatarUrl: string;
  socials: {
    linkedin: string;
    twitter: string;
    dribbble: string;
  };
};

export default function ProfileCard({ name, title, avatarUrl, socials }: ProfileCardProps) {
  return (
    <Card className="group relative bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg hover:shadow-primary/20 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 filter blur-3xl animate-shape-blur group-hover:animate-shape-blur-hover" />
      <CardHeader className="relative flex items-center justify-center p-6 z-10">
        <div className="relative w-32 h-32 aspect-square">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full object-cover ring-4 ring-primary/50"
            data-ai-hint="person portrait"
          />
        </div>
      </CardHeader>
      <CardContent className="text-center p-6 pt-0 relative z-10">
        <h3 className="font-headline text-xl font-bold text-foreground">{name}</h3>
        <p className="text-primary font-medium">{title}</p>
        <div className="mt-4 flex justify-center space-x-3">
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-target">
            <Button variant="secondary" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-target">
            <Button variant="secondary" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
            </Button>
          </a>
          <a href={socials.dribbble} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-target">
            <Button variant="secondary" size="icon" className="rounded-full">
              <Dribbble className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
