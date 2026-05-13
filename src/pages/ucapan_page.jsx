import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bg3 from '/images/bg_2.png';
import logo4 from '/images/logo_4.png';
import flower6 from '/images/flower_6.png';

const WISHES_BIN_ID = import.meta.env.VITE_WISHES_BIN_ID || '';
const WISHES_API_KEY = import.meta.env.VITE_WISHES_API_KEY || '';
const WISHES_API_URL = WISHES_BIN_ID ? `https://api.jsonbin.io/v3/b/${WISHES_BIN_ID}` : '';
const WISHES_API_LATEST_URL = WISHES_BIN_ID ? `${WISHES_API_URL}/latest` : '';

const getApiHeaders = () => {
    const headers = { 'Content-Type': 'application/json' };
    if (WISHES_API_KEY) {
        headers['X-Master-Key'] = WISHES_API_KEY;
    }
    return headers;
};

const normalizeWishes = (payload) => {
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.wishes)) return payload.wishes;
    if (Array.isArray(payload?.record?.wishes)) return payload.record.wishes;
    return [];
};

const UcapanPage = () => {
    const [wishes, setWishes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        nama: '',
        ucapan: '',
        kehadiran: 'hadir'
    });

    useEffect(() => {
        const fetchWishes = async () => {
            try {
                setErrorMessage('');
                if (!WISHES_API_URL) {
                    const savedWishes = localStorage.getItem('wedding_wishes');
                    setWishes(savedWishes ? JSON.parse(savedWishes) : []);
                    return;
                }

                const response = await fetch(WISHES_API_LATEST_URL, {
                    method: 'GET',
                    headers: getApiHeaders()
                });
                if (!response.ok) throw new Error('Gagal mengambil ucapan');

                const payload = await response.json();
                const publicWishes = normalizeWishes(payload);
                publicWishes.sort((a, b) => Number(b.id) - Number(a.id));
                setWishes(publicWishes);
            } catch (error) {
                const savedWishes = localStorage.getItem('wedding_wishes');
                setWishes(savedWishes ? JSON.parse(savedWishes) : []);
                setErrorMessage('Gagal memuat data publik. Menampilkan data lokal.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchWishes();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.nama || !formData.ucapan || isSubmitting) return;

        const newWish = {
            id: Date.now(),
            ...formData,
            timestamp: new Date().toLocaleString('id-ID')
        };

        try {
            setIsSubmitting(true);
            setErrorMessage('');

            if (!WISHES_API_URL) {
                const nextWishes = [newWish, ...wishes];
                setWishes(nextWishes);
                localStorage.setItem('wedding_wishes', JSON.stringify(nextWishes));
                setFormData({ nama: '', ucapan: '', kehadiran: 'hadir' });
                return;
            }

            const response = await fetch(WISHES_API_URL, {
                method: 'PUT',
                headers: getApiHeaders(),
                body: JSON.stringify({ wishes: [newWish, ...wishes] })
            });
            if (!response.ok) throw new Error('Gagal menyimpan ucapan');

            setWishes((prev) => [newWish, ...prev]);
            setFormData({ nama: '', ucapan: '', kehadiran: 'hadir' });
        } catch (error) {
            setErrorMessage('Ucapan belum tersimpan. Coba lagi.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const hadirCount = wishes.filter(w => w.kehadiran === 'hadir').length;
    const tidakHadirCount = wishes.filter(w => w.kehadiran === 'tidak').length;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
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
            id="ucapan"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${bg3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px 20px 100px 20px',
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
                style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '600px' }}
            >
                <motion.img loading="lazy" decoding="async"
                    src={logo4}
                    variants={itemVariants}
                    style={{ width: '120px', marginBottom: '5px' }}
                />

                <motion.h1
                    variants={itemVariants}
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                        color: '#b99623ff',
                        marginBottom: '10px'
                    }}
                >
                    Ucapan & Doa
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        color: '#666',
                        marginBottom: '30px'
                    }}
                >
                    Berikan ucapan selamat dan doa restu kepada kedua mempelai
                </motion.p>
                {errorMessage && (
                    <motion.p
                        variants={itemVariants}
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.8rem',
                            color: '#b35353',
                            marginBottom: '15px'
                        }}
                    >
                        {errorMessage}
                    </motion.p>
                )}

                {/* RSVP Stats */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        marginBottom: '30px'
                    }}
                >
                    <div style={{
                        background: 'rgba(251, 205, 205, 0.85)',
                        padding: '10px 20px',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        flex: 1
                    }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#b99623ff' }}>{hadirCount}</div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>Hadir</div>
                    </div>
                    <div style={{
                        background: 'rgba(251, 205, 205, 0.85)',
                        padding: '10px 20px',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        flex: 1
                    }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#666' }}>{tidakHadirCount}</div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>Tidak Hadir</div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.form
                    variants={itemVariants}
                    onSubmit={handleSubmit}
                    style={{
                        background: 'rgba(251, 205, 205, 0.85)',
                        backdropFilter: 'blur(10px)',
                        padding: '30px',
                        borderRadius: '25px',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        textAlign: 'left',
                        marginBottom: '40px'
                    }}
                >
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#555', marginBottom: '5px', fontWeight: '500' }}>Nama</label>
                        <input
                            type="text"
                            placeholder="Nama Lengkap"
                            value={formData.nama}
                            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px 15px',
                                borderRadius: '12px',
                                border: '1px solid rgba(0,0,0,0.1)',
                                background: 'rgba(255,255,255,0.9)',
                                outline: 'none',
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.9rem'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#555', marginBottom: '5px', fontWeight: '500' }}>Ucapan & Doa</label>
                        <textarea
                            placeholder="Tuliskan ucapan & doa..."
                            rows="4"
                            value={formData.ucapan}
                            onChange={(e) => setFormData({ ...formData, ucapan: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px 15px',
                                borderRadius: '12px',
                                border: '1px solid rgba(0,0,0,0.1)',
                                background: 'rgba(255,255,255,0.9)',
                                outline: 'none',
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.9rem',
                                resize: 'none'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#555', marginBottom: '8px', fontWeight: '500' }}>Konfirmasi Kehadiran</label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, kehadiran: 'hadir' })}
                                style={{
                                    flex: 1,
                                    padding: '10px',
                                    borderRadius: '10px',
                                    border: '1px solid',
                                    borderColor: formData.kehadiran === 'hadir' ? '#b99623ff' : 'rgba(0,0,0,0.1)',
                                    background: formData.kehadiran === 'hadir' ? 'rgb(229, 238, 241)' : 'rgba(217, 177, 177, 0.9)',
                                    color: formData.kehadiran === 'hadir' ? 'black' : '#666',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    transition: '0.3s'
                                }}
                            >
                                Hadir
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, kehadiran: 'tidak' })}
                                style={{
                                    flex: 1,
                                    padding: '10px',
                                    borderRadius: '10px',
                                    border: '1px solid',
                                    borderColor: formData.kehadiran === 'tidak' ? '#b99623ff' : 'rgba(0,0,0,0.1)',
                                    background: formData.kehadiran === 'tidak' ? 'rgb(229, 238, 241)' : 'rgba(217, 177, 177, 0.9)',
                                    color: formData.kehadiran === 'tidak' ? 'black' : '#666',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    transition: '0.3s'
                                }}
                            >
                                Tidak Hadir
                            </button>
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                            width: '100%',
                            padding: '14px',
                            borderRadius: '15px',
                            background: '#fff',
                            color: 'var(--color-primary-dark)',
                            fontWeight: 'bold',
                            border: 'none',
                            cursor: 'pointer',
                            opacity: isSubmitting ? 0.7 : 1,
                            fontSize: '0.95rem',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        {isSubmitting ? 'Menyimpan...' : 'Kirim Ucapan'}
                    </motion.button>
                </motion.form>

                {/* Wishes Feed */}
                <div style={{ width: '100%', textAlign: 'left' }}>
                    {isLoading && (
                        <p style={{ textAlign: 'center', color: '#999', fontStyle: 'italic', fontSize: '0.9rem' }}>
                            Memuat ucapan...
                        </p>
                    )}
                    <AnimatePresence>
                        {!isLoading && wishes.map((wish) => (
                            <motion.div
                                key={wish.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                style={{
                                    background: 'rgba(251, 205, 205, 0.85)',
                                    padding: '20px',
                                    borderRadius: '20px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <span style={{ fontWeight: 'bold', color: '#b99623ff', fontSize: '0.95rem' }}>{wish.nama}</span>
                                    <span style={{ 
                                        fontSize: '0.7rem', 
                                        background: wish.kehadiran === 'hadir' ? '#e8f5e9' : '#fff3e0',
                                        color: wish.kehadiran === 'hadir' ? '#2e7d32' : '#ef6c00',
                                        padding: '2px 8px',
                                        borderRadius: '10px',
                                        fontWeight: '500'
                                    }}>
                                        {wish.kehadiran === 'hadir' ? 'Hadir' : 'Absen'}
                                    </span>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: '1.6', marginBottom: '8px' }}>{wish.ucapan}</p>
                                <span style={{ fontSize: '0.7rem', color: '#999' }}>{wish.timestamp}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    
                    {wishes.length === 0 && (
                        <p style={{ textAlign: 'center', color: '#999', fontStyle: 'italic', fontSize: '0.9rem' }}>
                            Belum ada ucapan. Jadilah yang pertama memberikan doa!
                        </p>
                    )}
                </div>
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

export default UcapanPage;
