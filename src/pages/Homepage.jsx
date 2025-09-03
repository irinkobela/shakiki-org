import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../components/Hero';
import About from '../components/About';
import LivingWithMigraine from '../components/LivingWithMigraine';
import News from '../components/News';
import Advocacy from '../components/Advocacy';
import MedicalBoard from '../components/MedicalBoard';

const HomePage = ({ content, scrollTo }) => {
    return (
        <>
            <Hero content={content.hero} scrollTo={scrollTo} />
            <About content={content.about} />
            <LivingWithMigraine content={content.living} />
            <News content={content.news} />
            <Advocacy content={content.advocacy} />
            <MedicalBoard content={content.board} />
        </>
    );
};

HomePage.propTypes = {
    content: PropTypes.object.isRequired,
    scrollTo: PropTypes.func.isRequired,
};

export default HomePage;
