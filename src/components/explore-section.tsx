'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Star, Microscope, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { beaches, type Beach } from '@/data/beaches';
import { Button } from './ui/button';

interface ExploreSectionProps {
  onBeachSelect: (beach: Beach) => void;
  onViewSandAnalysis: (beach: Beach) => void;
}

export default function ExploreSection({ onBeachSelect, onViewSandAnalysis }: ExploreSectionProps) {
  return (
    <section id="explore" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Explore
            </span>{' '}
            <span className="text-foreground">Beaches</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore beach sediment samples with automated grain size distribution analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {beaches.map((beach, index) => (
            <BeachCard
              key={beach.id}
              beach={beach}
              index={index}
              onBeachSelect={onBeachSelect}
              onViewSandAnalysis={onViewSandAnalysis}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeachCard({
  beach,
  index,
  onBeachSelect,
  onViewSandAnalysis,
}: {
  beach: Beach;
  index: number;
  onBeachSelect: (beach: Beach) => void;
  onViewSandAnalysis: (beach: Beach) => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-96 perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-border shadow-lg bg-background">
          <div className="relative h-full">
            <Image
              src={beach.image}
              alt={beach.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">{beach.name}</h3>
              <div className="flex items-center text-white/90 mb-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                <span className="text-base md:text-lg lg:text-xl font-medium">{beach.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 md:w-6 md:h-6 ${
                        i < Math.floor(beach.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-white/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-bold text-lg md:text-xl">{beach.rating}</span>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm md:text-base font-semibold">
                {beach.waterQuality}
              </span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-border shadow-lg bg-background p-6 md:p-8 flex flex-col">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{beach.name}</h3>
          <p className="text-base md:text-lg text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{beach.description}</p>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-base md:text-lg text-muted-foreground">Water Quality</span>
              <span className="font-bold text-base md:text-lg">{beach.waterQuality}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base md:text-lg text-muted-foreground">Popularity</span>
              <span className="font-bold text-base md:text-lg">{beach.popularity}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base md:text-lg text-muted-foreground">Family Friendly</span>
              <span className="font-bold text-base md:text-lg">{beach.familyFriendly ? 'Yes' : 'No'}</span>
            </div>
          </div>

          <div className="mt-auto space-y-2">
            {beach.sandSample && (
              <Button
                onClick={() => onViewSandAnalysis(beach)}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-base md:text-lg py-6"
              >
                <Microscope className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                View Sand Analysis
              </Button>
            )}
            <Button
              variant="outline"
              className="w-full text-base md:text-lg py-6"
              onClick={() => onBeachSelect(beach)}
            >
              View Details
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

