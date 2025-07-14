import React from 'react';
import { Link } from 'react-router-dom';

const News = ({ content }) => (
    <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {content.title}
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {content.articles.map(article => (
                    <div key={article.id} className="bg-gray-50 rounded-lg p-6 flex items-start space-x-4">
                        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg text-center flex-shrink-0">
                           <span className="font-bold text-lg">{article.date.split(' ')[1]}</span>
                           <span className="text-xs block">{article.date.split(' ')[0]}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">{article.title}</h3>
                            <p className="text-sm text-gray-600">{article.content}</p>
                            <Link to={`/news/${article.id}`} className="text-sm font-semibold text-indigo-600 mt-2 inline-block">{article.link}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default News;