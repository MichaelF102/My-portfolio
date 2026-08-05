'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExpertiseCardAnimation from '@/components/ExpertiseCardAnimation';
import { expertiseData, skills } from '@/data/portfolio';

// Skill Emoji map
const SKILL_EMOJIS: Record<string, string> = {
  // Programming Languages
  Python: '🐍',
  SQL: '🗄️',
  R: '📊',
  Java: '☕',
  JavaScript: '⚡',
  'C++': '⚙️',
  Bash: '🐚',
  // Data Science
  Pandas: '🐼',
  NumPy: '🔢',
  'Scikit-learn': '🤖',
  TensorFlow: '🧠',
  Keras: '🔮',
  XGBoost: '🚀',
  LightGBM: '⚡',
  Optuna: '🎯',
  SciPy: '🔬',
  Statsmodels: '📉',
  Matplotlib: '📊',
  Plotly: '📈',
  Seaborn: '🎨',
  // Data Engineering
  'Apache Spark': '⚡',
  'Apache Hadoop': '🐘',
  PySpark: '🔥',
  'Apache Kafka': '🔄',
  'Apache Airflow': '🌀',
  dbt: '🛠️',
  'Delta Lake': '🌊',
  'Apache Iceberg': '🧊',
  'Data Warehousing': '🏢',
  'Data Lakehouse': '🏞️',
  MongoDB: '🍃',
  PostgreSQL: '🐘',
  Snowflake: '🐬',
  Databricks: '🪶',
  // Quantitative Finance
  'Time Series Forecasting': '📉',
  'Portfolio Optimization': '💼',
  'Risk Analytics': '🛡️',
  Backtesting: '⏱️',
  'Algorithmic Trading': '🤖',
  'Quantitative Research': '📊',
  'Factor Investing': '📐',
  'Hidden Markov Models (HMM)': '⛓️',
  'Monte Carlo Simulation': '🎲',
  'Financial Econometrics': '🏛️',
  'Volatility Modeling': '📈',
  'Statistical Arbitrage': '⚖️',
  // Data Analytics
  'Power BI': '📊',
  Tableau: '🖼️',
  Streamlit: '🚀',
  Excel: '🟢',
  'Exploratory Data Analysis': '🔍',
  'Feature Engineering': '⚙️',
  'Data Cleaning': '🧹',
  'Data Visualization': '📈',
  'Statistical Analysis': '📐',
  'Dashboard Development': '🖥️',
  // Cloud Computing
  'Amazon S3': '🪣',
  'Amazon EC2': '💻',
  'AWS Lambda': '⚡',
  'AWS Glue': '🧩',
  'Amazon Redshift': '🔴',
  'Amazon RDS': '🗄️',
  'Amazon Athena': '🔍',
  'AWS IAM': '🔑',
  CloudWatch: '👁️',
  // Developer Tools
  Git: '🌿',
  GitHub: '🐙',
  Docker: '🐳',
  'Jupyter Notebook': '🪐',
  'VS Code': '💙',
  Linux: '🐧',
  'GitHub Actions': '🔄',
};

const CATEGORY_EMOJIS: Record<string, string> = {
  'Programming Languages': '💻',
  'Data Science': '🧠',
  'Data Engineering': '⚙️',
  'Quantitative Finance': '📈',
  'Data Analytics': '📊',
  'Cloud Computing (AWS)': '☁️',
  'Developer Tools': '🛠️',
};

const CATEGORY_COLORS: Record<string, string> = {
  'Programming Languages': '#FFE135',
  'Data Science': '#FF6B9D',
  'Data Engineering': '#4ECDC4',
  'Quantitative Finance': '#FF6B35',
  'Data Analytics': '#95E06C',
  'Cloud Computing (AWS)': '#C77DFF',
  'Developer Tools': '#38B6FF',
};

const TABS = [
  'All',
  'Data Science',
  'Data Engineering',
  'Quantitative Finance',
  'Data Analytics',
  'Programming Languages',
  'Cloud Computing',
  'Developer Tools',
];

