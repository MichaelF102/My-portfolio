'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/portfolio';
import { getTechIcon } from './TechIcon';

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  // Preview 3 featured projects on homepage
  const displayedProjects = projectsData.slice(9, 12);

  return (
    <section id="projects" style={{ padding: '5rem 1.5rem', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background text */}
      <div style={{
        position: 'absolute',
        bottom: '-2rem',
        right: '-1rem',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(6rem, 15vw, 14rem)',
        color: 'rgba(0,0,0,0.04)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '0.05em',
      }}>PROJECTS</div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header row with View All Projects link */}
        <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="neo-section-label">[ 03 — PROJECTS ]</span>
            <h2 className="neo-section-title" style={{ marginTop: '0.5rem', marginBottom: 0 }}>What I Built</h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.88rem', color: '#555', marginTop: '0.4rem', margin: 0 }}>
              Quantitative investment platforms, ML engines, and data applications.
            </p>
          </div>

          <Link
            href="/projects"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '0.9rem',
              border: '2.5px solid #1a1a1a',
              padding: '0.6rem 1.4rem',
              color: '#1a1a1a',
              background: '#FFE135',
              borderRadius: '4px',
              boxShadow: '4px 4px 0 #1a1a1a',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.15s ease',
            }}
          >
            🚀 View All {projectsData.length} Projects →
          </Link>
        </div>

        {/* Projects grid (3 featured projects preview) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
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
              {/* Header card image area */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden', borderBottom: '3px solid #1a1a1a', background: project.color }}>
                {/* Project Image */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                ) : (
                  <>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                      opacity: 0.5,
                    }} />
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
                  </>
                )}

                {/* Telemetry mark */}
                <div style={{
                  position: 'absolute',
                  top: '0.6rem',
                  right: '0.6rem',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.62rem',
                  color: '#ffffff',
                  background: '#1a1a1a',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '3px',
                  border: '1.5px solid #1a1a1a',
                  fontWeight: 700,
                  zIndex: 2,
                  boxShadow: '1.5px 1.5px 0 rgba(0,0,0,0.2)',
                }}>
                  SYS_ID // 00{project.id}
                </div>

                {/* Category badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.6rem',
                  left: '0.6rem',
                  background: '#1a1a1a',
                  color: project.color,
                  border: '2px solid #1a1a1a',
                  padding: '0.2rem 0.6rem',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  borderRadius: '3px',
                  letterSpacing: '0.05em',
                  zIndex: 2,
                  boxShadow: '2px 2px 0 rgba(0,0,0,0.2)',
                }}>{project.category}</div>
              </div>

              {/* Content body */}
              <div style={{ padding: '1.3rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                    {project.tech.map(t => {
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

                  {/* Action links */}
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
        </div>

        {/* Bottom CTA to view all projects */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <Link
            href="/projects"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              border: '3px solid #1a1a1a',
              padding: '0.8rem 2rem',
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
            🚀 View All {projectsData.length} Projects &amp; Demos →
          </Link>
        </div>
      </div>
    </section>
  );
}
