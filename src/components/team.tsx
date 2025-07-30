"use client";

import ProfileCard from './profile-card';
import TrueFocusText from './ui/true-focus-text';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Avranil D.',
    title: 'CEO',
    avatarUrl: 'https://i.postimg.cc/d1xH26QY/1.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'UTSAV P.',
    title: 'FOUNDER',
    avatarUrl: 'https://i.postimg.cc/MTgk6qQV/2.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Emily White',
    title: 'Creative Director',
    avatarUrl: 'https://i.postimg.cc/1zY2BsM2/3.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#',
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Team() {
  return (
    <section 
      id="team" 
      className="w-full py-16 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <TrueFocusText>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Team
            </h2>
          </TrueFocusText>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            The talented individuals behind our success. We are a team of passionate creators and strategists.
          </p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <ProfileCard
                name={member.name}
                title={member.title}
                avatarUrl={member.avatarUrl}
                socials={member.socials}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
