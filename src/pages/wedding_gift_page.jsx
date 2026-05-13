import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bgGift from '/images/bg_3.png';
import logo4 from '/images/logo_4.png';
import flower6 from '/images/flower_6.png';

const WeddingGiftPage = () => {
    const [copied, setCopied] = useState('');

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(''), 2000);
    };

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
            id="gift"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${bgGift})`,
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
                    Wedding Gift
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
                    Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
                    Namun, jika Bapak/Ibu/Saudara/i ingin memberikan tanda kasih,
                    kami menyediakannya melalui fitur di bawah ini.
                </motion.p>

                {/* Gift Cards Container */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '30px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        width: '100%'
                    }}
                >
                    {/* Bank BCA */}
                    <div style={{
                        background: 'rgba(251, 251, 251, 0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '20px',
                        padding: '30px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        flex: '1',
                        minWidth: '280px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#b99623ff', marginBottom: '5px' }}>
                            Bank BCA
                        </h3>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#777', marginBottom: '15px' }}>
                            a.n. Winda Mutoharoh
                        </p>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 'bold', color: '#333', marginBottom: '20px', letterSpacing: '2px' }}>
                            4080278484
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCopy('1234567890', 'bca')}
                            style={{
                                background: copied === 'bca' ? '#8a9fd5ff' : '#f5c8c8ff',
                                color: copied === 'bca' ? '#fff' : 'var(--color-primary-dark)',
                                border: 'none',
                                padding: '10px 25px',
                                borderRadius: '25px',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                            }}
                        >
                            {copied === 'bca' ? 'Berhasil Disalin' : 'Salin No. Rekening'}
                        </motion.button>
                    </div>

                    {/* Bank Mandiri */}
                    <div style={{
                        background: 'rgba(255, 251, 251, 0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '20px',
                        padding: '30px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        flex: '1',
                        minWidth: '280px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#b99623ff', marginBottom: '5px' }}>
                            DANA
                        </h3>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#777', marginBottom: '15px' }}>
                            a.n. Saeful
                        </p>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 'bold', color: '#333', marginBottom: '20px', letterSpacing: '2px' }}>
                            085281257696
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCopy('0987654321', 'mandiri')}
                            style={{
                                background: copied === 'mandiri' ? '#8a9fd5ff' : '#f5c8c8ff',
                                color: copied === 'mandiri' ? '#fff' : 'var(--color-primary-dark)',
                                border: 'none',
                                padding: '10px 25px',
                                borderRadius: '25px',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                            }}
                        >
                            {copied === 'mandiri' ? 'Berhasil Disalin' : 'Salin No. Rekening'}
                        </motion.button>
                    </div>

                    {/* Kirim Hadiah Fisik */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '20px',
                        padding: '30px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        flex: '1',
                        minWidth: '280px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#b99623ff', marginBottom: '5px' }}>
                            Kirim Hadiah
                        </h3>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#777', marginBottom: '15px' }}>
                            Alamat Penerima: Winda & Saefullah
                        </p>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#333', marginBottom: '20px', lineHeight: '1.6' }}>
                            Kandang Manjangan, RT005/RW 003<br/>
                            Desa Sukajaya, Kec. Sajira<br/>
                            Kab. Lebak, Banten
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCopy('Kandang Manjangan, RT005/RW 003, Desa Sukajaya, Kec. Sajira, Kab. Lebak, Banten', 'alamat')}
                            style={{
                                background: copied === 'alamat' ? '#8a9fd5ff' : '#f5c8c8ff',
                                color: copied === 'alamat' ? '#fff' : 'var(--color-primary-dark)',
                                border: 'none',
                                padding: '10px 25px',
                                borderRadius: '25px',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                            }}
                        >
                            {copied === 'alamat' ? 'Berhasil Disalin' : 'Salin Alamat'}
                        </motion.button>
                    </div>
                </motion.div>

                {/* Konfirmasi WhatsApp */}
                <motion.a
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/6285281257696?text=Halo,%20saya%20sudah%20mengirimkan%20hadiah%20pernikahan%20untuk%20Saefullah%20%26%20Winda."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        marginTop: '50px',
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
                    Konfirmasi via WhatsApp
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

export default WeddingGiftPage;
