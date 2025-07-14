import React from 'react';

const MedicalBoard = ({ content }) => (
    <section id="board" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {content.title}
                </h2>
                <p className="text-gray-600 mt-2">
                    {content.subtitle}
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {content.members.map(member => (
                    <div key={member.name} className="text-center">
                        <img src={member.img_url} className="rounded-full mx-auto mb-3 shadow-md w-32 h-32 object-cover" alt={member.name} />
                        <h4 className="font-bold text-lg">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default MedicalBoard;