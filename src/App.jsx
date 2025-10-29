import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skils";
import Projects from "./Project";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import { initializeTheme, toggleTheme } from './util';
import { Moon, Sun } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Loader from "./Loader";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  // Theme logic
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

  // Loader logic
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  // ⛔ RETURN early if still loading
  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: isDark ? "#0f172a" : "#ffffff",
          zIndex: 9999,
        }}
      >
        <Loader />
      </div>
    );
  }

  // ✅ Once loading finishes, show main app
  return (
    <>
      <header style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 50,
      }}>
        <button
          className="toggleButton"
          onClick={handleToggle}
          aria-label="Toggle theme"
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
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
        >
          <div style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
            {isDark ? (
              <Moon style={{
                width: '36px',
                height: '36px',
                color: '#cbd5e1',
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
                strokeWidth: 2.5
              }} />
            ) : (
              <Sun style={{
                width: '36px',
                height: '36px',
                color: 'white',
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
                strokeWidth: 2.5
              }} />
            )}
          </div>
        </button>
      </header>

      <main>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
        <Toaster position="bottom-right" />
      </main>
    </>
  );
}

export default App;
