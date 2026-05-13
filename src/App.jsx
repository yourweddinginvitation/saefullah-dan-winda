import React, { Suspense, lazy, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  const searchParams = new URLSearchParams(window.location.search);
  const recipientName = (searchParams.get('to') || '').replace(/\+/g, ' ').trim();
  const youtubeVideoId = 'rtOvBOTyX00';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&playsinline=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0`;
  const audioRef = useRef(null);

  const handleOpenInvitation = () => {
    setPlayYoutubeMusic(true);
    setIsCoverOpened(true);
  };

  const toggleMusic = () => {
    setPlayYoutubeMusic((prev) => !prev);
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
            <OpenAmplopPage key="cover" onOpenComplete={handleOpenInvitation} recipientName={recipientName} />
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
            <button
              onClick={toggleMusic}
              aria-label={playYoutubeMusic ? 'Pause music' : 'Play music'}
              style={{
                position: 'fixed',
                right: '14px',
                bottom: '88px',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.7)',
                background: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0 8px 18px rgba(0,0,0,0.18)',
                zIndex: 12000,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0
              }}
            >
              <motion.span
                animate={playYoutubeMusic ? { rotate: 360 } : { rotate: 0 }}
                transition={playYoutubeMusic ? { repeat: Infinity, duration: 2, ease: 'linear' } : { duration: 0.2 }}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f5c8c8ff, #e8b2b2)',
                  color: '#fff',
                  fontSize: '15px',
                  lineHeight: '34px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  userSelect: 'none'
                }}
              >
                {playYoutubeMusic ? '♪' : '▶'}
              </motion.span>
            </button>
          </>
        </Suspense>
      )}
    </div>
  );
}

export default App;
