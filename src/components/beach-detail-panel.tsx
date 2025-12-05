'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Star, Waves, Navigation, Camera, Microscope } from 'lucide-react';
import Image from 'next/image';
import { Beach } from '@/data/beaches';
import { Button } from './ui/button';

interface BeachDetailPanelProps {
  beach: Beach | null;
  isOpen: boolean;
  onClose: () => void;
  onViewSandAnalysis: (beach: Beach) => void;
}

export default function BeachDetailPanel({
  beach,
  isOpen,
  onClose,
  onViewSandAnalysis,
}: BeachDetailPanelProps) {
  if (!beach) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 md:w-[500px] bg-background border-l border-border shadow-2xl z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="relative">
              {/* Hero Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={beach.image}
                  alt={beach.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                  aria-label="Close panel"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{beach.name}</h2>
                  <div className="flex items-center text-white/90">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    <span className="text-base md:text-lg lg:text-xl font-medium">{beach.location}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Rating */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 md:w-7 md:h-7 ${
                          i < Math.floor(beach.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold">{beach.rating}</span>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">About</h3>
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">{beach.description}</p>
                </div>

                {/* Tide Info */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Waves className="w-6 h-6 md:w-7 md:h-7 text-cyan-500" />
                    <h3 className="text-xl md:text-2xl font-bold">Tide Information</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-base md:text-lg text-muted-foreground mb-2">High Tide</p>
                      <p className="text-xl md:text-2xl font-bold">{beach.tideInfo.high}</p>
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-muted-foreground mb-2">Low Tide</p>
                      <p className="text-xl md:text-2xl font-bold">{beach.tideInfo.low}</p>
                    </div>
                  </div>
                </div>

                {/* Facilities */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Facilities</h3>
                  <div className="flex flex-wrap gap-3">
                    {beach.facilities.map((facility) => (
                      <span
                        key={facility}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-base md:text-lg font-medium"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-base md:text-lg text-muted-foreground mb-2">Water Quality</p>
                    <p className="text-xl md:text-2xl font-bold">{beach.waterQuality}</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg text-muted-foreground mb-2">Popularity</p>
                    <p className="text-xl md:text-2xl font-bold">{beach.popularity}</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg text-muted-foreground mb-2">Family Friendly</p>
                    <p className="text-xl md:text-2xl font-bold">{beach.familyFriendly ? 'Yes' : 'No'}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <Button
                    onClick={() => onViewSandAnalysis(beach)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-base md:text-lg py-6"
                    disabled={!beach.sandSample}
                  >
                    <Microscope className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    View Sand Analysis
                  </Button>
                  <Button variant="outline" className="w-full text-base md:text-lg py-6">
                    <Camera className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    View Photos
                  </Button>
                  <Button variant="outline" className="w-full text-base md:text-lg py-6">
                    <Navigation className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    Navigate
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

