import React from 'react';
import { motion } from 'framer-motion';
import bgMaps from '/images/bg_2.png';
import logo4 from '/images/logo_4.png';
import flower6 from '/images/flower_6.png';

const MapsPage = () => {
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
            transition: { type: "spring", stiffness: 50, damping: 15, duration: 1.2 }
        }
    };

    return (
        <section
            id="maps"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${bgMaps})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px 18px 120px 18px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1
            }}
        >
            {/* Decorative Flowers */}
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
                style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <motion.img loading="lazy" decoding="async"
                    src={logo4}
                    variants={itemVariants}
                    style={{ width: '150px', marginBottom: '10px' }}
                />

                <motion.h1
                    variants={itemVariants}
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem, 10vw, 3rem)',
                        color: 'var(--color-primary-dark)',
                        marginBottom: '15px',
                        letterSpacing: '2px',
                        whiteSpace: 'nowrap'
                    }}
                >
                    Lokasi Acara
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        color: '#555',
                        lineHeight: '1.8',
                        maxWidth: '550px',
                        marginBottom: '40px',
                        fontStyle: 'italic'
                    }}
                >
                    Dengan penuh rasa syukur, kami menantikan kehadiran Bapak/Ibu/Saudara/i di acara pernikahan kami yang berlokasi di:
                </motion.p>

                {/* Map Container */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '20px',
                        padding: '10px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        overflow: 'hidden'
                    }}
                >
                    <iframe
                        src="https://maps.google.com/maps?q=Kandang+Manjangan,+Sajira,+Lebak,+Banten&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="350"
                        style={{ border: 0, borderRadius: '15px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Peta Lokasi Pernikahan"
                    ></iframe>
                </motion.div>

                <motion.a
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.google.com/maps/search/?api=1&query=Kandang+Manjangan,+Sajira,+Lebak,+Banten"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        marginTop: '30px',
                        backgroundColor: '#fff',
                        color: 'var(--color-primary-dark)',
                        padding: '12px 35px',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer'
                    }}
                >
                    Buka di Google Maps
                </motion.a>

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

export default MapsPage;
