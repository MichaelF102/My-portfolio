'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { technicalContentData, quantContentData } from '@/data/portfolio';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const DE_TABS = [
  'All',
  'Data Engineering',
  'PySpark & Spark',
  'SQL & Databases',
  'Cloud & Lakehouse',
  'AI & LLMs',
  'Quantitative & Quantum',
];

const QUANT_TABS = [
  'All',
  'Quant Research',
  'Options & Derivatives',
  'Stochastic & Risk',
  'HFT & Microstructure',
  'Trading Strategies',
  'Quant Tech & C++',
  'Portfolio & Alpha',
  'Career & Guides',
  'Quant Ecosystem',
];

export default function TechnicalContentPage() {
  const [mainSection, setMainSection] = useState<'quant' | 'de'>('quant');
  const [activeTab, setActiveTab] = useState('All');

  const currentDataset = mainSection === 'quant' ? quantContentData : technicalContentData;
  const currentTabs = mainSection === 'quant' ? QUANT_TABS : DE_TABS;

  const filteredItems =
    activeTab === 'All'
      ? currentDataset
      : currentDataset.filter((item) => item.category === activeTab);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e8', color: '#1a1a1a', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '7rem 1.5rem 5rem' }}>
        <div className="container">
          {/* Header row with back link */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <span className="neo-section-label">[ TECHNICAL CAROUSELS &amp; WRITINGS ]</span>
              <Link
                href="/#technical-content"
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
                ← Back to Home
              </Link>
            </div>

            <h1 className="neo-section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1 }}>
              Technical Content
            </h1>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.88rem',
                color: '#555',
                marginTop: '0.75rem',
                maxWidth: '780px',
                lineHeight: 1.6,
              }}
            >
              {mainSection === 'quant'
                ? 'Quantitative finance guides, options pricing, stochastic volatility modeling, high-frequency trading architecture, and statistical arbitrage masterclasses. Click any carousel card to read full PDF guide.'
                : 'Visual architecture carousels, PySpark optimization guides, SQL masterclasses, and data engineering roadmaps. Click any carousel card to read full PDF guide.'}
            </p>
          </div>

          {/* Primary Two Button Selection: Quant Finance vs Data Engineering */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <button
              onClick={() => {
                setMainSection('quant');
                setActiveTab('All');
              }}
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
              onClick={() => {
                setMainSection('de');
                setActiveTab('All');
              }}
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

          {/* Filter Sub-Tabs matching Neo-Brutalist design */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '2.5rem',
              alignItems: 'center',
            }}
          >
            {currentTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    padding: '0.55rem 1.25rem',
                    background: isActive ? '#1a1a1a' : '#ffffff',
                    color: isActive ? '#FFE135' : '#1a1a1a',
                    border: '2.5px solid #1a1a1a',
                    boxShadow: '3.5px 3.5px 0 #1a1a1a',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    outline: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.background = '#FFE135';
                      (e.currentTarget as HTMLElement).style.transform = 'translate(-2px, -2px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0 #1a1a1a';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.background = '#ffffff';
                      (e.currentTarget as HTMLElement).style.transform = 'translate(0, 0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '3.5px 3.5px 0 #1a1a1a';
                    }
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Technical Content Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
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
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div
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
                        📖 Read Carousel PDF
                      </span>
                    </div>
                  </a>

                  {/* Card Details */}
                  <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
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
                            fontWeight: 800,
                            fontSize: '1.1rem',
                            lineHeight: 1.35,
                            color: '#1a1a1a',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {item.title}
                        </h3>
                      </a>

                      <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: '#555', margin: '0 0 1rem 0' }}>
                        {item.description}
                      </p>

                      {/* Hashtags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: "'IBM Plex Mono', monospace",
                              fontSize: '0.68rem',
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

                    {/* Action Footer */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '0.75rem',
                        borderTop: '2px dashed #ccc',
                      }}
                    >
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', color: '#666', fontWeight: 600 }}>
                        Visual PDF Carousel
                      </span>

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
                </motion.div>
              ))}
            </AnimatePresence>
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
            <Link href="/certifications" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}>
              Certifications
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
