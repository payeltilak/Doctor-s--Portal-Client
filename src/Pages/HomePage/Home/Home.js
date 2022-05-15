import React from 'react';
import Banner from '../Banner/Banner';
import Dental from '../Appointment/Appointment';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import Appointment from '../Appointment/Appointment';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className='px-12'>
          
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;