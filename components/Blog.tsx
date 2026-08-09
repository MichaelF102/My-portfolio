'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { technicalContentData, quantContentData } from '@/data/portfolio';

export default function Blog() {
  const [mainSection, setMainSection] = useState<'quant' | 'de'>('quant');

  const currentDataset = mainSection === 'quant' ? quantContentData : technicalContentData;
  const displayedItems = currentDataset.slice(0, 3);

  return (
    <section
      id="technical-content"
      style={{
        padding: '5rem 1.5rem',
        background: '#f5f0e8',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Marquee divider top */}
      <div className="marquee-wrapper" style={{ marginBottom: '4rem' }}>
        <div className="marquee-track">
          {Array(10)
            .fill('TECHNICAL CONTENT ✦ QUANT FINANCE ✦ DATA ENGINEERING ✦ ARCHITECTURE ✦ ')
            .map((t, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.2rem',
                  letterSpacing: '0.1em',
                  marginRight: '2rem',
                }}
              >
                {t}
              </span>
            ))}
        </div>
      </div>

      <div className="container">
        {/* Section header */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="neo-section-label">[ 05 — TECHNICAL CONTENT ]</span>
          <h2 className="neo-section-title" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
            Technical Content &amp; Carousels
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.88rem', color: '#555', marginTop: '0.5rem', margin: 0 }}>
            {mainSection === 'quant'
              ? 'Quantitative finance guides, option pricing models, HFT architecture, and volatility forecasting.'
              : 'Visual carousels, architecture deep dives, PySpark guides, and data engineering roadmaps.'}
          </p>
        </div>

        {/* Primary Two Button Selection: Quant Finance vs Data Engineering */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => setMainSection('quant')}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '1.05rem',
              letterSpacing: '0.02em',
              padding: '0.75rem 1.75rem',
              background: mainSection === 'quant' ? '#FFE135' : '#ffffff',
              color: '#1a1a1a',
              border: '3.5px solid #1a1a1a',
              boxShadow: mainSection === 'quant' ? '5px 5px 0 #1a1a1a' : '3px 3px 0 #1a1a1a',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            📊 Quant Finance ({quantContentData.length})
          </button>

          <button
            onClick={() => setMainSection('de')}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '1.05rem',
              letterSpacing: '0.02em',
              padding: '0.75rem 1.75rem',
              background: mainSection === 'de' ? '#4ECDC4' : '#ffffff',
              color: '#1a1a1a',
              border: '3.5px solid #1a1a1a',
              boxShadow: mainSection === 'de' ? '5px 5px 0 #1a1a1a' : '3px 3px 0 #1a1a1a',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            ⚙️ Data Engineering ({technicalContentData.length})
          </button>
        </div>

        {/* Grid of Featured Technical Carousels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
          }}
        >
          {displayedItems.map((item) => (
            <motion.article
              key={item.id}
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
              {/* Cover Image */}
              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '210px',
                  background: '#1a1a1a',
                  borderBottom: '3px solid #1a1a1a',
                  display: 'block',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </a>

              {/* Card Body */}
              <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        background: item.color,
                        color: '#1a1a1a',
                        padding: '0.15rem 0.5rem',
                        border: '1.5px solid #1a1a1a',
                        borderRadius: '2px',
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        margin: '0 0 0.5rem 0',
                        lineHeight: 1.3,
                        cursor: 'pointer',
                      }}
                    >
                      {item.title}
                    </h3>
                  </a>

                  <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: '#555', margin: '0 0 1rem 0' }}>
                    {item.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.75rem',
                    borderTop: '2px dashed #ddd',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          color: '#555',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.pdfUrl}
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
                    Read PDF →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All 25 Carousels Button below cards grid */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link
            href="/technical-content"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              border: '3px solid #1a1a1a',
              padding: '0.85rem 2.2rem',
              color: '#1a1a1a',
              background: '#FFE135',
              borderRadius: '4px',
              boxShadow: '5px 5px 0 #1a1a1a',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.15s ease',
            }}
          >
            📚 View All Carousels →
          </Link>
        </div>
      </div>
    </section>
  );
}
