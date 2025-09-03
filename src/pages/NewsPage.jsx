import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import contentData from '../content.json';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import NotFoundPage from './NotFound';

const NewsPage = ({ lang }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const allArticles = contentData[lang].news.articles;
    const newsContent = allArticles.find(article => article.id === id);
    const [ref, isVisible] = useAnimateOnScroll();

    if (!newsContent) {
        return <NotFoundPage lang={lang} />;
    }

    const relatedArticles = allArticles.filter(article => article.id !== id).slice(0, 2);

    const shareOnFacebook = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    };

    const shareOnTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(newsContent.title);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    };

    return (
        <div ref={ref} className={`bg-white dark:bg-gray-900 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="container mx-auto px-6 py-20">
                <button 
                    onClick={() => navigate('/')}
                    className="mb-8 flex items-center text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"
                >
                    <i className="fas fa-arrow-left mr-2"></i>
                    {lang === 'ka' ? 'უკან დაბრუნება' : 'Back to Home'}
                </button>

                <article>
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                            {newsContent.title}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            {newsContent.date}
                        </p>
                    </header>

                    <div className="prose lg:prose-xl max-w-none dark:prose-invert text-gray-700 dark:text-gray-300">
                        {/* Render paragraphs from fullContent */}
                        {newsContent.fullContent.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Social Sharing */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                            {lang === 'ka' ? 'გააზიარე სტატია' : 'Share this Article'}
                        </h3>
                        <div className="flex space-x-4">
                            <button onClick={shareOnFacebook} className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors" aria-label="Share on Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button onClick={shareOnTwitter} className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors" aria-label="Share on Twitter">
                                <i className="fab fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                </article>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <aside className="mt-20">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                            {lang === 'ka' ? 'სხვა სიახლეები' : 'Related News'}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedArticles.map(article => (
                                <Link to={`/news/${article.id}`} key={article.id} className="block bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
                                    <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{article.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{article.content}</p>
                                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">{lang === 'ka' ? 'ვრცლად' : 'Read More'} &rarr;</span>
                                </Link>
                            ))}
                        </div>
                    </aside>
                )}
            </div>
        </div>
    );
};

NewsPage.propTypes = {
    lang: PropTypes.string.isRequired,
};

export default NewsPage;
