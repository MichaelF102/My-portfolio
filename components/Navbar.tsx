'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navItems.map(item => item.toLowerCase());
      let matched = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section is "active" when its top is at or above 80px (just below navbar)
          // and its bottom is still below 80px (section still visible)
          if (rect.top <= 80 && rect.bottom > 80) {
            matched = id.charAt(0).toUpperCase() + id.slice(1);
            break;
          }
        }
      }

      setActive(matched); // empty string when in Hero (no section matched)
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount

    // Smooth scroll to hash on page load (from another page like blog)
    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          const navbarHeight = 72;
          let marqueeOffset = 0;
          if (hashId === 'about' || hashId === 'contact') {
            const marquee = el.querySelector('.marquee-wrapper');
            if (marquee) {
              marqueeOffset = (marquee as HTMLElement).offsetHeight + 64;
            }
          }
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight + marqueeOffset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 250);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (section: string) => {
    setIsOpen(false);
    if (section === 'Certificates') {
      window.location.href = '/certifications';
      return;
    }

    let id = section.toLowerCase().replace(/\s+/g, '-');
    if (id === 'blogs') id = 'technical-content';

    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    const el = document.getElementById(id) || document.getElementById(section.toLowerCase());
    if (el) {
      const navbarHeight = 72;
      let marqueeOffset = 0;
      if (id === 'about' || id === 'contact' || id === 'technical-content') {
        const marquee = el.querySelector('.marquee-wrapper');
        if (marquee) {
          marqueeOffset = (marquee as HTMLElement).offsetHeight + 64;
        }
      }
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight + marqueeOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    } else if (section === 'Technical Content') {
      window.location.href = '/technical-content';
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: scrolled ? '3px solid #1a1a1a' : '3px solid transparent',
          background: scrolled ? '#f5f0e8' : 'transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
          {/* Logo — Slide from Top (0ms timeline) */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: -2, scale: 1.05 }}
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
                height: '42px',
                width: 'auto',
                border: '3px solid #1a1a1a',
                boxShadow: '4px 4px 0 #1a1a1a',
                borderRadius: '4px',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </motion.div>

          {/* Desktop Nav — Fade + Slide Down (150ms timeline) */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            style={{ display: 'flex', gap: '0.5rem' }}
            className="nav-desktop"
          >
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ y: 2 }}
                onClick={() => scrollTo(item)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  border: '2.5px solid #1a1a1a',
                  padding: '0.4rem 1rem',
                  cursor: 'pointer',
                  borderRadius: '3px',
                  background: active === item ? '#1a1a1a' : 'transparent',
                  color: active === item ? 'white' : '#1a1a1a',
                  boxShadow: active === item ? 'none' : '3px 3px 0 #1a1a1a',
                  transition: 'all 0.15s ease',
                }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="nav-hamburger"
            style={{
              display: 'none',
              border: '3px solid #1a1a1a',
              background: '#FFE135',
              boxShadow: '3px 3px 0 #1a1a1a',
              padding: '0.4rem 0.6rem',
              cursor: 'pointer',
              borderRadius: '3px',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: '22px', height: '2.5px', background: '#1a1a1a', borderRadius: '1px' }} />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: '1rem',
              right: '1rem',
              zIndex: 99,
              background: '#f5f0e8',
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0 #1a1a1a',
              borderRadius: '4px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  border: '2px solid #1a1a1a',
                  padding: '0.7rem 1rem',
                  cursor: 'pointer',
                  borderRadius: '3px',
                  background: active === item ? '#1a1a1a' : '#FFE135',
                  color: active === item ? 'white' : '#1a1a1a',
                  textAlign: 'left',
                }}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
