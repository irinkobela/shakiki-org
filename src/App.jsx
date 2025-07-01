import React, { useState, useEffect } from 'react';

// Helper component for language-specific text
const LangText = ({ ka, en, lang }) => {
    return lang === 'ka' ? ka : en;
};

// Header Component
const Header = ({ lang, setLang, scrollTo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLangSwitch = () => {
        const newLang = lang === 'ka' ? 'en' : 'ka';
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    };

    const navLinks = [
        { id: 'about', ka: 'შაკიკის შესახებ', en: 'About Migraine' },
        { id: 'living', ka: 'ცხოვრება შაკიკით', en: 'Living with Migraine' },
        { id: 'news', ka: 'სიახლეები', en: 'News' },
        { id: 'advocacy', ka: 'ადვოკატირება', en: 'Advocacy' },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo('top')}>
                        <i className="fas fa-brain text-indigo-600 text-2xl"></i>
                        <span className="text-xl font-bold text-gray-800">
                            <LangText ka="შაკიკი.org" en="Shakiki.org" lang={lang} />
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollTo(link.id); }} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                                <LangText ka={link.ka} en={link.en} lang={lang} />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Language Switcher */}
                        <button onClick={handleLangSwitch} className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                            <i className="fas fa-globe"></i>
                            <span>{lang === 'ka' ? 'EN' : 'GE'}</span>
                        </button>
                        <a href="#donate" onClick={(e) => { e.preventDefault(); scrollTo('donate'); }} className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 rounded-lg font-semibold text-sm">
                            <LangText ka="დონაცია" en="Donate" lang={lang} />
                        </a>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 focus:outline-none">
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        {navLinks.map(link => (
                             <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollTo(link.id); setIsMenuOpen(false); }} className="block py-2 px-4 text-sm text-gray-700 hover:bg-indigo-50 rounded">
                                <LangText ka={link.ka} en={link.en} lang={lang} />
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

// Hero Section Component
const Hero = ({ lang, scrollTo }) => (
    <section id="top" className="bg-gray-50" style={{ backgroundImage: 'radial-gradient(circle at top right, #E0E7FF 0%, #F3F4F6 40%)' }}>
        <div className="container mx-auto px-6 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                <LangText ka="თქვენ მარტო არ ხართ." en="You are not alone." lang={lang} />
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                <LangText
                    ka="საქართველოს შაკიკის ორგანიზაცია ეხმარება პაციენტებს, აწვდის მათ სანდო ინფორმაციას და იბრძვის უკეთესი ჯანდაცვისთვის."
                    en="The Georgian Migraine Organization empowers patients, provides trusted information, and advocates for better healthcare."
                    lang={lang}
                />
            </p>
            <div className="flex justify-center items-center space-x-4">
                <a href="#living" onClick={(e) => { e.preventDefault(); scrollTo('living'); }} className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold">
                    <i className="fas fa-user-md mr-2"></i>
                    <LangText ka="იპოვე ექიმი" en="Find a Doctor" lang={lang} />
                </a>
                <a href="#stories" onClick={(e) => { e.preventDefault(); scrollTo('stories'); }} className="bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold">
                    <i className="fas fa-book-open mr-2"></i>
                    <LangText ka="გააზიარე ისტორია" en="Share Your Story" lang={lang} />
                </a>
            </div>
        </div>
    </section>
);

// About Section Component
const About = ({ lang }) => {
    const aboutCards = [
        { icon: 'fa-diagnoses', ka: 'რა არის შაკიკი?', en: 'What is Migraine?', ka_desc: 'გაიგეთ მეტი დიაგნოსტიკის კრიტერიუმებისა და სიმპტომების შესახებ.', en_desc: 'Learn about diagnostic criteria and symptoms.' },
        { icon: 'fa-pills', ka: 'მკურნალობის გზები', en: 'Treatment Options', ka_desc: 'ინფორმაცია მწვავე და პრევენციული მედიკამენტების შესახებ.', en_desc: 'Information on acute and preventive medications.' },
        { icon: 'fa-apple-alt', ka: 'ტრიგერები და ცხოვრების წესი', en: 'Triggers & Lifestyle', ka_desc: 'აღმოაჩინეთ, როგორ მართოთ შაკიკი ცხოვრების წესის ცვლილებებით.', en_desc: 'Discover how lifestyle changes can help manage migraine.' },
        { icon: 'fa-head-side-virus', ka: 'თავის ტკივილის ტიპები', en: 'Types of Headache', ka_desc: 'განასხვავეთ შაკიკი, დაძაბულობის და კლასტერული თავის ტკივილი.', en_desc: 'Differentiate migraine, tension, and cluster headaches.' },
    ];
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        <LangText ka="სიმართლე შაკიკის შესახებ" en="Understanding Migraine" lang={lang} />
                    </h2>
                    <p className="text-gray-600 mt-2">
                        <LangText ka="სანდო ინფორმაცია, რომელიც დაგეხმარებათ უკეთ გაიგოთ თქვენი მდგომარეობა." en="Trusted information to help you understand your condition." lang={lang} />
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {aboutCards.map(card => (
                        <div key={card.en} className="text-center p-6 bg-gray-50 rounded-lg transition-shadow hover:shadow-xl">
                            <i className={`fas ${card.icon} text-4xl text-indigo-500 mb-4`}></i>
                            <h3 className="font-bold text-lg mb-2"><LangText ka={card.ka} en={card.en} lang={lang} /></h3>
                            <p className="text-sm text-gray-600"><LangText ka={card.ka_desc} en={card.en_desc} lang={lang} /></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Living with Migraine Section
const LivingWithMigraine = ({ lang }) => {
    const livingCards = [
        { id: 'find-doctor', img_text: 'იპოვე+ექიმი', ka: 'იპოვე სპეციალისტი', en: 'Find a Specialist', ka_desc: 'მოიძიეთ ნევროლოგები და კლინიკები საქართველოში.', en_desc: 'Search for neurologists and clinics in Georgia.', ka_link: 'ძიების დაწყება', en_link: 'Start Search' },
        { id: 'diary', img_text: 'დღიური', ka: 'თავის ტკივილის დღიური', en: 'Headache Diary', ka_desc: 'გადმოწერეთ დღიური, რათა თვალი ადევნოთ შეტევებსა და ტრიგერებს.', en_desc: 'Download a diary to track your attacks and triggers.', ka_link: 'გადმოწერა', en_link: 'Download Now' },
        { id: 'stories', img_text: 'ისტორიები', ka: 'პაციენტების ისტორიები', en: 'Patient Stories', ka_desc: 'წაიკითხეთ სხვა პაციენტების გამოცდილება და გააზიარეთ თქვენი.', en_desc: 'Read experiences from other patients and share yours.', ka_link: 'წაკითხვა', en_link: 'Read Stories' },
    ];
    return (
        <section id="living" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        <LangText ka="ცხოვრება შაკიკით" en="Living with Migraine" lang={lang} />
                    </h2>
                    <p className="text-gray-600 mt-2">
                        <LangText ka="პრაქტიკული რესურსები და მხარდაჭერა ყოველდღიური ცხოვრებისთვის." en="Practical resources and support for your daily life." lang={lang} />
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {livingCards.map(card => (
                        <div key={card.id} id={card.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                            <img src={`https://placehold.co/600x400/E0E7FF/4F46E5?text=${card.img_text}`} alt={card.en} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2"><LangText ka={card.ka} en={card.en} lang={lang} /></h3>
                                <p className="text-gray-600 mb-4"><LangText ka={card.ka_desc} en={card.en_desc} lang={lang} /></p>
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-800"><LangText ka={card.ka_link} en={card.en_link} lang={lang} /> &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// News Section
const News = ({ lang }) => (
    <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    <LangText ka="სიახლეები და კვლევები" en="News & Research" lang={lang} />
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6 flex items-start space-x-4">
                    <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg text-center flex-shrink-0">
                       <span className="font-bold text-lg">25</span>
                       <span className="text-xs block"><LangText ka="ივნ" en="JUN" lang={lang} /></span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1"><LangText ka="ახალი კვლევა CGRP ინჰიბიტორებზე" en="New Research on CGRP Inhibitors" lang={lang} /></h3>
                        <p className="text-sm text-gray-600"><LangText ka='ჟურნალ "Neurology"-ში გამოქვეყნდა პერსპექტიული შედეგები...' en='Promising results published in the journal "Neurology"...' lang={lang} /></p>
                        <a href="#" className="text-sm font-semibold text-indigo-600 mt-2 inline-block">Read More</a>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 flex items-start space-x-4">
                    <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg text-center flex-shrink-0">
                       <span className="font-bold text-lg">18</span>
                       <span className="text-xs block"><LangText ka="ივნ" en="JUN" lang={lang} /></span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1"><LangText ka="შაკიკის მსოფლიო დღე 2024" en="Migraine Awareness Day 2024" lang={lang} /></h3>
                        <p className="text-sm text-gray-600"><LangText ka="ჩვენი ორგანიზაცია გეგმავს საინფორმაციო კამპანიას თბილისში..." en="Our organization is planning an awareness campaign in Tbilisi..." lang={lang} /></p>
                        <a href="#" className="text-sm font-semibold text-indigo-600 mt-2 inline-block">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Advocacy Section
const Advocacy = ({ lang }) => (
    <section id="advocacy" className="py-20 bg-gray-50">
         <div className="container mx-auto px-6 text-center">
             <i className="fas fa-bullhorn text-indigo-500 text-5xl mb-4"></i>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                <LangText ka="ჩვენი ხმა ცვლილებებისთვის" en="Our Voice for Change" lang={lang} />
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                <LangText 
                    ka="ჩვენ ვმუშაობთ, რათა შაკიკი აღიარებულ იქნას სერიოზულ ნევროლოგიურ დაავადებად და ყველა პაციენტს ჰქონდეს წვდომა თანამედროვე მკურნალობაზე."
                    en="We advocate for migraine to be recognized as a serious neurological disease and for all patients to have access to modern treatments."
                    lang={lang}
                />
            </p>
            <a href="#" className="mt-6 inline-block bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold">
                <LangText ka="გაიგეთ მეტი ჩვენს მიზნებზე" en="Learn About Our Goals" lang={lang} />
            </a>
        </div>
    </section>
);

// Medical Board Section
const MedicalBoard = ({ lang }) => {
    const boardMembers = [
        { name: 'ქეთი პაპოშვილი', title_ka: 'ნევროლოგი, ასოციაციის პრეზიდენტი', title_en: 'Neurologist, President of the Association', img_text: 'Dr. K.P.' },
        { name: 'ირინე ბახუტაშვილი', title_ka: 'რეზიდენტი', title_en: 'Resident Doctor', img_text: 'Dr. I.B.' },
        { name: 'Dr. Tamar Gelashvili', title_ka: 'ნევროლოგი', title_en: 'Neurologist', img_text: 'Dr. T.G.' },
    ];
    return (
        <section id="board" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        <LangText ka="ჩვენი გუნდი და მრჩეველები" en="Our Team & Advisors" lang={lang} />
                    </h2>
                    <p className="text-gray-600 mt-2">
                        <LangText ka="ჩვენი კონტენტი შემოწმებულია წამყვანი ქართველი ნევროლოგების მიერ." en="Our content is reviewed by leading Georgian neurologists." lang={lang} />
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {boardMembers.map(member => (
                        <div key={member.name} className="text-center">
                            <img src={`https://placehold.co/128x128/E0E7FF/4F46E5?text=${member.img_text}`} className="rounded-full mx-auto mb-3 shadow-md" alt={member.name} />
                            <h4 className="font-bold text-lg">{member.name}</h4>
                            <p className="text-sm text-gray-500"><LangText ka={member.title_ka} en={member.title_en} lang={lang} /></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = ({ lang }) => (
    <footer id="donate" className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-bold mb-4"><LangText ka="გახდი ცვლილების ნაწილი" en="Be Part of the Change" lang={lang} /></h3>
                    <p className="text-gray-400 mb-4 text-sm"><LangText ka="თქვენი დონაცია გვეხმარება გავაგრძელოთ ჩვენი მისია." en="Your donation helps us continue our mission." lang={lang} /></p>
                    <a href="#" className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold inline-block">
                        <LangText ka="დონაცია" en="Donate Now" lang={lang} />
                    </a>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4"><LangText ka="გამოიწერეთ სიახლეები" en="Subscribe to our Newsletter" lang={lang} /></h3>
                    <form className="flex">
                        <input type="email" placeholder="Email" className="w-full rounded-l-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        <button type="submit" className="bg-indigo-600 px-4 rounded-r-lg hover:bg-indigo-700"><i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4"><LangText ka="დაგვიკავშირდით" en="Connect With Us" lang={lang} /></h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-facebook-f text-2xl"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-twitter text-2xl"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fas fa-envelope text-2xl"></i></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} <LangText ka="საქართველოს შაკიკის ორგანიზაცია (shakiki.org)" en="Georgian Migraine Organization (shakiki.org)" lang={lang} />. <LangText ka="ყველა უფლება დაცულია." en="All rights reserved." lang={lang} /></p>
            </div>
        </div>
    </footer>
);


// Main App Component
export default function App() {
    const [lang, setLang] = useState('ka');

    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);

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
            <Header lang={lang} setLang={setLang} scrollTo={scrollTo} />
            <main>
                <Hero lang={lang} scrollTo={scrollTo} />
                <About lang={lang} />
                <LivingWithMigraine lang={lang} />
                <News lang={lang} />
                <Advocacy lang={lang} />
                <MedicalBoard lang={lang} />
            </main>
            <Footer lang={lang} />
        </div>
    );
}
