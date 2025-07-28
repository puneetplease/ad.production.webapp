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
    <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg hover:shadow-primary/20">
      <CardHeader className="relative flex items-center justify-center p-6">
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
      <CardContent className="text-center p-6 pt-0">
        <h3 className="font-headline text-xl font-bold text-foreground">{name}</h3>
        <p className="text-primary font-medium">{title}</p>
        <div className="mt-4 flex justify-center space-x-3">
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
            </Button>
          </a>
          <a href={socials.dribbble} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Dribbble className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
