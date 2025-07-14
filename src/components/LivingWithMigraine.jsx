import React from 'react';
import Card from './Card';

const LivingWithMigraine = ({ content }) => (
    <section id="living" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {content.title}
                </h2>
                <p className="text-gray-600 mt-2">
                    {content.subtitle}
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.cards.map(card => (
                    <Card key={card.id} card={card} />
                ))}
            </div>
        </div>
    </section>
);

export default LivingWithMigraine;