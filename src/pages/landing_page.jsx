import React from 'react';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRing } from "react-icons/fa";

// Import assets
const bg1 = '/images/bg_2.png';
const layer1 = '/images/layer_1.png';
const frame1 = '/images/frame_1.png';

const LandingPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.5, staggerChildren: 0.15 }
    },
    exit: { 
      opacity: 0, 
      transition: { ease: 'easeInOut', duration: 0.8 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { type: "spring", stiffness: 50, damping: 15, duration: 1.2 } },
    exit: { opacity: 0, y: -50, scale: 0.9, filter: 'blur(5px)', transition: { duration: 0.8, ease: "easeIn" } }
  };

  const layerVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1.5, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      scale: 1.05, 
      transition: { ease: 'easeInOut', duration: 0.8 } 
    }
  };

  // Efek Angin (Swaying / Wind effect)
  const frameVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: [-4, 4],
      y: [-2, 2],
      rotate: [-1, 1],
      transition: { 
        opacity: { duration: 2.0, ease: "easeOut", delay: 0.1 },
        scale: { duration: 2.0, ease: "easeOut", delay: 0.1 },
        x: { repeat: Infinity, duration: 4.5, ease: "easeInOut", repeatType: "reverse", delay: 0.1 },
        y: { repeat: Infinity, duration: 3.5, ease: "easeInOut", repeatType: "reverse", delay: 0.1 },
        rotate: { repeat: Infinity, duration: 5.5, ease: "easeInOut", repeatType: "reverse", delay: 0.1 }
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 1.05, 
      transition: { ease: 'easeInOut', duration: 0.8 } 
    }
  };

  return (
    <motion.div 
      id="home"
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        backgroundColor: '#FAF9F6',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(180,140,72,0.08) 0, rgba(180,140,72,0.08) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(180,140,72,0.08) 0, rgba(180,140,72,0.08) 1px, transparent 1px, transparent 40px)',
        opacity: 0.4,
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '480px', // Prioritas ukuran mobile
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)' 
      }}>
        
        {/* Background Paling Bawah */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }} />

        {/* Layer 1 di Tengah (Efek Angin) */}
        <motion.img loading="lazy" decoding="async" 
          src={layer1}
          alt="Layer"
          variants={layerVariants}
          style={{
            position: 'absolute',
            top: '-2.5%',
            left: '-2.5%',
            width: '105%',
            height: '105%',
            objectFit: 'cover',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />

        {/* Frame 1 di Atas Layer */}
        <motion.img loading="lazy" decoding="async" 
          src={frame1}
          alt="Frame"
          variants={frameVariants}
          style={{
            position: 'absolute',
            top: '-2.5%',
            left: '-2.5%',
            width: '105%',
            height: '105%',
            objectFit: 'contain',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        {/* Teks Utama Paling Atas */}
        <div className="text-center" style={{ 
          zIndex: 3, 
          padding: '0 30px', 
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#5a4f41' // Warna kecoklatan seperti di gambar
        }}>
          <motion.p variants={itemVariants} style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: '0.8rem',
            lineHeight: '1.5',
            marginBottom: '15px',
            maxWidth: '250px'
          }}>
            Dengan penuh cinta, kami<br/>mengundang Anda ke pernikahan
          </motion.p>
          
          <motion.h1 variants={itemVariants} style={{ 
            fontFamily: 'var(--font-script)',
            fontSize: '4rem',
            fontWeight: 'normal',
            lineHeight: '1',
            color: '#b48c48',
            marginBottom: '0'
          }}>
            Saefullah
          </motion.h1>
          
          <motion.div variants={itemVariants} style={{ 
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            color: '#b48c48',
            margin: '1px 0',
            fontStyle: 'italic',
            fontWeight: '300'
          }}>
            &
          </motion.div>

          <motion.h1 variants={itemVariants} style={{ 
            fontFamily: 'var(--font-script)',
            fontSize: '4rem',
            fontWeight: 'normal',
            lineHeight: '1',
            color: '#b48c48',
            marginBottom: '40px'
          }}>
            Winda
          </motion.h1>

          

          <motion.p variants={itemVariants} style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            marginBottom: '10px'
          }}>
            Yang Akan Diselengarakan
          </motion.p>

          <motion.div variants={itemVariants} style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '10px',
            color: '#b48c48'
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>MEI</span>
            <div style={{ width: '1px', height: '30px', backgroundColor: '#b48c48', opacity: 0.5 }}></div>
            <span style={{ fontSize: '2.8rem', fontFamily: 'var(--font-serif)', lineHeight: '1' }}>30</span>
            <div style={{ width: '1px', height: '30px', backgroundColor: '#b48c48', opacity: 0.5 }}></div>
            <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>2026</span>
          </motion.div>

          <motion.p variants={itemVariants} style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            marginBottom: '15px',
            color: '#b48c48'
          }}>
            09 : 00 s/d selesai
          </motion.p>

          <motion.div variants={itemVariants} style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px'
          }}>
            <FaMapMarkerAlt size={20} color="#5a4f41" />
            <p style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              maxWidth: '220px',
              lineHeight: '1.5'
            }}>
              Kandang manjangan<br/>
              RT005/rw 003, desa sukajaya<br/>
              kec.sajira kab.lebak banten
            </p>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
