import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
// Cover media
const cover1Image = 'https://res.cloudinary.com/dphjoqgvb/image/upload/v1764341210/cover1_o9wk2s.jpg';
const cover2Image = 'https://res.cloudinary.com/dphjoqgvb/image/upload/v1764341209/cover2_gaxqmf.jpg';
const cover3Image = 'https://res.cloudinary.com/dphjoqgvb/image/upload/v1764341210/cover3_hv7xab.jpg';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import SaveTheDateSection from '@/components/SaveTheDateSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);
    
    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Background music playback failed:', error);
      }
    }
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
        data-testid="background-audio"
        src="https://res.cloudinary.com/dphjoqgvb/video/upload/v1764343779/Both_Sides_Now_-_Joni_Mitchell____Orchestral_Arrangement_MxLdFGvvx9o_vcv2sy.mp3"
      />

      <MusicConsentPopup 
        onConsent={handleMusicConsent} 
        isVisible={showMusicConsent} 
      />

      <div className="min-h-screen relative">
        <Navigation />

        <main className="relative z-10 space-y-0">
          <HeroSection audioRef={audioRef} />
        <InvitationRevealSection />
        <CountdownSection />
        <ImageLoop />
        <StorySection />
        <SaveTheDateSection audioRef={audioRef} />
        <ScrollTriggeredTimeline />
        <CoverSection
          imageUrl={cover1Image}
          alt="Anjo & Joanna Wedding Cover 1"
        />
        <VenueSection />
        <CoverSection
          imageUrl={cover2Image}
          alt="Dong & Riza Wedding Cover 2"
        />
        <DressCodeSection />
        <HashtagGiftsSection />
        <MemorableMomentsSection />
        <RSVPSection />
        <CoverSection
          imageUrl={cover3Image}
          alt="Anjo & Joanna Wedding Cover 3"
        />
        <EntourageSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
    </AnimationContext.Provider>
  );
};

export default Index;