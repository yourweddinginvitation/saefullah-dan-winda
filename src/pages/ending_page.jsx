import React from 'react';
import { motion } from 'framer-motion';
import bg3 from '/images/bg_3.png';
import flower6 from '/images/flower_6.png';
import logo4 from '/images/logo_4.png';

const EndingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 50, damping: 15, duration: 1.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  return (
    <section
      id="ending"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 18px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {/* Decorative Flowers — Top Left */}
      <motion.img loading="lazy" decoding="async"
        src={flower6}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ rotate: [0, 5, 0], opacity: 0.8 }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1.5 }
        }}
        style={{
          position: 'absolute',
          top: '-107px',
          left: '-40px',
          width: '180px',
          zIndex: 0,
          pointerEvents: 'none',
          scaleY: -1
        }}
      />

      {/* Decorative Flowers — Top Right */}
      <motion.img loading="lazy" decoding="async"
        src={flower6}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ rotate: [0, -5, 0], opacity: 0.8 }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1.5 }
        }}
        style={{
          position: 'absolute',
          top: '-107px',
          right: '-40px',
          width: '180px',
          zIndex: 0,
          pointerEvents: 'none',
          scale: -1
        }}
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Logo */}
        <motion.img loading="lazy" decoding="async"
          src={logo4}
          variants={itemVariants}
          alt="Logo"
          style={{ width: '150px', marginBottom: '0px', opacity: 0.9, marginTop: '-110px' }}
        />

        {/* Penutup Heading */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 10vw, 3rem)',
            color: 'var(--color-primary-dark)',
            marginBottom: '0px',
            letterSpacing: '2px'
          }}
        >
          Penutup
        </motion.h1>

        {/* Divider Line */}
        <motion.div
          variants={itemVariants}
          style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
            marginBottom: '30px'
          }}
        />

        {/* Salam Penutup */}
        <motion.p
          variants={textVariants}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.1rem',
            color: 'var(--color-primary-dark)',
            marginBottom: '20px',
            letterSpacing: '1px'
          }}
        >
          Wassalamualaikum Wr. Wb.
        </motion.p>

        {/* Main Closing Text */}
        <motion.p
          variants={textVariants}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            color: '#666',
            lineHeight: '1.9',
            maxWidth: '480px',
            marginBottom: '35px',
            fontStyle: 'italic'
          }}
        >
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak / Ibu / Saudara / i berkenan hadir dan memberikan doa restu kepada kami. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </motion.p>

        {/* Glassmorphism Card */}
        <motion.div
          variants={itemVariants}
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '20px',
            padding: '35px 40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            marginBottom: '40px',
            width: '100%'
          }}
        >
          <motion.p
            variants={textVariants}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              color: '#888',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}
          >
            Hormat kami
          </motion.p>

          {/* Script Names */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '3rem',
              fontWeight: 'normal',
              color: 'var(--color-primary-dark)',
              lineHeight: '1.1',
              marginBottom: '6px'
            }}
          >
            Saepulah
          </motion.h2>

          <motion.span
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              color: 'var(--color-primary)',
              fontStyle: 'italic',
              fontWeight: '300',
              display: 'block',
              marginBottom: '6px'
            }}
          >
            &amp;
          </motion.span>

          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '3rem',
              fontWeight: 'normal',
              color: 'var(--color-primary-dark)',
              lineHeight: '1.1'
            }}
          >
            Winda
          </motion.h2>
        </motion.div>

        {/* Hashtag */}
        <motion.div
          variants={itemVariants}
          style={{
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '40px',
            padding: '10px 28px',
            marginBottom: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
          }}
        >
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.1rem',
            color: 'var(--color-primary-dark)',
            letterSpacing: '1px'
          }}>
            #SaepulDanWinda
          </p>
        </motion.div>

        {/* Closing quote */}
        <motion.p
          variants={textVariants}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.9rem',
            color: '#999',
            fontStyle: 'italic',
            maxWidth: '360px',
            lineHeight: '1.7'
          }}
        >
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu..."
          <br />
          <span style={{ fontSize: '0.75rem', color: '#b48c48' }}>— QS. Ar-Rum : 21</span>
        </motion.p>
      </motion.div>

      {/* Decorative Flowers — Bottom Left */}
      <motion.img loading="lazy" decoding="async"
        src={flower6}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ rotate: [0, -5, 0], opacity: 0.8 }}
        transition={{
          rotate: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1.5 }
        }}
        style={{
          position: 'absolute',
          bottom: '-107px',
          left: '-40px',
          width: '180px',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Decorative Flowers — Bottom Right */}
      <motion.img loading="lazy" decoding="async"
        src={flower6}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ rotate: [0, 5, 0], opacity: 0.8 }}
        transition={{
          rotate: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1.5 }
        }}
        style={{
          position: 'absolute',
          bottom: '-107px',
          right: '-40px',
          width: '180px',
          zIndex: 0,
          pointerEvents: 'none',
          scaleX: -1
        }}
      />
    </section>
  );
};

export default EndingPage;
