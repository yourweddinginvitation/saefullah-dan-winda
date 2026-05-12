import React, { Suspense, lazy, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';

const LandingPage = lazy(() => import('./pages/landing_page'));
const SuratPage = lazy(() => import('./pages/surat_page'));
const CouplePage = lazy(() => import('./pages/couple_page'));
const SaveTheDatePage = lazy(() => import('./pages/save_the_date_page'));
const MapsPage = lazy(() => import('./pages/maps_page'));
const WeddingGiftPage = lazy(() => import('./pages/wedding_gift_page'));
const UcapanPage = lazy(() => import('./pages/ucapan_page'));
const EndingPage = lazy(() => import('./pages/ending_page'));
const OpenAmplopPage = lazy(() => import('./pages/open_amplop_page'));
const BottomNav = lazy(() => import('./components/BottomNav'));

function App() {
  const [isCoverOpened, setIsCoverOpened] = useState(false);
  const [playYoutubeMusic, setPlayYoutubeMusic] = useState(false);
  const youtubeVideoId = 'rtOvBOTyX00';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0`;
  const audioRef = useRef(null);

  const handleOpenInvitation = () => {
    setPlayYoutubeMusic(true);
    setIsCoverOpened(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      {playYoutubeMusic && (
        <iframe
          ref={audioRef}
          src={youtubeEmbedUrl}
          title="Background Music"
          allow="autoplay"
          style={{
            position: 'fixed',
            width: '1px',
            height: '1px',
            opacity: 0,
            pointerEvents: 'none',
            border: 0,
            left: 0,
            top: 0,
            zIndex: -1
          }}
        />
      )}

      <AnimatePresence mode="wait">
        {!isCoverOpened && (
          <Suspense fallback={null}>
            <OpenAmplopPage key="cover" onOpenComplete={handleOpenInvitation} />
          </Suspense>
        )}
      </AnimatePresence>

      {isCoverOpened && (
        <Suspense fallback={null}>
          <>
            <LandingPage />
            <SuratPage />
            <CouplePage />
            <SaveTheDatePage />
            <MapsPage />
            <WeddingGiftPage />
            <UcapanPage />
            <EndingPage />
            <BottomNav />
          </>
        </Suspense>
      )}
    </div>
  );
}

export default App;
