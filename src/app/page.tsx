'use client';

import { useState } from 'react';
import PremiumLoader from '@/components/loader';
import HeroSection from '@/components/hero';
import CinematicScrollSection from '@/components/cinematic-scroll';
import MapSection from '@/components/map-section';
import BeachDetailPanel from '@/components/beach-detail-panel';
import SandAnalysisModal from '@/components/sand-analysis-modal';
import ExploreSection from '@/components/explore-section';
import Footer from '@/components/footer';
import { Beach } from '@/data/beaches';

export default function Home() {
  const [selectedBeach, setSelectedBeach] = useState<Beach | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [sandAnalysisBeach, setSandAnalysisBeach] = useState<Beach | null>(null);
  const [isSandModalOpen, setIsSandModalOpen] = useState(false);

  const handleBeachSelect = (beach: Beach) => {
    setSelectedBeach(beach);
    setIsPanelOpen(true);
  };

  const handleViewSandAnalysis = (beach: Beach) => {
    setSandAnalysisBeach(beach);
    setIsSandModalOpen(true);
    setIsPanelOpen(false);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setSelectedBeach(null);
  };

  const handleCloseSandModal = () => {
    setIsSandModalOpen(false);
    setSandAnalysisBeach(null);
  };

  return (
    <>
      <PremiumLoader />
      <HeroSection />
      <CinematicScrollSection />
      <MapSection onBeachSelect={handleBeachSelect} />
      <ExploreSection
        onBeachSelect={handleBeachSelect}
        onViewSandAnalysis={handleViewSandAnalysis}
      />
      <BeachDetailPanel
        beach={selectedBeach}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        onViewSandAnalysis={handleViewSandAnalysis}
      />
      <SandAnalysisModal
        beach={sandAnalysisBeach}
        isOpen={isSandModalOpen}
        onClose={handleCloseSandModal}
      />
      <Footer />
    </>
  );
}
