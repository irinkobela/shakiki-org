
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import contentData from '../content.json';

const DoctorFinderPage = ({ lang }) => {
    const navigate = useNavigate();
    const [searchCity, setSearchCity] = useState('');
    const [searchSpecialty, setSearchSpecialty] = useState('');

    const doctors = lang === 'ka' ? [
        {
            name: " ქეთი პაპოშვილი",
            specialty: "ნევროლოგი",
            clinic: "ევროპის სამედიცინო ცენტრი",
            city: "თბილისი",
            phone: "+995 32 2 25 25 25",
            experience: "15 წელი"
        }
    ] : [];
    const filteredDoctors = doctors.filter(doctor => {
        const matchesCity = !searchCity || doctor.city.toLowerCase().includes(searchCity.toLowerCase());
        const matchesSpecialty = !searchSpecialty || doctor.specialty.toLowerCase().includes(searchSpecialty.toLowerCase());
        return matchesCity && matchesSpecialty;
    });

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
            <div className="container mx-auto px-6 py-12">
                <button 
                    onClick={() => navigate('/')}
                    className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <i className="fas fa-arrow-left mr-2"></i>
                    {lang === 'ka' ? 'უკან დაბრუნება' : 'Back to Home'}
                </button>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
                    {lang === 'ka' ? 'იპოვეთ სპეციალისტი' : 'Find a Specialist'}
                </h1>
                
                <div className="mb-8 p-6 rounded-lg shadow-md" style={{ backgroundColor: 'var(--card)' }}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 font-semibold" style={{ color: 'var(--card-foreground)' }}>
                                {lang === 'ka' ? 'ქალაქი' : 'City'}
                            </label>
                            <input
                                type="text"
                                value={searchCity}
                                onChange={(e) => setSearchCity(e.target.value)}
                                placeholder={lang === 'ka' ? 'მაგ. თბილისი' : 'e.g. Tbilisi'}
                                className="w-full px-4 py-2 rounded-lg border"
                                style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', borderColor: 'var(--border)' }}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold" style={{ color: 'var(--card-foreground)' }}>
                                {lang === 'ka' ? 'სპეციალობა' : 'Specialty'}
                            </label>
                            <input
                                type="text"
                                value={searchSpecialty}
                                onChange={(e) => setSearchSpecialty(e.target.value)}
                                placeholder={lang === 'ka' ? 'მაგ. ნევროლოგი' : 'e.g. Neurologist'}
                                className="w-full px-4 py-2 rounded-lg border"
                                style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', borderColor: 'var(--border)' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid gap-6">
                    {filteredDoctors.map((doctor, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-md" style={{ backgroundColor: 'var(--card)' }}>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--card-foreground)' }}>
                                        {doctor.name}
                                    </h3>
                                    <p className="mb-1" style={{ color: 'var(--muted-foreground)' }}>
                                        <i className="fas fa-user-md mr-2"></i>
                                        {doctor.specialty}
                                    </p>
                                    <p className="mb-1" style={{ color: 'var(--muted-foreground)' }}>
                                        <i className="fas fa-hospital mr-2"></i>
                                        {doctor.clinic}
                                    </p>
                                    <p className="mb-1" style={{ color: 'var(--muted-foreground)' }}>
                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                        {doctor.city}
                                    </p>
                                    <p className="mb-1" style={{ color: 'var(--muted-foreground)' }}>
                                        <i className="fas fa-clock mr-2"></i>
                                        {doctor.experience}
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <a 
                                        href={`tel:${doctor.phone}`}
                                        className="inline-flex items-center px-6 py-2 rounded-lg font-semibold transition-colors"
                                        style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
                                    >
                                        <i className="fas fa-phone mr-2"></i>
                                        {doctor.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredDoctors.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl" style={{ color: 'var(--muted-foreground)' }}>
                            {lang === 'ka' 
                                ? 'მითითებული კრიტერიუმებით ექიმი ვერ მოიძებნა'
                                : 'No doctors found with the specified criteria'
                            }
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorFinderPage;
