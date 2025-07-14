import React from 'react';

const Card = ({ card }) => {
    if (card.img_url) {
        return (
            <div id={card.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={card.img_url} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{card.title}</h3>
                    <p className="text-gray-600 mb-4">{card.desc}</p>
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-800">{card.link} &rarr;</a>
                </div>
            </div>
        )
    }

    return (
        <div className="text-center p-6 bg-gray-50 rounded-lg transition-shadow hover:shadow-xl">
            <i className={`fas ${card.icon} text-4xl text-indigo-500 mb-4`}></i>
            <h3 className="font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.desc}</p>
        </div>
    )
}

export default Card;