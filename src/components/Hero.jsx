import React from 'react';

const Hero = ({ content, scrollTo }) => (
    <section id="top" className="bg-gray-50" style={{ backgroundImage: 'radial-gradient(circle at top right, #E0E7FF 0%, #F3F4F6 40%)' }}>
        <div className="container mx-auto px-6 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                {content.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {content.subtitle}
            </p>
            <div className="flex justify-center items-center space-x-4">
                <a href="#living" onClick={(e) => { e.preventDefault(); scrollTo('living'); }} className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold">
                    <i className="fas fa-user-md mr-2"></i>
                    {content.findDoctor}
                </a>
                <a href="#stories" onClick={(e) => { e.preventDefault(); scrollTo('stories'); }} className="bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold">
                    <i className="fas fa-book-open mr-2"></i>
                    {content.shareStory}
                </a>
            </div>
        </div>
    </section>
);

export default Hero;