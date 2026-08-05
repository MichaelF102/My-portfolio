'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/portfolio';
import { getTechIcon } from '@/components/TechIcon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const CATEGORIES = [
  'All',
  'Data Science',
  'Data Analytics',
  'Data Engineering',
  'Quant Finance',
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e8', color: '#1a1a1a', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '7rem 1.5rem 5rem' }}>
        <div className="container">
          {/* Header row with back link */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <span className="neo-section-label">[ PORTFOLIO PROJECTS ]</span>
              <Link
                href="/#projects"
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
              All Projects ({projectsData.length})
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
              Note:If the Live Streamlit App Shows Error, it can Be Due to API Rate Limit Error. Please Clone the repository and run it on your local machine.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '2.5rem',
              alignItems: 'center',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
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
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    border: '3px solid #1a1a1a',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    background: '#fff',
                    boxShadow: hovered === idx ? '8px 8px 0 #1a1a1a' : '5px 5px 0 #1a1a1a',
                    transform: hovered === idx ? 'translate(-3px, -3px)' : 'translate(0, 0)',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Top Header Card Image Area */}
                  <div style={{ position: 'relative', height: '170px', overflow: 'hidden', borderBottom: '3px solid #1a1a1a', background: project.color }}>
                    {/* Grid Pattern */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                      opacity: 0.5,
                    }} />

                    {/* Telemetry SYS ID */}
                    <div style={{
                      position: 'absolute',
                      top: '0.6rem',
                      right: '0.6rem',
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.62rem',
                      color: 'rgba(0,0,0,0.5)',
                      fontWeight: 700,
                    }}>
                      SYS_ID // 00{project.id}
                    </div>

                    {/* Category Emoji */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4.2rem',
                    }}>
                      {project.category === 'Quant Finance' && '📈'}
                      {project.category === 'Data Science' && '🧠'}
                      {project.category === 'Data Analytics' && '📊'}
                      {project.category === 'Data Engineering' && '⚙️'}
                    </div>

                    {/* Category badge */}
                    <div style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      background: '#1a1a1a',
                      color: project.color,
                      border: '2px solid #1a1a1a',
                      padding: '0.2rem 0.6rem',
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      borderRadius: '2px',
                      letterSpacing: '0.05em',
                    }}>{project.category}</div>
                  </div>

                  {/* Content body */}
                  <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                        {project.title}
                      </h3>
                      <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.1rem' }}>
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                        {project.tech.map((t) => {
                          const icon = getTechIcon(t);
                          return (
                            <span key={t} style={{
                              fontFamily: "'IBM Plex Mono', monospace",
                              fontSize: '0.7rem',
                              border: '1.5px solid #1a1a1a',
                              padding: '0.15rem 0.45rem',
                              background: project.color,
                              fontWeight: 600,
                              borderRadius: '2px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                            }}>
                              {icon && <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.75rem' }}>{icon}</span>}
                              {t}
                            </span>
                          );
                        })}
                      </div>

                      {/* Action Links */}
                      <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: '0.82rem',
                              fontWeight: 700,
                              color: '#1a1a1a',
                              background: project.color,
                              border: '2px solid #1a1a1a',
                              boxShadow: '2px 2px 0 #1a1a1a',
                              padding: '0.3rem 0.75rem',
                              borderRadius: '3px',
                              textDecoration: 'none',
                            }}
                          >
                            Live Demo 🚀
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: '0.82rem',
                              fontWeight: 700,
                              color: '#1a1a1a',
                              background: '#fff',
                              border: '2px solid #1a1a1a',
                              boxShadow: '2px 2px 0 #1a1a1a',
                              padding: '0.3rem 0.75rem',
                              borderRadius: '3px',
                              textDecoration: 'none',
                            }}
                          >
                            GitHub 💻
                          </a>
                        )}
                      </div>
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
            <Link href="/certifications" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}>
              Certifications
            </Link>
            <span style={{ color: '#ccc' }}>•</span>
            <Link href="/technical-content" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}>
              Technical Content
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
