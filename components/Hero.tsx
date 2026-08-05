'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const roles = ['Data Science', 'Quantitative Analyst', 'Data Engineer', 'Quant Developer', 'AI Engineer'];

function CustomTypewriter({
  words,
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 2000,
  startDelay = 1100,
}: {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  startDelay?: number;
}) {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!isStarted) return;

    let timer: NodeJS.Timeout;
    const currentWord = words[currentWordIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }, typeSpeed);
    }

    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delaySpeed);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, words, typeSpeed, deleteSpeed, delaySpeed, isStarted]);

  return (
    <span>
      {currentText}
      <span className="typewriter-cursor">_</span>
      <style jsx>{`
        .typewriter-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from,
          to {
            color: transparent;
          }
          50% {
            color: inherit;
          }
        }
      `}</style>
    </span>
  );
}

// ───── Magnetic Wrapper ─────
function MagneticWrapper({
  children,
  strength = 0.3,
  className = '',
  style = {},
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 14, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 200, damping: 14, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        x: springX,
        y: springY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ───── Name Block Reveal Component (██████████ -> MICHAEL / FERNANDES) ─────
function BlockRevealName({
  text,
  highlight = false,
  delay = 0.6,
}: {
  text: string;
  highlight?: boolean;
  delay?: number;
}) {
  return (
    <div style={{ position: 'relative', display: 'inline-block', overflow: 'visible', verticalAlign: 'middle' }}>
      {/* Target text with scale 0.95 -> 1.0 bounce */}
      <motion.span
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: delay + 0.2,
          duration: 0.5,
          type: 'spring',
          stiffness: 220,
          damping: 12,
        }}
        style={{
          display: 'inline-block',
          ...(highlight
            ? {
                background: '#FFE135',
                border: '4px solid #1a1a1a',
                boxShadow: '6px 6px 0 #1a1a1a',
                padding: '0 0.3em',
                transform: 'rotate(-1deg)',
              }
            : {}),
        }}
      >
        {text}
      </motion.span>

      {/* Block reveal curtain overlay */}
      <motion.div
        initial={{ left: '0%', width: '0%' }}
        animate={{
          left: ['0%', '0%', '100%'],
          width: ['0%', '100%', '0%'],
        }}
        transition={{
          delay: delay,
          duration: 0.55,
          times: [0, 0.45, 1],
          ease: [0.77, 0, 0.175, 1],
        }}
        style={{
          position: 'absolute',
          top: '-2px',
          bottom: '-2px',
          background: highlight ? '#1a1a1a' : '#FFE135',
          border: '2px solid #1a1a1a',
          zIndex: 10,
          pointerEvents: 'none',
          borderRadius: '2px',
        }}
      />
    </div>
  );
}

const socials = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/MichaelF102',
    icon: SiGithub,
    color: '#1a1a1a',
    textColor: '#ffffff',
    baseRotate: -18,
    floatAnim: { y: [-6, 6, -6], rotate: [-20, -16, -20] },
    floatDuration: 5.4,
    floatDelay: 0.2,
    pos: { top: '22%', left: '18%' },
    parallax: { x: 14, y: -16 },
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://in.linkedin.com/in/michael-fernandes-7a3b6227a',
    icon: FaLinkedin,
    color: '#0077B5',
    textColor: '#ffffff',
    baseRotate: 12,
    floatAnim: { y: [6, -6, 6], rotate: [10, 14, 10] },
    floatDuration: 4.6,
    floatDelay: 0.6,
    pos: { top: '16%', right: '18%' },
    parallax: { x: -16, y: 14 },
  },
  {
    id: 'email',
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=michaelferns3210@gmail.com',
    icon: MdEmail,
    color: '#FFE135',
    textColor: '#1a1a1a',
    baseRotate: 22,
    floatAnim: { y: [-5, 7, -5], rotate: [20, 24, 20] },
    floatDuration: 6.2,
    floatDelay: 1.1,
    pos: { bottom: '22%', left: '18%' },
    parallax: { x: 12, y: 14 },
  },
];

