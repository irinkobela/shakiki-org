import React from 'react';
import PropTypes from 'prop-types';
import contentData from '../content.json';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const AdvocacyPage = ({ lang }) => {
    const advocacyContent = contentData[lang].advocacy;
    const [ref, isVisible] = useAnimateOnScroll();

    const iconMap = [
        "fas fa-balance-scale",
        "fas fa-pills",
        "fas fa-user-md",
        "fas fa-bullhorn"
    ];

    return (
        <div ref={ref} className={`container mx-auto px-6 py-20 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            {/* Page Header */}
            <div className="text-center mb-16">
                <i className="fas fa-gavel text-indigo-500 dark:text-indigo-400 text-5xl mb-4"></i>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                    {advocacyContent.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    {advocacyContent.content}
                </p>
            </div>

            {/* Advocacy Goals Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
                {advocacyContent.advocacyGoals.map((goal, index) => {
                    const [goalRef, goalIsVisible] = useAnimateOnScroll({ threshold: 0.1 });
                    return (
                        <div 
                            key={index} 
                            ref={goalRef}
                            className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 fade-in-section ${goalIsVisible ? 'is-visible' : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                                        <i className={`${iconMap[index % iconMap.length]} text-xl`}></i>
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {goal.title}
                                    </h3>
                                    <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                                        {goal.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Call to Action Section */}
            <div className="text-center bg-gray-100 dark:bg-gray-800 p-12 rounded-2xl">
                 <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {lang === 'ka' ? 'ჩაერთე!' : 'Get Involved!'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                    {lang === 'ka' 
                        ? 'თქვენი მხარდაჭერა მნიშვნელოვანია. დაგვიკავშირდით, რათა გაიგოთ, როგორ შეგიძლიათ დაგვეხმაროთ ჩვენი მიზნების მიღწევაში.' 
                        : 'Your support is crucial. Contact us to learn how you can help us achieve our goals and make a difference.'
                    }
                </p>
                <a 
                    href="mailto:info@shakiki.org" 
                    className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 px-8 py-4 rounded-lg font-semibold text-lg inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    <i className="fas fa-envelope mr-3"></i>
                    {lang === 'ka' ? 'დაგვიკავშირდით' : 'Contact Us'}
                </a>
            </div>
        </div>
    );
};

AdvocacyPage.propTypes = {
    lang: PropTypes.string.isRequired,
};

export default AdvocacyPage;
