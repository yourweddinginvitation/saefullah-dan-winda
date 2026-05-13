import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo4 from '/images/logo_4.png';
import bg2 from '/images/bg_3.png';
import bgGrid from '/images/bg_2.png';
import flower6 from '/images/flower_6.png';

const SaveTheDatePage = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('May 30, 2026 09:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
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
        <section
            id="save-the-date"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${bg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 18px 120px 18px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1
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
            {/* Decorative Flowers Top */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ position: 'absolute', top: '-107px', left: '-40px', width: '180px', zIndex: 0 }}
            >
                <motion.img loading="lazy" decoding="async"
                    src={flower6}
                    style={{ width: '100%', scaleY: -1 }}
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ position: 'absolute', top: '-107px', right: '-40px', width: '180px', zIndex: 0 }}
            >
                <motion.img loading="lazy" decoding="async"
                    src={flower6}
                    style={{ width: '100%', scale: -1 }}
                    animate={{ rotate: [0, -5, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
            >
                {/* Logo */}
                <motion.img loading="lazy" decoding="async"
                src={logo4}
                variants={itemVariants}
                style={{ width: '150px', marginBottom: '10px' }}
            />

            {/* Main Title */}
            <motion.h1
                variants={itemVariants}
                style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 10vw, 3.5rem)',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '5px',
                    letterSpacing: '4px',
                    whiteSpace: 'nowrap'
                }}
            >
                Save The Date
            </motion.h1>

            {/* Message */}
            <motion.p
                variants={itemVariants}
                style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: '#555',
                    lineHeight: '1.8',
                    maxWidth: '500px',
                    marginBottom: '25px',
                    fontStyle: 'italic'
                }}
            >
                Dan kami bersyukur, dipertemukan Allah di waktu terbaik, kini kami menanti hari istimewa kami.
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
                variants={itemVariants}
                style={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'nowrap',
                    justifyContent: 'center'
                }}
            >
                {[
                    { label: 'Hari', value: timeLeft.days },
                    { label: 'Jam', value: timeLeft.hours },
                    { label: 'Menit', value: timeLeft.minutes },
                    { label: 'Detik', value: timeLeft.seconds }
                ].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '15px',
                            width: '75px',
                            padding: '15px 0',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <span style={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            color: 'var(--color-primary-dark)',
                            fontFamily: 'var(--font-serif)'
                        }}>
                            {String(item.value).padStart(2, '0')}
                        </span>
                        <span style={{
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            color: '#888',
                            marginTop: '5px'
                        }}>
                            {item.label}
                        </span>
                    </div>
                ))}
            </motion.div>

            {/* Event Details Grid */}
            <motion.div
                variants={itemVariants}
                style={{
                    marginTop: '50px',
                    display: 'flex',
                    gap: '30px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: '800px'
                }}
            >
                {/* Akad Nikah */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)' }}
                    style={{
                        backgroundColor: '#fff',
                        backgroundImage: `url(${bgGrid})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '20px',
                        padding: '30px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                        flex: '1',
                        minWidth: '280px',
                        textAlign: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.8rem',
                        color: 'var(--color-primary-dark)',
                        marginBottom: '10px'
                    }}>
                        Akad Nikah
                    </h3>
                    <div style={{ width: '300px', height: '2px', backgroundColor: '#D4AF37', margin: '0 auto 15px auto' }}></div>
                    <p style={{ fontFamily: 'var(--font-sans)', color: '#555', marginBottom: '5px' }}>
                        <strong>Sabtu, 30 Mei 2026</strong>
                    </p>
                    <p style={{ fontFamily: 'var(--font-sans)', color: '#555', marginBottom: '15px' }}>
                        09:00 WIB - Selesai
                    </p>
                    <p style={{ fontFamily: 'var(--font-sans)', color: '#777', fontSize: '0.9rem' }}>
                        Kandang manjangan<br/>
                        RT005/rw 003, desa sukajaya<br/>
                        kec.sajira kab.lebak banten
                    </p>
                </motion.div>

                {/* Resepsi */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)' }}
                    style={{
                        backgroundColor: '#fff',
                        backgroundImage: `url(${bgGrid})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '20px',
                        padding: '30px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                        flex: '1',
                        minWidth: '280px',
                        textAlign: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.8rem',
                        color: 'var(--color-primary-dark)',
                        marginBottom: '10px'
                    }}>
                        Resepsi
                    </h3>
                    <div style={{ width: '300px', height: '2px', backgroundColor: '#D4AF37', margin: '0 auto 15px auto' }}></div>
                    <p style={{ fontFamily: 'var(--font-sans)', color: '#555', marginBottom: '5px' }}>
                        <strong>Sabtu, 30 Mei 2026</strong>
                    </p>
                    <p style={{ fontFamily: 'var(--font-sans)', color: '#555', marginBottom: '15px' }}>
                        11:00 WIB - 14:00 WIB
                    </p>
                    <p style={{ fontFamily: 'var(--font-sans)', color: '#777', fontSize: '0.9rem' }}>
                        Kandang manjangan<br/>
                        RT005/rw 003, desa sukajaya<br/>
                        kec.sajira kab.lebak banten
                    </p>
                </motion.div>
            </motion.div>

            </motion.div>

            {/* Decorative Flowers Bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ position: 'absolute', bottom: '-107px', left: '-40px', width: '180px', zIndex: 0 }}
            >
                <motion.img loading="lazy" decoding="async"
                    src={flower6}
                    style={{ width: '100%' }}
                    animate={{ rotate: [0, -5, 0] }}
                    transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ position: 'absolute', bottom: '-107px', right: '-40px', width: '180px', zIndex: 0 }}
            >
                <motion.img loading="lazy" decoding="async"
                    src={flower6}
                    style={{ width: '100%', scaleX: -1 }}
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>
        </section>
    );
};

export default SaveTheDatePage;
