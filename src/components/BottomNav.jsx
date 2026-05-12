import React, { useState, useEffect } from 'react';
import { FaHome, FaHeart, FaMapMarkedAlt, FaGift, FaCommentDots } from 'react-icons/fa';

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = ['home', 'surat', 'couple', 'save-the-date', 'maps', 'gift', 'ucapan'];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '20px',
      padding: '12px 25px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRadius: '40px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      border: '1px solid rgba(255, 255, 255, 0.5)',
      width: 'max-content',
      maxWidth: '90vw'
    }}>
      <button 
        onClick={() => scrollToSection('home')}
        style={{
          background: 'none',
          color: activeSection === 'home' ? 'var(--color-primary)' : '#aaa',
          fontSize: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'color 0.3s ease',
          transform: activeSection === 'home' ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <FaHome />
      </button>

      <button 
        onClick={() => scrollToSection('couple')}
        style={{
          background: 'none',
          color: activeSection === 'couple' ? 'var(--color-primary)' : '#aaa',
          fontSize: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'color 0.3s ease',
          transform: activeSection === 'couple' ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <FaHeart />
      </button>

      <button 
        onClick={() => scrollToSection('maps')}
        style={{
          background: 'none',
          color: activeSection === 'maps' ? 'var(--color-primary)' : '#aaa',
          fontSize: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'color 0.3s ease',
          transform: activeSection === 'maps' ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <FaMapMarkedAlt />
      </button>

      <button 
        onClick={() => scrollToSection('gift')}
        style={{
          background: 'none',
          color: activeSection === 'gift' ? 'var(--color-primary)' : '#aaa',
          fontSize: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'color 0.3s ease',
          transform: activeSection === 'gift' ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <FaGift />
      </button>

      <button 
        onClick={() => scrollToSection('ucapan')}
        style={{
          background: 'none',
          color: activeSection === 'ucapan' ? 'var(--color-primary)' : '#aaa',
          fontSize: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'color 0.3s ease',
          transform: activeSection === 'ucapan' ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <FaCommentDots />
      </button>
    </div>
  );
};

export default BottomNav;
