import React from 'react';
import contentData from '../content.json';

const AdvocacyPage = ({ lang }) => {
    const advocacyContent = contentData[lang].advocacy;

    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{advocacyContent.title}</h1>
            <div className="prose lg:prose-xl max-w-none">
                <p>{advocacyContent.content}</p>
                {/* Add more detailed content here */}
            </div>
        </div>
    );
};

export default AdvocacyPage;