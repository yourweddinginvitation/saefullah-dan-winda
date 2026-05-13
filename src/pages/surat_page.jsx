import React from 'react';
import { motion } from 'framer-motion';
const layer1 = '/images/logo_1.png';
const frame12 = '/images/frame_12.png';
const bg3 = '/images/bg_3.png';

const SuratPage = () => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.3, // Animates children one after another
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: 'blur(5px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 1.2 } 
    }
  };

  return (
    <motion.div
      id="surat"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '80vh',
        padding: '100px 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1000px'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(185,150,35,0.07) 0, rgba(185,150,35,0.07) 1px, transparent 1px, transparent 42px), repeating-linear-gradient(90deg, rgba(185,150,35,0.07) 0, rgba(185,150,35,0.07) 1px, transparent 1px, transparent 42px)',
          opacity: 0.35,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div style={{ maxWidth: '100%', width: '92%', textAlign: 'center' }}>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            justifyItems: 'center',
            rowGap: '12px',
            background: 'white',
            borderRadius: '24px',
            padding: '40px 15px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.8)',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Decorative frames don't need stagger to feel like part of the container */}
          <img loading="lazy" decoding="async"
            src={frame12}
            alt=""
            style={{ position: 'absolute', top: '-15px', left: '-15px', width: '100px', opacity: 0.2, pointerEvents: 'none' }}
          />
          <img loading="lazy" decoding="async"
            src={frame12}
            alt=""
            style={{ position: 'absolute', bottom: '-15px', right: '-15px', width: '100px', opacity: 0.2, pointerEvents: 'none', transform: 'rotate(180deg)' }}
          />

          <motion.img loading="lazy" decoding="async"
            variants={itemVariants}
            src={layer1}
            alt="Logo"
            style={{ width: '40px', opacity: 0.8, marginBottom: '5px', position: 'relative', zIndex: 1 }}
          />
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.6',
              color: '#555',
              fontSize: '0.78rem',
              margin: 0,
              padding: '0 10px',
              position: 'relative',
              zIndex: 1,
              width: '100%'
            }}
          >
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
            <br />
            <motion.span 
              variants={itemVariants}
              style={{ display: 'block', marginTop: '10px', fontWeight: 'bold', color: 'var(--color-primary-dark)', fontSize: '0.85rem' }}
            >
              (QS. Ar-Rum: 21)
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SuratPage;
