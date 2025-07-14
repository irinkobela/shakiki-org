import React from 'react';
import { Link } from 'react-router-dom';

const Advocacy = ({ content }) => (
    <section id="advocacy" className="py-20 bg-gray-50">
         <div className="container mx-auto px-6 text-center">
             <i className="fas fa-bullhorn text-indigo-500 text-5xl mb-4"></i>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {content.title}
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                {content.content}
            </p>
            <Link to="/advocacy" className="mt-6 inline-block bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold">
                {content.link}
            </Link>
        </div>
    </section>
);

export default Advocacy;