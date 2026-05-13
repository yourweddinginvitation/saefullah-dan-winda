import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const bg1 = '/images/bg_1.png';

const WatermakPage = () => {
  return (
    <footer
      id="watermark"
      style={{
        padding: '14px 16px 88px',
        textAlign: 'center',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.9)), url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderTop: '1px solid rgba(181, 149, 47, 0.25)'
      }}
    >
      <p
        style={{
          margin: 0
          ,
          fontFamily: 'var(--font-sans)',
          fontSize: '0.68rem',
          letterSpacing: '0.5px',
          color: 'rgba(51, 51, 51, 0.75)'
        }}
      >
        Designed with love by sofiarianti
      </p>
      <div
        style={{
          marginTop: '8px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <a
          href="https://www.instagram.com/sspiiayy__?igsh=MTliYXd1bWFiNDN2dQ=="
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            fontSize: '0.72rem',
            color: '#5a4a2d'
          }}
        >
          <FaInstagram size={14} />
          <span>@sspiiayy__</span>
        </a>
        <a
          href="https://wa.me/6285693842771"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            fontSize: '0.72rem',
            color: '#1e7f43'
          }}
        >
          <FaWhatsapp size={14} />
          <span>085693842771</span>
        </a>
      </div>
    </footer>
  );
};

export default WatermakPage;
