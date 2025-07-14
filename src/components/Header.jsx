import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ content, lang, setLang, scrollTo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLangSwitch = () => {
        const newLang = lang === 'ka' ? 'en' : 'ka';
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    };

    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 shadow-sm">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo('top')}>
                        <i className="fas fa-brain text-indigo-600 text-2xl" aria-hidden="true"></i>
                        <span className="text-xl font-bold text-gray-800">
                            {content.title}
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {content.navLinks.map(link => (
                            link.id === 'news' || link.id === 'advocacy' ? (
                                <Link key={link.id} to={`/${link.id}`} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                                    {link.text}
                                </Link>
                            ) : (
                                <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollTo(link.id); }} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                                    {link.text}
                                </a>
                            )
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Language Switcher */}
                        <button onClick={handleLangSwitch} className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors duration-300" aria-label="Switch language">
                            <i className="fas fa-globe" aria-hidden="true"></i>
                            <span>{lang === 'ka' ? 'EN' : 'GE'}</span>
                        </button>
                        <a href="#donate" onClick={(e) => { e.preventDefault(); scrollTo('donate'); }} className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 rounded-lg font-semibold text-sm">
                            {content.donate}
                        </a>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 focus:outline-none" aria-label="Open menu">
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        {content.navLinks.map(link => (
                            link.id === 'news' || link.id === 'advocacy' ? (
                                <Link key={link.id} to={`/${link.id}`} onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-sm text-gray-700 hover:bg-indigo-50 rounded">
                                    {link.text}
                                </Link>
                            ) : (
                                <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollTo(link.id); setIsMenuOpen(false); }} className="block py-2 px-4 text-sm text-gray-700 hover:bg-indigo-50 rounded">
                                    {link.text}
                                </a>
                            )
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;