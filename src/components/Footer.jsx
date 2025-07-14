import React from 'react';

const Footer = ({ content }) => (
    <footer id="donate" className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-bold mb-4">{content.donateTitle}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{content.donateText}</p>
                    <a href="#" className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold inline-block">
                        {content.donateButton}
                    </a>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">{content.subscribeTitle}</h3>
                    <form action="mailto:info@shakiki.org" method="post" encType="text/plain" className="flex">
                        <input type="email" name="email" placeholder="Email" className="w-full rounded-l-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        <button type="submit" className="bg-indigo-600 px-4 rounded-r-lg hover:bg-indigo-700" aria-label="Subscribe to newsletter">
                            <i className="fas fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">{content.connectTitle}</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook page">
                            <i className="fab fa-facebook-f text-2xl" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter page">
                            <i className="fab fa-twitter text-2xl" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Email us">
                            <i className="fas fa-envelope text-2xl" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} {content.copyright}</p>
            </div>
        </div>
    </footer>
);

export default Footer;