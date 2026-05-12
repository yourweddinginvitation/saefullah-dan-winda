import React, { useEffect } from 'react';
import frame14 from '/images/frame_14.png';
import frame7 from '/images/frame_7.png';
import bg3 from '/images/bg_2.png';
import maleImg from '/images/52.png';
import femaleImg from '/images/53.png';
import { motion } from 'framer-motion';
import logo4 from '/images/logo_4.png';
import flower6 from '/images/flower_6.png';
import flower7 from '/images/frame_1.png';

const CouplePage = () => {
  // Variant specifically for logo entering from TOP
  const logoVariants = {
    hidden: { opacity: 0, y: -120, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1.5 
      } 
    }
  };

  // Dramatic entry for main items from BOTTOM
  const itemVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.6, rotate: -5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 1.2 
      } 
    }
  };

  // Blur entry for text
  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      id="couple"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        padding: '120px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Flower Decoration Left */}
      <motion.img loading="lazy" decoding="async"
        src={flower7}
        initial={{ opacity: 0, x: -40, y: '100%' }}
        animate={{ 
          opacity: 0.5, 
          x: [0, 8, 0], 
          y: ['-50%', '-52%', '-50%'],
          rotate: [0, 1.5, 0]
        }}
        transition={{ 
          opacity: { duration: 1.5 },
          x: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 15, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          position: 'absolute',
          left: '-10px',
          top: '50%',
          width: '380px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Decorative Flowers Top */}
      <motion.img loading="lazy" decoding="async"
        src={flower6}
        initial={{ scaleY: -1, opacity: 0 }}
        animate={{ rotate: [0, 5, 0], scaleY: -1, opacity: 0.8 }}
        transition={{ 
          rotate: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1 }
        }}
        style={{ position: 'absolute', top: '-107px', left: '-40px', width: '180px', zIndex: 5 }}
      />
      <motion.img loading="lazy" decoding="async"
        src={flower6}
        initial={{ scale: -1, opacity: 0 }}
        animate={{ rotate: [0, -5, 0], scale: -1, opacity: 0.8 }}
        transition={{ 
          rotate: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1 }
        }}
        style={{ position: 'absolute', top: '-107px', right: '-40px', width: '180px', zIndex: 5 }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        
        {/* Logo 4 at the Top */}
        <motion.img loading="lazy" decoding="async"
          src={logo4}
          variants={logoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          style={{ width: '160px', marginBottom: '20px', opacity: 0.9, marginTop: '-100px' }}
        />

        {/* Invitation Message */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          style={{ marginBottom: '50px', padding: '0 20px' }}
        >
          <h3 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.2rem', 
            marginBottom: '12px', 
            color: 'var(--color-primary-dark)',
            letterSpacing: '1px'
          }}>
            Assalamualaikum Wr. Wb.
          </h3>
          <p style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: '0.85rem', 
            color: '#666', 
            lineHeight: '1.7', 
            maxWidth: '550px', 
            margin: '0 auto',
            fontStyle: 'italic'
          }}>
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami:
          </p>
        </motion.div>

        {/* Couple Section Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: window.innerWidth < 768 ? '30px' : '50px',
          marginBottom: '80px',
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 10px'
        }}>
          {/* Groom Section */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 300px', maxWidth: '400px' }}
          >
            <div style={{ position: 'relative', width: '220px', height: '280px', margin: '0 auto 25px auto' }}>
              <img loading="lazy" decoding="async"
                src={maleImg}
                alt="Groom"
                style={{
                  width: '160px',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '80px 80px 10px 10px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  border: '4px solid white',
                  display: 'block',
                  margin: '0 auto',
                  background: '#f0f0f0',
                  position: 'relative',
                  zIndex: 1
                }}
              />
              <motion.img loading="lazy" decoding="async"
                src={frame7}
                alt="Frame Groom"
                style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '0%',
                  width: '100%',
                  height: '100%',
                  zIndex: 2,
                  objectFit: 'contain',
                  pointerEvents: 'none'
                }}
                animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img loading="lazy" decoding="async" src={frame14} alt="" style={{ position: 'absolute', bottom: '30px', left: '30px', width: '100px', zIndex: 15, pointerEvents: 'none', opacity: 0.90 }} />
              <motion.img loading="lazy" decoding="async" src={frame14} alt="" style={{ position: 'absolute', bottom: '30px', right: '30px', width: '100px', zIndex: 15, pointerEvents: 'none', opacity: 0.90, transform: 'scaleX(-1)' }} />
            </div>
            <motion.h2 variants={textVariants} style={{ fontSize: '2.2rem', marginBottom: '8px' }}>Saepulah</motion.h2>
            <motion.p variants={textVariants} style={{ fontFamily: 'var(--font-sans)', color: '#666', fontSize: '0.85rem', marginBottom: '4px' }}>Putra ke Tiga dari</motion.p>
            <motion.p variants={textVariants} style={{ fontFamily: 'var(--font-serif)', color: '#333', fontSize: '1.2rem', fontWeight: 'bold' }}>Bpk. Ubik & Ibu Sopiah</motion.p>
            <motion.a variants={textVariants} href="#" style={{ display: 'inline-block', marginTop: '10px', color: 'var(--color-primary)', fontSize: '0.9rem' }}>@romeo.ig</motion.a>
          </motion.div>

          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: window.innerWidth < 768 ? '1 1 100%' : '0 0 auto',
              margin: '20px 0'
            }}
          >
            <h1 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)', opacity: 0.3, fontFamily: 'var(--font-serif)', margin: '0' }}>&</h1>
          </motion.div>

          {/* Bride Section */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 300px', maxWidth: '400px' }}
          >
            <div style={{ position: 'relative', width: '220px', height: '280px', margin: '0 auto 25px auto' }}>
              <img loading="lazy" decoding="async"
                src={femaleImg}
                alt="Bride"
                style={{
                  width: '160px',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '80px 80px 10px 10px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  border: '4px solid white',
                  display: 'block',
                  margin: '0 auto',
                  background: '#f0f0f0',
                  position: 'relative',
                  zIndex: 1
                }}
              />
              <motion.img loading="lazy" decoding="async"
                src={frame7}
                alt="Frame Bride"
                style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '0%',
                  width: '100%',
                  height: '100%',
                  zIndex: 2,
                  objectFit: 'contain',
                  pointerEvents: 'none'
                }}
                animate={{ rotate: [0, -1.5, 0, 1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img loading="lazy" decoding="async" src={frame14} alt="" style={{ position: 'absolute', bottom: '30px', left: '30px', width: '100px', zIndex: 15, pointerEvents: 'none', opacity: 0.90 }} />
              <motion.img loading="lazy" decoding="async" src={frame14} alt="" style={{ position: 'absolute', bottom: '30px', right: '30px', width: '100px', zIndex: 15, pointerEvents: 'none', opacity: 0.90, transform: 'scaleX(-1)' }} />
            </div>
            <motion.h2 variants={textVariants} style={{ fontSize: '2.2rem', marginBottom: '8px' }}>Winda</motion.h2>
            <motion.p variants={textVariants} style={{ fontFamily: 'var(--font-sans)', color: '#666', fontSize: '0.85rem', marginBottom: '4px' }}>Putri ke Tujuh dari</motion.p>
            <motion.p variants={textVariants} style={{ fontFamily: 'var(--font-serif)', color: '#333', fontSize: '1.2rem', fontWeight: 'bold' }}>Bpk. Uding & Ibu Enok</motion.p>
            <motion.a variants={textVariants} href="#" style={{ display: 'inline-block', marginTop: '10px', color: 'var(--color-primary)', fontSize: '0.9rem' }}>@juliet.ig</motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Flowers Bottom */}
      <motion.img loading="lazy" decoding="async"
        src={flower6}
        initial={{ opacity: 0 }}
        animate={{ rotate: [0, -5, 0], opacity: 0.8 }}
        transition={{ 
          rotate: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1 }
        }}
        style={{ position: 'absolute', bottom: '-107px', left: '-40px', width: '180px', zIndex: 5 }}
      />
      <motion.img loading="lazy" decoding="async"
        src={flower6}
        initial={{ scaleX: -1, opacity: 0 }}
        animate={{ rotate: [0, 5, 0], scaleX: -1, opacity: 0.8 }}
        transition={{ 
          rotate: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1 }
        }}
        style={{ position: 'absolute', bottom: '-107px', right: '-40px', width: '180px', zIndex: 5 }}
      />
    </motion.div>
  );
};

export default CouplePage;
