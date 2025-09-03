import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'; // Assuming Card component is in the same folder
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const About = ({ content }) => {
    const [ref, isVisible] = useAnimateOnScroll();

    return (
        <section ref={ref} id="about" className={`py-20 bg-white dark:bg-gray-800 transition-colors duration-300 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        {content.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {content.subtitle}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.cards.map(card => (
                        <Link to={`/about/${card.id}`} key={card.id} className="block transform hover:-translate-y-1 transition-transform duration-300">
                           <Card card={card} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
