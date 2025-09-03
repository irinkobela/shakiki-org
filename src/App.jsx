import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import contentData from './content.json';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import LivingWithMigraine from './components/LivingWithMigraine';
import News from './components/News';
import Advocacy from './components/Advocacy';
import MedicalBoard from './components/MedicalBoard';
import Footer from './components/Footer';
import NewsPage from './pages/NewsPage';
import AdvocacyPage from './pages/AdvocacyPage';
import BackToTopButton from './components/BackToTopButton';
import DoctorFinderPage from './pages/DoctorFinderPage';

export default function App() {
  const [lang, setLang] = useState('ka');
  const [content, setContent] = useState(contentData.ka);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Load from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      setLang(savedLang);
    }

    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      const isDark = JSON.parse(savedDarkMode);
      setDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }
  }, []);

  // Update content when language changes
  useEffect(() => {
    setContent(contentData[lang]);
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Update theme on toggle
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Smooth scroll to section by ID
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header
        content={content.header}
        lang={lang}
        setLang={setLang}
        scrollTo={scrollTo}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero content={content.hero} scrollTo={scrollTo} />
                <About content={content.about} />
                <LivingWithMigraine content={content.living} />
                <News content={content.news} />
                <Advocacy content={content.advocacy} />
                <MedicalBoard content={content.board} />
              </>
            }
          />
          <Route path="/news/:id" element={<NewsPage lang={lang} />} />
          <Route path="/advocacy" element={<AdvocacyPage lang={lang} />} />
          <Route path="/doctors" element={<DoctorFinderPage lang={lang} />} />
        </Routes>
      </main>

      <Footer content={content.footer} />
      <BackToTopButton />
    </div>
  );
}