// Desktop Social Icon Card with Parallax + Magnetic + Floating
function SocialIconDesktop({
  social,
  delay,
  smoothMouseX,
  smoothMouseY,
}: {
  social: (typeof socials)[0];
  delay: number;
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
}) {
  const [clicked, setClicked] = useState(false);
  const Icon = social.icon;

  const parallaxX = useTransform(smoothMouseX, [-1, 1], [-social.parallax.x, social.parallax.x]);
  const parallaxY = useTransform(smoothMouseY, [-1, 1], [-social.parallax.y, social.parallax.y]);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: social.baseRotate + 30 }}
      animate={{ opacity: 1, scale: 1, rotate: social.baseRotate }}
      transition={{ delay, duration: 0.6, type: 'spring', stiffness: 180, damping: 12 }}
      style={{
        position: 'absolute',
        ...social.pos,
        zIndex: 4,
        x: parallaxX,
        y: parallaxY,
      }}
    >
      <MagneticWrapper strength={0.35}>
        <motion.a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label={social.label}
          style={{ textDecoration: 'none', display: 'block' }}
        >
          {/* Continuous Floating animation */}
          <motion.div
            animate={social.floatAnim}
            transition={{
              duration: social.floatDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: social.floatDelay,
            }}
          >
            <AnimatePresence>
              {clicked && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 1 }}
                  animate={{ scale: 2.4, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: `3px solid ${social.color}`,
                    borderRadius: '4px',
                    pointerEvents: 'none',
                    zIndex: 10,
                  }}
                />
              )}
            </AnimatePresence>

            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: 0,
                boxShadow: '7px 7px 0 #1a1a1a',
                y: -4,
                x: -4,
              }}
              whileTap={{
                scale: 0.88,
                x: 5,
                y: 5,
                boxShadow: '0px 0px 0 #1a1a1a',
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                background: social.color,
                border: '3px solid #1a1a1a',
                boxShadow: '5px 5px 0 #1a1a1a',
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                minWidth: '70px',
              }}
            >
              <Icon style={{ width: '1.6rem', height: '1.6rem', color: social.textColor, display: 'block' }} />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  color: social.textColor,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {social.label}
              </span>
            </motion.div>
          </motion.div>
        </motion.a>
      </MagneticWrapper>
    </motion.div>
  );
}

