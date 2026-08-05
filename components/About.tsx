'use client';

import { motion } from 'framer-motion';
import { educationData, extracurricularData, careerInterests, personalQuote } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 1.5rem', background: '#faf7f0', position: 'relative', overflow: 'hidden' }}>
      {/* Marquee divider top */}
      <div className="marquee-wrapper" style={{ marginBottom: '4rem' }}>
        <div className="marquee-track">
          {Array(10)
            .fill('ABOUT ME ★ Michael Fernandes ★ DATA ANALYST ★ QUANT DEV ★ ')
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
        <div style={{ marginBottom: '3rem' }}>
          <span className="neo-section-label">[ 01 — ABOUT ]</span>
          <h2 className="neo-section-title" style={{ marginTop: '0.5rem' }}>
            Who Am I?
          </h2>
        </div>

        {/* Top Card: Main Bio Overview */}
        <div
          className="neo-card"
          style={{
            borderLeft: '6px solid #FFE135',
            padding: '2.25rem',
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', letterSpacing: '0.05em', color: '#1a1a1a', margin: 0 }}>
            About Me
          </h3>
          <p style={{ fontSize: '0.98rem', lineHeight: '1.8', color: '#333', textAlign: 'justify', margin: 0 }}>
            Passionate about building data-intensive systems and quantitative solutions for financial markets, I am currently pursuing an M.Sc. in Big Data Analytics at St. Xavier's College, Mumbai. My work combines data engineering, machine learning, and quantitative finance to develop scalable, data-driven solutions for real-world analytical challenges.
          </p>
          <p style={{ fontSize: '0.98rem', lineHeight: '1.8', color: '#333', textAlign: 'justify', margin: 0 }}>
            My interests lie at the intersection of Quantitative Development, Data Engineering, Financial Analytics, and Algorithmic Trading. I enjoy designing robust ETL pipelines, building cloud-native data platforms, developing machine learning applications, and creating quantitative models that transform complex financial and business data into actionable insights.
          </p>
          <p style={{ fontSize: '0.98rem', lineHeight: '1.8', color: '#333', textAlign: 'justify', margin: 0 }}>
            I am particularly interested in learning end-to-end data products—from data ingestion and engineering to predictive modeling, visualization, and deployment—while following modern data engineering and MLOps best practices.
          </p>
          <p style={{ fontSize: '0.98rem', lineHeight: '1.8', color: '#333', textAlign: 'justify', margin: 0 }}>
            Beyond technical development, I actively contribute to the data community by creating educational content, technical publications, and hands-on projects that simplify complex concepts in data engineering, data science, and quantitative finance. I believe that sharing practical knowledge is one of the best ways to foster learning and inspire others to build impactful, data-driven solutions.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#555', fontFamily: "'IBM Plex Mono', monospace", margin: 0 }}>
            💡 <em>Interests in  Finance, Technology, Geopolitics, AI, and Quantum Computing.</em>
          </p>


        </div>

        {/* 2-Column Grid: Education & Roles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>

          {/* Education Card */}
          <div className="neo-card" style={{ padding: '1.75rem', background: '#fff', borderLeft: '6px solid #4ECDC4' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.4rem' }}>🎓</span>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', letterSpacing: '0.05em', color: '#1a1a1a', margin: 0 }}>
                Education
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {educationData.map((edu, idx) => (
                <div key={idx} style={{ borderBottom: idx < educationData.length - 1 ? '1.5px dashed #ccc' : 'none', paddingBottom: idx < educationData.length - 1 ? '1rem' : 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a' }}>{edu.institution}</div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem', color: '#4ECDC4', fontWeight: 600, marginTop: '0.2rem' }}>{edu.degree}</div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', color: '#777', marginTop: '0.2rem' }}>{edu.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Roles / Extracurricular Card */}
          <div className="neo-card" style={{ padding: '1.75rem', background: '#fff', borderLeft: '6px solid #FF6B9D' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.4rem' }}>🚀</span>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', letterSpacing: '0.05em', color: '#1a1a1a', margin: 0 }}>
                Positions &amp; Roles
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {extracurricularData.map((item, idx) => (
                <div key={idx} style={{ borderBottom: idx < extracurricularData.length - 1 ? '1.5px dashed #ccc' : 'none', paddingBottom: idx < extracurricularData.length - 1 ? '1rem' : 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a' }}>{item.organization}</div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem', color: '#FF6B9D', fontWeight: 600, marginTop: '0.2rem' }}>{item.role}</div>
                  <ul style={{ margin: '0.4rem 0 0 1.1rem', padding: 0, fontSize: '0.85rem', color: '#555', lineHeight: 1.5 }}>
                    {item.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Career Interests Card */}
        <div className="neo-card" style={{ padding: '1.75rem', background: '#fff', borderLeft: '6px solid #C77DFF', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.4rem' }}>💼</span>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', letterSpacing: '0.05em', color: '#1a1a1a', margin: 0 }}>
              Career Interests
            </h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {careerInterests.map((interest) => (
              <span
                key={interest}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  border: '2px solid #1a1a1a',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '20px',
                  background: '#faf7f0',
                  color: '#1a1a1a',
                  boxShadow: '2px 2px 0 #1a1a1a',
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Personal Quote Card */}
        <div
          className="neo-card"
          style={{
            padding: '1.5rem 2rem',
            background: '#1a1a1a',
            color: '#FFE135',
            border: '3px solid #1a1a1a',
            boxShadow: '5px 5px 0 #1a1a1a',
            textAlign: 'center',
            borderRadius: '4px',
          }}
        >
          <blockquote style={{ margin: 0, fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.7 }}>
            &ldquo;{personalQuote}&rdquo;
          </blockquote>
        </div>

      </div>
    </section>
  );
}
