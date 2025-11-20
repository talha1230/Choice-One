'use client';

import { useState, useEffect } from 'react';

// SVG Icons as components
const MegaphoneIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 8.5l9-4v15l-9-4" />
    <path d="M12.5 3.5v17" />
    <path d="M15 19.5l3.5-1.5" />
    <circle cx="19" cy="5" r="3" />
  </svg>
);

const TargetIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const UsersIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PaletteIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
    <circle cx="8.5" cy="14" r="1.5" fill="currentColor" />
    <circle cx="15.5" cy="14" r="1.5" fill="currentColor" />
    <path d="M12 12c0 3.5-2 5-2 5s2-1.5 2-5" />
  </svg>
);

const DocumentIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const BullhornIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4l6 6V1l-6 6H5z" />
    <path d="M19 9l-1-1" />
    <path d="M22 11l-2-2" />
    <path d="M19 13l-1 1" />
  </svg>
);

const ThoughtIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="12" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

const AwardIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
  </svg>
);

const slides = [
  {
    id: 1,
    icon: <MegaphoneIcon />,
    title: 'One Small Choice — PSA Presentation',
    subtitle: 'Integrity & Anti-Corruption',
    presenter: 'Presenter: Talha Muhammad',
    content: null,
  },
  {
    id: 2,
    icon: <TargetIcon />,
    title: 'Objective',
    subtitle: null,
    presenter: null,
    content: [
      'Show how small corrupt offers pressure young people',
      'Highlight why choosing integrity protects your future',
      'Promote awareness of everyday corruption patterns',
    ],
  },
  {
    id: 3,
    icon: <UsersIcon />,
    title: 'Target Audience',
    subtitle: null,
    presenter: null,
    content: [
      'University students',
      'Fresh graduates entering the job market',
      'Anyone facing pressure to take unethical shortcuts',
    ],
  },
  {
    id: 4,
    icon: <PaletteIcon />,
    title: 'Creative Approach',
    subtitle: null,
    presenter: null,
    content: [
      'Text-message storytelling style to feel modern & realistic',
      'Solo acting with Yousaf represented through chat bubbles',
      'Minimalist scenes to keep the focus on the moral pressure',
      'Real-life scenario students can relate to: job pressure + temptation',
    ],
  },
  {
    id: 5,
    icon: <DocumentIcon />,
    title: 'Key Content',
    subtitle: null,
    presenter: null,
    content: [
      'Job rejections increase desperation',
      'Yousaf offers "easy money" through shady tasks',
      'Temptation builds → you pause and reflect',
      'You reject corruption',
      'You find an honest opportunity afterwards',
      'Main message: Integrity > Shortcuts',
    ],
  },
  {
    id: 6,
    icon: <BullhornIcon />,
    title: 'Call to Action',
    subtitle: null,
    presenter: null,
    content: [
      'Think before accepting "easy money" or suspicious offers',
      'Choose honest paths even when they\'re harder',
      'Report and avoid unethical behaviour',
      'Protect your reputation, your future, your integrity',
    ],
  },
  {
    id: 7,
    icon: <ThoughtIcon />,
    title: 'What I Learned',
    subtitle: null,
    presenter: null,
    content: [
      'Corruption often starts with "small favours"',
      'Real pressure usually comes via messages, not face-to-face',
      'Learned solo storytelling and framing techniques',
      'Learned that integrity requires courage and a clear mindset',
      'Creating the PSA strengthened my understanding of daily corruption risks',
    ],
  },
  {
    id: 8,
    icon: <AwardIcon />,
    title: 'Credits',
    subtitle: null,
    presenter: null,
    content: [
      'Filming & Editing: Talha Muhammad',
      'Text Effects / UI: Next.js & React',
      'Background Music: royalty-free source',
      'All content original & created for MPU 2323 PSA',
    ],
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div style={styles.container}>
      <div style={styles.slide}>
        <div style={styles.iconContainer}>{slide.icon}</div>
        
        <h1 style={styles.title}>{slide.title}</h1>
        
        {slide.subtitle && <h2 style={styles.subtitle}>{slide.subtitle}</h2>}
        
        {slide.presenter && <p style={styles.presenter}>{slide.presenter}</p>}
        
        {slide.content && (
          <ul style={styles.contentList}>
            {slide.content.map((item, index) => (
              <li key={index} style={styles.contentItem}>
                <span style={styles.bullet}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div style={styles.navigation}>
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            style={{
              ...styles.navButton,
              ...(currentSlide === 0 ? styles.navButtonDisabled : {}),
            }}
          >
            ← Previous
          </button>
          
          <span style={styles.slideNumber}>
            {currentSlide + 1} / {slides.length}
          </span>
          
          <button
            onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
            disabled={currentSlide === slides.length - 1}
            style={{
              ...styles.navButton,
              ...(currentSlide === slides.length - 1 ? styles.navButtonDisabled : {}),
            }}
          >
            Next →
          </button>
        </div>
      </div>

      <div style={styles.hint}>
        Use arrow keys or click buttons to navigate
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  slide: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '60px 80px',
    maxWidth: '900px',
    width: '100%',
    minHeight: '600px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
  },
  iconContainer: {
    marginBottom: '30px',
    color: '#667eea',
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '32px',
    fontWeight: '500',
    color: '#4a5568',
    marginBottom: '15px',
  },
  presenter: {
    fontSize: '24px',
    color: '#718096',
    fontStyle: 'italic',
    marginTop: '10px',
  },
  contentList: {
    listStyle: 'none',
    padding: 0,
    margin: '40px 0',
    textAlign: 'left' as const,
    width: '100%',
    maxWidth: '700px',
  },
  contentItem: {
    fontSize: '22px',
    color: '#2d3748',
    marginBottom: '20px',
    paddingLeft: '0px',
    position: 'relative' as const,
    lineHeight: '1.6',
    display: 'flex',
    alignItems: 'flex-start',
  },
  bullet: {
    color: '#667eea',
    fontSize: '28px',
    fontWeight: 'bold',
    marginRight: '15px',
    flexShrink: 0,
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginTop: 'auto',
    paddingTop: '40px',
  },
  navButton: {
    padding: '12px 30px',
    fontSize: '18px',
    fontWeight: '600',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  navButtonDisabled: {
    backgroundColor: '#cbd5e0',
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  slideNumber: {
    fontSize: '18px',
    color: '#718096',
    fontWeight: '600',
    minWidth: '60px',
  },
  hint: {
    color: 'white',
    fontSize: '16px',
    marginTop: '20px',
    opacity: 0.8,
  },
};