// Mobile Social Icon
function SocialIconMobile({ social, delay }: { social: (typeof socials)[0]; delay: number }) {
  const [clicked, setClicked] = useState(false);
  const Icon = social.icon;

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0, rotate: social.baseRotate }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay, duration: 0.4, type: 'spring', stiffness: 180, damping: 14 }}
      style={{ textDecoration: 'none', flexShrink: 0 }}
    >
      <MagneticWrapper strength={0.25}>
        <motion.div
          animate={social.floatAnim}
          transition={{
            duration: social.floatDuration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: social.floatDelay,
          }}
          style={{ position: 'relative' }}
        >
          <AnimatePresence>
            {clicked && (
              <motion.div
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: 2.2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: `2.5px solid ${social.color}`,
                  borderRadius: '4px',
                  pointerEvents: 'none',
                  zIndex: 10,
                }}
              />
            )}
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.15, y: -4, boxShadow: '5px 5px 0 #1a1a1a' }}
            whileTap={{ scale: 0.88, x: 3, y: 3, boxShadow: '0px 0px 0 #1a1a1a' }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: social.color,
              border: '3px solid #1a1a1a',
              boxShadow: '4px 4px 0 #1a1a1a',
              padding: '0.6rem',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '52px',
              height: '52px',
            }}
          >
            <Icon style={{ width: '1.4rem', height: '1.4rem', color: social.textColor }} />
          </motion.div>
        </motion.div>
      </MagneticWrapper>
    </motion.a>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - left - width / 2) / (width / 2);
    const relY = (e.clientY - top - height / 2) / (height / 2);
    mouseX.set(relX);
    mouseY.set(relY);
  };

  // Sticker Parallax Transformations
  const pOpenToWorkX = useTransform(smoothMouseX, [-1, 1], [-12, 12]);
  const pOpenToWorkY = useTransform(smoothMouseY, [-1, 1], [-14, 14]);

  const p2026X = useTransform(smoothMouseX, [-1, 1], [16, -16]);
  const p2026Y = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  const pDataEngX = useTransform(smoothMouseX, [-1, 1], [-16, 16]);
  const pDataEngY = useTransform(smoothMouseY, [-1, 1], [-12, 12]);

  const pQuantX = useTransform(smoothMouseX, [-1, 1], [14, -14]);
  const pQuantY = useTransform(smoothMouseY, [-1, 1], [16, -16]);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ───── Floating Cards / Stickers (Spring entrance + Slow Float + Parallax + Magnetic) ───── */}

      {/* Open To Work */}
      <motion.div
        className="hero-sticker-corner"
        initial={{ opacity: 0, scale: 0, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 180, damping: 12 }}
        style={{
          position: 'absolute',
          top: '17%',
          right: '8%',
          zIndex: 4,
          x: pOpenToWorkX,
          y: pOpenToWorkY,
        }}
      >
        <MagneticWrapper strength={0.3}>
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [4, 8, 4] }}
            transition={{ duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            whileHover={{ scale: 1.08, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: '#FF6B9D',
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0 #1a1a1a',
              padding: '0.5rem 0.8rem 0.5rem 0.6rem',
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 800,
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              borderRadius: '2px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              userSelect: 'none',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#f5f0e8',
                border: '2px solid #1a1a1a',
                flexShrink: 0,
              }}
            />
            <span>Open to Work</span>
          </motion.div>
        </MagneticWrapper>
      </motion.div>

      {/* 🚀 2026 */}
      <motion.div
        className="hero-sticker-corner"
        initial={{ opacity: 0, scale: 0, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5, type: 'spring', stiffness: 180, damping: 12 }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          zIndex: 4,
          x: p2026X,
          y: p2026Y,
        }}
      >
        <MagneticWrapper strength={0.3}>
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [-7, -3, -7] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
            style={{
              background: '#4ECDC4',
              border: '3px solid #1a1a1a',
              boxShadow: '4px 4px 0 #1a1a1a',
              padding: '0.4rem 0.8rem',
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 600,
              fontSize: '0.8rem',
              borderRadius: '3px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            🚀 2026
          </motion.div>
        </MagneticWrapper>
      </motion.div>

      {/* Data Engineering */}
      <motion.div
        className="hero-sticker-corner"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 180, damping: 12 }}
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '7%',
          zIndex: 4,
          x: pDataEngX,
          y: pDataEngY,
        }}
      >
        <MagneticWrapper strength={0.3}>
          <motion.div
            animate={{ y: [5, -7, 5], rotate: [2, 6, 2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            style={{
              background: '#95E06C',
              border: '3px solid #1a1a1a',
              boxShadow: '4px 4px 0 #1a1a1a',
              padding: '0.4rem 0.8rem',
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 600,
              fontSize: '0.8rem',
              borderRadius: '3px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            ⚡ Data Engineering
          </motion.div>
        </MagneticWrapper>
      </motion.div>

      {/* Quant Finance */}
      <motion.div
        className="hero-sticker-corner"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5, type: 'spring', stiffness: 180, damping: 12 }}
        style={{
          position: 'absolute',
          bottom: '28%',
          right: '7%',
          zIndex: 4,
          x: pQuantX,
          y: pQuantY,
        }}
      >
        <MagneticWrapper strength={0.3}>
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [-6, -2, -6] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
            style={{
              background: '#C77DFF',
              border: '3px solid #1a1a1a',
              boxShadow: '4px 4px 0 #1a1a1a',
              padding: '0.4rem 0.8rem',
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 600,
              fontSize: '0.8rem',
              borderRadius: '3px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            📈 Quant Finance
          </motion.div>
        </MagneticWrapper>
      </motion.div>

      {/* ───── Main content ───── */}
      <div style={{ textAlign: 'center', maxWidth: '900px', width: '100%', position: 'relative', zIndex: 3 }}>
        {/* Hello World Label — Fade In (450ms timeline) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <span
            className="pulse-dot"
            style={{
              width: '10px',
              height: '10px',
              background: '#95E06C',
              border: '2px solid #1a1a1a',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
          <span className="neo-section-label">Hello World 👋</span>
        </motion.div>

        {/* Name Reveal — MICHAEL (600ms) & FERNANDES (800ms) with Block Reveal ██████████ + Scale 95% -> 100% */}
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            lineHeight: 1,
            letterSpacing: '0.05em',
            marginBottom: '0.5rem',
          }}
        >
          <BlockRevealName text="Michael" delay={0.6} />
          <br />
          <BlockRevealName text="Fernandes" highlight={true} delay={0.8} />
        </h1>

        {/* Typewriter — Starts typing at 1100ms timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          style={{ marginTop: '1.5rem', marginBottom: '2rem' }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 'clamp(0.8rem, 3vw, 1.5rem)',
              fontWeight: 600,
              border: '3px solid #1a1a1a',
              padding: '0.4rem 1rem',
              background: '#fff',
              boxShadow: '4px 4px 0 #1a1a1a',
              display: 'inline-block',
              maxWidth: '100%',
            }}
          >
            &gt; <CustomTypewriter words={roles} startDelay={1100} />
          </span>
        </motion.div>

        {/* CTA Buttons — Stagger Fade at 1300ms timeline + Magnetic Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          <MagneticWrapper strength={0.25}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="neo-btn neo-btn-black"
              data-cursor="search"
              style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
            >
              🚀 View Projects
            </a>
          </MagneticWrapper>

          <MagneticWrapper strength={0.25}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="neo-btn neo-btn-yellow"
              data-cursor="edit"
              style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
            >
              📬 Let&apos;s Talk
            </a>
          </MagneticWrapper>

          <MagneticWrapper strength={0.25}>
            <a
              href="/Michael_Fernandes_Resume.pdf"
              download="Michael_Fernandes_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn"
              style={{
                fontSize: '1rem',
                padding: '0.9rem 2rem',
                background: '#FF6B9D',
                border: '3px solid #1a1a1a',
                boxShadow: '5px 5px 0 #1a1a1a',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
              }}
            >
              📄 Download Resume
            </a>
          </MagneticWrapper>
        </motion.div>

        {/* Mobile social icons */}
        <motion.div
          className="hero-socials-mobile"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45 }}
          style={{
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          {socials.map((s, i) => (
            <SocialIconMobile key={s.id} social={s} delay={1.5 + i * 0.08} />
          ))}
        </motion.div>
      </div>

      {/* Desktop social icons — Parallax + Floating + Magnetic */}
      <div className="hero-socials-desktop">
        {socials.map((s, i) => (
          <SocialIconDesktop
            key={s.id}
            social={s}
            delay={0.3 + i * 0.1}
            smoothMouseX={smoothMouseX}
            smoothMouseY={smoothMouseY}
          />
        ))}
      </div>

      {/* Scroll indicator — Fade at 1700ms timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '28px',
            height: '44px',
            border: '3px solid #1a1a1a',
            borderRadius: '14px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
            boxShadow: '3px 3px 0 #1a1a1a',
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '6px', height: '6px', background: '#1a1a1a', borderRadius: '50%' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
