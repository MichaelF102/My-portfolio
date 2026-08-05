'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/MichaelF102', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, href: 'https://in.linkedin.com/in/michael-fernandes-7a3b6227a', label: 'LinkedIn' },
    { icon: <FaEnvelope size={20} />, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=michaelferns3210@gmail.com', label: 'Email' },
  ];

  return (
    <footer style={{
      background: '#1a1a1a',
      color: 'white',
      borderTop: '4px solid #FFE135',
      padding: '2.5rem 1.5rem',
    }}>
      <div className="container footer-inner" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        {/* Left Column: Brand Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', flex: '1 1 200px' }}>
          <div
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/images/logo.jpg"
              alt="Logo"
              style={{
                height: '38px',
                width: 'auto',
                border: '2.5px solid #FFE135',
                boxShadow: '3px 3px 0 #FFE135',
                borderRadius: '4px',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </div>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', color: '#aaa' }}>
            Michael Fernandes © {year}
          </span>
        </div>

        {/* Center Column: Social Icons */}
        <div className="footer-links" style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1 1 200px',
        }}>
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: '#aaa',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#FFE135';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#aaa';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Right Column: Spacer to prevent overlap with floating ScrollToTop button */}
        <div className="footer-spacer" style={{ flex: '1 1 200px' }}></div>
      </div>
    </footer>
  );
}
