'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import { Beach } from '@/data/beaches';

interface SandAnalysisModalProps {
  beach: Beach | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SandAnalysisModal({ beach, isOpen, onClose }: SandAnalysisModalProps) {
  if (!beach || !beach.sandSample) return null;

  const { sandSample } = beach;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-32 z-50 bg-background rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500">
              <div className="absolute inset-0">
                <Image
                  src={sandSample.image}
                  alt={`${beach.name} sand sample`}
                  fill
                  className="object-cover opacity-30"
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
                  Sand Analysis: {beach.name}
                </h2>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                  <span className="text-base md:text-lg lg:text-xl font-medium">{sandSample.gpsLocation}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              {/* Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-muted/50 rounded-lg p-6 md:p-8">
                  <p className="text-base md:text-lg text-muted-foreground mb-3">Total Grains Detected</p>
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold">{sandSample.totalGrains.toLocaleString()}</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6 md:p-8">
                  <p className="text-base md:text-lg text-muted-foreground mb-3">Sample Location</p>
                  <p className="text-xl md:text-2xl font-bold break-all">{sandSample.gpsLocation}</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6 md:p-8">
                  <p className="text-base md:text-lg text-muted-foreground mb-3">Beach</p>
                  <p className="text-xl md:text-2xl font-bold">{beach.name}</p>
                </div>
              </div>

              {/* Grain Size Distribution */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <BarChart3 className="w-7 h-7 md:w-8 md:h-8 text-cyan-500" />
                  <h3 className="text-3xl md:text-4xl font-bold">Grain Size Distribution</h3>
                </div>
                <div className="space-y-6">
                  {sandSample.grainSizeDistribution.map((item, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg md:text-xl font-semibold">{item.size}</span>
                        <span className="text-xl md:text-2xl font-bold text-cyan-600">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-4 md:h-5 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Analysis Pipeline Info */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg p-6 md:p-8 border border-blue-200 dark:border-blue-800">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Analysis Pipeline</h3>
                <div className="space-y-4 text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground text-lg md:text-xl">Capture:</strong> High-resolution microscopic images
                    of sand samples collected from the beach.
                  </p>
                  <p>
                    <strong className="text-foreground text-lg md:text-xl">Processing:</strong> Advanced image processing
                    algorithms detect and analyze individual grains.
                  </p>
                  <p>
                    <strong className="text-foreground text-lg md:text-xl">Classification:</strong> Grains are classified by
                    size using standardized sedimentology scales (Fine: 0.062-0.25mm, Medium: 0.25-0.5mm,
                    Coarse: 0.5-2mm).
                  </p>
                  <p>
                    <strong className="text-foreground text-lg md:text-xl">Visualization:</strong> Distribution data is
                    visualized to understand beach composition and characteristics.
                  </p>
                </div>
              </div>

              {/* Sand Sample Image */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Sample Image</h3>
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden border border-border">
                  <Image
                    src={sandSample.image}
                    alt={`${beach.name} sand sample`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

