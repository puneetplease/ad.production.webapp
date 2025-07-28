import ProfileCard from './profile-card';

const teamMembers = [
  {
    name: 'Jane Doe',
    title: 'CEO & Founder',
    avatarUrl: 'https://placehold.co/128x128.png',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'John Smith',
    title: 'Lead Developer',
    avatarUrl: 'https://placehold.co/128x128.png',
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
