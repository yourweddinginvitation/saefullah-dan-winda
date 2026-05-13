import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Assets
const maleImg = '/images/50.png';
const femaleImg = '/images/51.png';
const frame5 = '/images/frame_5.png';
const frame6 = '/images/frame_6.png';
const frame7 = '/images/frame_7.png';
const flower3 = '/images/flower_3.png';
const burung = '/images/burung.png';
const bg1 = '/images/bg_2.png';

const windAnimation = {
  animate: {
    x: [-3, 3, -2, 2, -3],
    y: [-2, 2, -1, 1, -2],
    rotate: [-0.5, 0.5, -0.5],
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut"
    }
  }
};

const OpenAmplopPage = ({ onOpenComplete, recipientName }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds of animations
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      style={{
        position: 'absolute',
        inset: 0,
        minHeight: '100vh',
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* Background Texture/Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.05) 100%)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(185,150,35,0.06) 0, rgba(185,150,35,0.06) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(185,150,35,0.06) 0, rgba(185,150,35,0.06) 1px, transparent 1px, transparent 40px)',
        opacity: 0.3,
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Main Animation Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
      }}>

        {/* Frame 7 (Paling Belakang) */}
        <motion.div 
          style={{
            position: 'absolute',
            width: '110%',
            height: '100%',
            zIndex: 7,
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <motion.img loading="lazy" decoding="async" 
            src={frame7}
            alt="Frame 7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 4.5 }} // Muncul paling akhir
            style={{ width: '100%', objectFit: 'contain' }}
          />
        </motion.div>

        {/* Frame 6 (Di depan Frame 7, wind animation) */}
        <motion.div 
          variants={windAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            top: '-3%',
            width: '110%',
            height: '100%',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <motion.img loading="lazy" decoding="async" 
            src={frame6}
            alt="Frame 6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }} // Muncul ke-1
            style={{ width: '100%', objectFit: 'contain' }}
          />
        </motion.div>

        {/* Characters Container (inside frame) */}
        <div style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          zIndex: 2
        }}>
          {/* Male Character (slides from Left) */}
          <motion.img loading="lazy" decoding="async"
            src={maleImg}
            alt="Male"
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: '5%', opacity: 1 }} 
            transition={{ duration: 1.8, type: 'spring', bounce: 0.2, delay: 1.5 }} // Muncul ke-2
            style={{
              width: '85%',
              objectFit: 'contain',
              marginRight: '-45%', // Lebih overlap, lebih dekat
              marginTop: '40%'
            }}
          />

          {/* Female Character (slides from Right) */}
          <motion.img loading="lazy" decoding="async"
            src={femaleImg}
            alt="Female"
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: '-5%', opacity: 1 }} 
            transition={{ duration: 1.8, type: 'spring', bounce: 0.2, delay: 1.5 }} // Muncul ke-2 bersamaan
            style={{
              width: '85%',
              objectFit: 'contain',
              marginLeft: '-45%', // Lebih overlap, lebih dekat
              marginTop: '40%',
              zIndex: 3 
            }}
          />
        </div>

        {/* Frame 5 sliding up from bottom with wind animation */}
        <motion.div 
          variants={windAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            width: '110%',
            height: '100%',
            zIndex: 5,
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <motion.img loading="lazy" decoding="async" 
            src={frame5}
            alt="Frame 5"
            initial={{ y: '100vh', opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 2.5 }} // Muncul ke-3
            style={{ width: '100%', objectFit: 'contain' }}
          />
        </motion.div>

        {/* Flower 3 (Kiri & Kanan Bawah, Muncul setelah Frame 5) */}
        <motion.div 
          variants={windAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 8,
            pointerEvents: 'none'
          }}
        >
          {/* Flower 3 - Kiri Bawah */}
          <motion.img loading="lazy" decoding="async" 
            src={flower3}
            alt="Flower 3 Kiri"
            initial={{ y: '50vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 3.5 }}
            style={{ 
              position: 'absolute',
              bottom: '-20%',
              left: '-10%',
              width: '45%', 
              objectFit: 'contain'
            }}
          />

          {/* Flower 3 - Kanan Bawah */}
          <motion.img loading="lazy" decoding="async" 
            src={flower3}
            alt="Flower 3 Kanan"
            initial={{ y: '50vh', opacity: 0, scaleX: -1 }} // Di-flip agar simetris (jika bentuknya asimetris)
            animate={{ y: 0, opacity: 1, scaleX: -1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 3.5 }}
            style={{ 
              position: 'absolute',
              bottom: '-20%',
              right: '-10%',
              width: '45%', 
              objectFit: 'contain'
            }}
          />
        </motion.div>

      </div>

      {/* Animasi Burung Terbang (Paling Atas, Paling Lambat) */}
      <motion.img loading="lazy" decoding="async"
        src={burung}
        alt="Burung Terbang"
        initial={{ x: '-50vw', y: '8vh', scale: 0.5, opacity: 0 }}
        animate={{ 
          x: '150vw', 
          y: '-52vh',
          opacity: [0, 1, 1, 0],
          scale: [0.5, 0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 9.5, 
          ease: 'linear', 
          delay: 0.0 // Terbang dari awal
        }}
        style={{
          position: 'absolute',
          width: '120px',
          zIndex: 999,
          pointerEvents: 'none'
        }}
      />

      {/* Buka Undangan Button */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              bottom: '10%',
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px'
            }}
          >
            {recipientName && (
              <div
                style={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '12px',
                  padding: '7px 12px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  minWidth: '170px'
                }}
              >
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#161001', fontFamily: 'var(--font-sans)' }}>
                  Kepada Yth.
                </p>
                <p style={{ margin: '4px 0 0 0', fontSize: '1.1rem', color: '#3e2b06', fontWeight: 'bold', fontFamily: 'var(--font-serif)' }}>
                  {recipientName}
                </p>
              </div>
            )}
            <motion.button
              onClick={onOpenComplete}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 35px',
                borderRadius: '30px',
                background: '#f5c8c8ff',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(245, 200, 200, 0.4)',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '1px'
              }}
            >
              BUKA UNDANGAN
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default OpenAmplopPage;
