import React from 'react';
import { useParams } from 'react-router-dom';
import contentData from '../content.json';

const NewsPage = ({ lang }) => {
    const { id } = useParams();
    const newsContent = contentData[lang].news.articles.find(article => article.id === id);

    if (!newsContent) {
        return <div className="container mx-auto px-6 py-20 text-center">Article not found.</div>;
    }

    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{newsContent.title}</h1>
            <p className="text-gray-600 mb-4">{newsContent.date}</p>
            <div className="prose lg:prose-xl max-w-none">
                <p>{newsContent.content}</p>
                {/* Add more detailed content here */}
            </div>
        </div>
    );
};

export default NewsPage;