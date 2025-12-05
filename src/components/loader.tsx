'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function PremiumLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShouldRender(false), 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: prefersReducedMotion ? 0.1 : 0.8, ease: 'easeInOut' }}
    >
      <div className="text-center space-y-6">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
            Sand Analysis
          </h1>
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 1.2, delay: 0.5 }}
          />
        </motion.div>
        <motion.p
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.6, delay: 0.4 }}
        >
          Mapping System
        </motion.p>
        {!prefersReducedMotion && (
          <motion.div
            className="flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

