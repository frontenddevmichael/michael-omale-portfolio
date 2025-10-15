import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
import Skills from "./Skils"
import Projects from "./Project"
import Footer from "./Footer"
import { useState, useEffect } from 'react';
import { initializeTheme, toggleTheme } from './util';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    initializeTheme();

    const currentTheme = document.documentElement.getAttribute('data-theme');
    setIsDark(currentTheme === 'dark');

    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <>
      <header style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 50,

      }}>
        <button
          onClick={handleToggle}
          aria-label="Toggle theme"
          style={{
            position: 'relative',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            background: isDark
              ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
              : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
        >
          {/* Animated background glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0,
              transition: 'opacity 0.5s',
              pointerEvents: 'none'
            }}
            className="hover-glow"
          />

          {/* Floating particles effect */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: isDark ? '#94a3b8' : '#fff',
                  left: `${20 + i * 12}%`,
                  top: `${30 + (i % 3) * 15}%`,
                  opacity: 0.6,
                  animation: `pulse ${2 + i * 0.3}s infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>

          {/* Icon container */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}>
            <div style={{
              position: 'absolute',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isDark ? 0 : 1,
              transform: isDark ? 'rotate(180deg) scale(0)' : 'rotate(0deg) scale(1)'
            }}>
              <Sun style={{
                width: '36px',
                height: '36px',
                color: 'white',
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
                strokeWidth: 2.5
              }} />
            </div>
            <div style={{
              position: 'absolute',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isDark ? 1 : 0,
              transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0)'
            }}>
              <Moon style={{
                width: '36px',
                height: '36px',
                color: '#cbd5e1',
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
                strokeWidth: 2.5
              }} />
            </div>
          </div>

          {/* Border shimmer */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              opacity: 0,
              transition: 'opacity 0.5s',
              background: isDark
                ? 'linear-gradient(45deg, transparent 30%, rgba(148, 163, 184, 0.3) 50%, transparent 70%)'
                : 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.5) 50%, transparent 70%)',
              animation: 'shimmer 2s infinite linear',
              pointerEvents: 'none'
            }}
            className="shimmer"
          />
        </button>
      </header>

      <main>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        button:hover .hover-glow {
          opacity: 1 !important;
        }
        
        button:hover .shimmer {
          opacity: 1 !important;
        }
      `}</style>
    </>
  )
}

export default App