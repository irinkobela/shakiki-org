import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NotFoundPage = ({ lang }) => {
    const content = {
        ka: {
            title: "გვერდი ვერ მოიძებნა",
            message: "უკაცრავად, თქვენ მიერ მოთხოვნილი გვერდი არ არსებობს.",
            button: "მთავარ გვერდზე დაბრუნება"
        },
        en: {
            title: "Page Not Found",
            message: "Sorry, the page you were looking for does not exist.",
            button: "Return to Home"
        }
    };

    const pageContent = content[lang];

    return (
        <div className="container mx-auto px-6 py-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
            <i className="fas fa-exclamation-triangle text-6xl text-yellow-500 mb-6"></i>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                {pageContent.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {pageContent.message}
            </p>
            <Link 
                to="/" 
                className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 px-8 py-3 rounded-lg font-semibold"
            >
                {pageContent.button}
            </Link>
        </div>
    );
};

NotFoundPage.propTypes = {
    lang: PropTypes.string.isRequired,
};

export default NotFoundPage;
