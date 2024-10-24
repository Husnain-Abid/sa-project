import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Services from '../Components/Services';
import Solutions from '../Components/SolutionCarousel';
import Proposition from '../Components/Proposition';
import Business from '../Components/Business';
import Commerce from '../Components/Commerce';
import Support from '../Components/Support';
import TalkBusiness from '../Components/TalkBusiness';
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';
const MainPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Services />
            <Solutions />
            <Proposition />
            <Business />
            <Commerce />
            <Support />
            <TalkBusiness/>
            <Subscribe/>
            <Footer/>
            
        </>
    );
};

export default MainPage; 