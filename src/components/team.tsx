import ProfileCard from './profile-card';

const teamMembers = [
  {
    name: 'Jane Doe',
    title: 'CEO & Founder',
    avatarUrl: 'https://images.unsplash.com/photo-1602471615287-d733c59b79c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8fHwxNzUzNjcyNjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'John Smith',
    title: 'Lead Developer',
    avatarUrl: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwcm9maWxlJTIwcGhvdG98ZW58MHx8fHwxNzUzNjczMjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Emily White',
    title: 'Creative Director',
    avatarUrl: 'https://placehold.co/128x128.png',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
   {
    name: 'Michael Brown',
    title: 'Project Manager',
    avatarUrl: 'https://placehold.co/128x128.png',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
];


export default function Team() {
  return (
    <section id="team" className="w-full py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            The talented individuals behind our success. We are a team of passionate creators and strategists.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
          {teamMembers.map((member) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              title={member.title}
              avatarUrl={member.avatarUrl}
              socials={member.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
