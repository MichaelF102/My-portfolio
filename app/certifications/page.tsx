'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { certificatesData } from '@/data/portfolio';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function CertificationsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e8', color: '#1a1a1a', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '7rem 1.5rem 5rem' }}>
        <div className="container">
          {/* Header row with back link */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <span className="neo-section-label">[ VERIFIED CREDENTIALS ]</span>
              <Link
                href="/#experience"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  background: '#FFE135',
                  border: '2.5px solid #1a1a1a',
                  boxShadow: '3px 3px 0 #1a1a1a',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.15s ease',
                }}
              >
                ← Back to Experience
              </Link>
            </div>

            <h1 className="neo-section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1 }}>
              Certifications
            </h1>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.9rem',
                color: '#555',
                marginTop: '0.75rem',
                maxWidth: '700px',
                lineHeight: 1.6,
              }}
            >
              Verified technical certificates in AWS Data Engineering, Machine Learning, Generative AI, Quantitative Finance, and Algorithmic Trading. Click any certificate to view full document.
            </p>
          </div>

          {/* Certifications Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {certificatesData.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -5 }}
                style={{
                  background: '#ffffff',
                  border: '3px solid #1a1a1a',
                  boxShadow: '6px 6px 0 #1a1a1a',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.15s ease, transform 0.15s ease',
                }}
              >
                {/* Certificate Preview Image */}
                <a
                  href={cert.pdfUrl || cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '220px',
                    background: '#1a1a1a',
                    borderBottom: '3px solid #1a1a1a',
                    display: 'block',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    className="cert-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(26,26,26,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        color: '#1a1a1a',
                        background: '#FFE135',
                        border: '2.5px solid #1a1a1a',
                        boxShadow: '3px 3px 0 #1a1a1a',
                        padding: '0.5rem 1rem',
                        borderRadius: '3px',
                      }}
                    >
                      🔍 View Full Certificate
                    </span>
                  </div>
                </a>

                {/* Card Info */}
                <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.05rem',
                        lineHeight: 1.4,
                        color: '#1a1a1a',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {cert.title}
                    </h3>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#1a1a1a',
                            background: 'rgba(0,0,0,0.04)',
                            border: '1.5px solid #1a1a1a',
                            padding: '0.15rem 0.45rem',
                            borderRadius: '2px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer date & link row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.75rem',
                      borderTop: '2px dashed #ccc',
                    }}
                  >
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: '#666', fontWeight: 600 }}>
                      {cert.date}
                    </span>

                    <a
                      href={cert.pdfUrl || cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        textDecoration: 'underline',
                      }}
                    >
                      View PDF →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Sub-navigation Bar */}
          <div
            style={{
              marginTop: '4rem',
              padding: '1.5rem',
              background: '#ffffff',
              border: '3px solid #1a1a1a',
              boxShadow: '5px 5px 0 #1a1a1a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <Link href="/#about" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}>
              About
            </Link>
            <span style={{ color: '#ccc' }}>•</span>
            <Link href="/#expertise" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}>
              Skills &amp; Expertise
            </Link>
            <span style={{ color: '#ccc' }}>•</span>
            <Link href="/#projects" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}>
              Projects
            </Link>
            <span style={{ color: '#ccc' }}>•</span>
            <Link href="/#experience" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}>
              Experience
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