export default function Expertise() {
  const [activeTab, setActiveTab] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredSkills =
    activeTab === 'All'
      ? skills
      : skills.filter((item) =>
        activeTab === 'Cloud Computing'
          ? item.title.startsWith('Cloud Computing')
          : item.title === activeTab
      );

  // If 'All' is selected and collapsed, show only Programming Languages and Data Science
  const displayedSkills =
    activeTab === 'All' && !isExpanded
      ? filteredSkills.filter(
          (item) => item.title === 'Programming Languages' || item.title === 'Data Science'
        )
      : filteredSkills;

  return (
    <section id="expertise" style={{ padding: '5rem 1.5rem', background: '#f5f0e8', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section header */}
        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="neo-section-label">[ 02 — EXPERTISE ]</span>
            <h2 className="neo-section-title" style={{ marginTop: '0.5rem' }}>What I Do</h2>
          </div>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.85rem',
              fontWeight: 600,
              border: '2.5px solid #1a1a1a',
              padding: '0.4rem 0.8rem',
              background: '#FFE135',
              boxShadow: '3px 3px 0 #1a1a1a',
              transform: 'rotate(-1deg)',
            }}
          >
            Building the future ✦
          </div>
        </div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full overflow-visible">
          {expertiseData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`group neo-card p-5 sm:p-6 flex flex-col w-full ${item.cls}`}
              style={{
                cursor: 'default',
              }}
            >
              {/* Animation container at the top */}
              <div className="mb-6 h-[130px] w-full border-2 border-neo-border neo-panel overflow-hidden relative shadow-neo-sm crt-screen" data-cursor-text="LIVE TELEMETRY">
                <ExpertiseCardAnimation
                  index={idx}
                  title={item.title}
                  animationType={item.animationType}
                />
              </div>

              {/* Title Badge row */}
              <div className="card-top mb-4 mt-2">
                <span className="card-cat font-extrabold">{item.title}</span>
              </div>

              {/* Description */}
              <p className="text-sm font-semibold text-[color:var(--neo-ink-soft)] leading-relaxed flex-grow text-justify">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── SKILLS TABS SECTION ── */}
        <div id="skills-section-header" style={{ marginTop: '4.5rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="neo-section-label">[ TECHNICAL SKILLSET ]</span>
            <h3 className="neo-section-title" style={{ marginTop: '0.4rem', fontSize: '2rem' }}>
              Skills &amp; Tooling
            </h3>
          </div>

          {/* Tabs row matching neo-brutalist image */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '2rem',
              alignItems: 'center',
            }}
          >
            {TABS.map((tab) => {
              const isActive =
                activeTab === tab ||
                (tab === 'Cloud Computing' && activeTab === 'Cloud Computing (AWS)');
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab === 'Cloud Computing' ? 'Cloud Computing (AWS)' : tab);
                    if (tab !== 'All') {
                      setIsExpanded(true);
                    }
                  }}
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

          {/* Skills Grid Display */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <AnimatePresence mode="wait">
              {displayedSkills.map((catGroup) => {
                const catColor = CATEGORY_COLORS[catGroup.title] || '#FFE135';
                const catEmoji = CATEGORY_EMOJIS[catGroup.title] || '⚡';

                return (
                  <motion.div
                    key={catGroup.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      background: '#ffffff',
                      border: '3px solid #1a1a1a',
                      boxShadow: '5px 5px 0 #1a1a1a',
                      borderRadius: '6px',
                      padding: '1.25rem 1.5rem',
                    }}
                  >
                    {/* Category Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '1rem',
                        paddingBottom: '0.6rem',
                        borderBottom: '2.5px solid #1a1a1a',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ fontSize: '1.25rem' }}>{catEmoji}</span>
                        <h4
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 800,
                            fontSize: '1.1rem',
                            color: '#1a1a1a',
                            margin: 0,
                          }}
                        >
                          {catGroup.title}
                        </h4>
                      </div>
                      <span
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          background: catColor,
                          color: '#1a1a1a',
                          padding: '0.2rem 0.6rem',
                          border: '2px solid #1a1a1a',
                          boxShadow: '2px 2px 0 #1a1a1a',
                          borderRadius: '3px',
                        }}
                      >
                        {catGroup.skills.length} Skills
                      </span>
                    </div>

                    {/* Skill Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                      {catGroup.skills.map((skillName) => {
                        const emoji = SKILL_EMOJIS[skillName] || '⚡';
                        return (
                          <motion.div
                            key={skillName}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.45rem',
                              fontFamily: "'IBM Plex Mono', monospace",
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              color: '#1a1a1a',
                              background: '#f8f5ee',
                              border: '2px solid #1a1a1a',
                              boxShadow: '2.5px 2.5px 0 #1a1a1a',
                              padding: '0.45rem 0.8rem',
                              borderRadius: '3px',
                              cursor: 'default',
                              transition: 'background 0.15s ease',
                            }}
                          >
                            <span style={{ fontSize: '0.95rem' }}>{emoji}</span>
                            <span>{skillName}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Expand / Collapse Button (Only shown when 'All' tab is selected) */}
          {activeTab === 'All' && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                onClick={() => {
                  if (isExpanded) {
                    setIsExpanded(false);
                    const el = document.getElementById('skills-section-header');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  } else {
                    setIsExpanded(true);
                  }
                }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '0.75rem 2rem',
                  background: isExpanded ? '#ffffff' : '#FFE135',
                  color: '#1a1a1a',
                  border: '3px solid #1a1a1a',
                  boxShadow: '4px 4px 0 #1a1a1a',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translate(-2px, -2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0 #1a1a1a';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translate(0, 0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0 #1a1a1a';
                }}
              >
                {isExpanded ? '☝️ Show Less (Collapse)' : `⚡ Show All Skills & Tooling (${skills.length} Categories) 👇`}
              </button>
            </div>
          )}
        </div>

        {/* Bottom marquee */}
        <div style={{ marginTop: '3.5rem' }}>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {Array(8).fill(null).flatMap(() =>
                expertiseData.map((item) => (
                  <span key={Math.random()} style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginRight: '2rem',
                    opacity: 0.8,
                  }}>
                    ★ {item.title}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
