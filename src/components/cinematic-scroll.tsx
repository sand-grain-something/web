'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const beachImages = [
  { src: '/fonts/img1.jpg', title: 'Marina Beach', location: 'Chennai' },
  { src: '/fonts/img2.jpg', title: 'Calangute', location: 'Goa' },
  { src: '/fonts/img3.jpg', title: 'Juhu Beach', location: 'Mumbai' },
  { src: '/fonts/img4.jpg', title: 'Kovalam', location: 'Kerala' },
  { src: '/fonts/img5.jpeg', title: 'Puri Beach', location: 'Odisha' },
  { src: '/fonts/img6.jpg', title: 'Varkala', location: 'Kerala' },
  { src: '/fonts/img1.jpg', title: 'Gokarna', location: 'Karnataka' },
  { src: '/fonts/img2.jpg', title: 'Digha', location: 'West Bengal' },
];

export default function CinematicScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-background via-blue-50/50 to-background dark:via-blue-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              India's Coastal
            </span>
            <br />
            <span className="text-foreground">Treasures</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Low-cost camera-based system for automated grain size estimation and beach classification
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {beachImages.map((image, index) => (
            <BeachImageCard key={index} image={image} index={index} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeachImageCard({
  image,
  index,
  scrollYProgress,
}: {
  image: { src: string; title: string; location: string };
  index: number;
  scrollYProgress: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(cardProgress, [0, 1], [50, -50]);
  const rotate = useTransform(cardProgress, [0, 1], [0, index % 2 === 0 ? 2 : -2]);
  const opacity = useTransform(cardProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, rotate, opacity }}
      className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-muted"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <motion.h3
          className="text-white font-bold text-xl md:text-2xl lg:text-3xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {image.title}
        </motion.h3>
        <motion.p
          className="text-white/90 text-base md:text-lg lg:text-xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {image.location}
        </motion.p>
      </div>
    </motion.div>
  );
}

