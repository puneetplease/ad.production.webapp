
"use client";

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import dynamic from 'next/dynamic';

const InfiniteMenu = dynamic(() => import('@/components/ui/InfiniteMenu'), {
  ssr: false,
});

const items = [
  {
    image: 'https://i.postimg.cc/652MQby4/74dbf034-f79c-479f-916b-0634c2b6dd76.png',
    link: '/products/digital-art-pack',
    title: 'Digital Art',
    description: 'Stunning abstract art'
  },
  {
    image: 'https://i.postimg.cc/pLdzTp0G/2.png',
    link: '/products/ui-kit-pro',
    title: 'UI Kit Pro',
    description: 'Comprehensive UI kit'
  },
  {
    image: 'https://i.postimg.cc/PrVNSK4y/3.png',
    link: '/products/ebook-template',
    title: 'Ebook Template',
    description: 'Professional ebook design'
  },
  {
    image: 'https://i.postimg.cc/DzkvNNbr/4.png',
    link: '/products/social-media-graphics',
    title: 'Social Graphics',
    description: 'Templates for social media'
  },
    {
    image: 'https://i.postimg.cc/yxq26qsj/5.png',
    link: '/products/website-template',
    title: 'Website Template',
    description: 'Modern website design'
  },
  {
    image: 'https://i.postimg.cc/wBw6BjGV/6.png',
    link: '/products/stock-video-bundle',
    title: 'Stock Video',
    description: 'High-quality 4K clips'
  }
];

export default function ProductsPage() {
  return (
    <motion.div 
      className="flex min-h-screen flex-col text-foreground"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div style={{ width: '100%', height: 'calc(100vh - 128px)', position: 'relative' }}>
            <InfiniteMenu items={items}/>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
