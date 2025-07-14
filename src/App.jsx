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

// Main App Component
export default function App() {
    const [lang, setLang] = useState('ka');
    const [content, setContent] = useState(contentData.ka);
    const navigate = useNavigate();

    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);

    useEffect(() => {
        setContent(contentData[lang]);
    }, [lang]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="bg-gray-50" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Header content={content.header} lang={lang} setLang={setLang} scrollTo={scrollTo} />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero content={content.hero} scrollTo={scrollTo} />
                            <About content={content.about} />
                            <LivingWithMigraine content={content.living} />
                            <News content={content.news} />
                            <Advocacy content={content.advocacy} />
                            <MedicalBoard content={content.board} />
                        </>
                    } />
                    <Route path="/news/:id" element={<NewsPage lang={lang} />} />
                    <Route path="/advocacy" element={<AdvocacyPage lang={lang} />} />
                </Routes>
            </main>
            <Footer content={content.footer} />
        </div>
    );
}