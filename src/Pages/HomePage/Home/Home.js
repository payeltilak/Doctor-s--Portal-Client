import React from 'react';
import Banner from '../Banner/Banner';

import Info from '../Info/Info';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';

import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import MakeAppointment from '../MakeAppointment/MakeAppointment';


const Home = () => {
    return (
        <div className='px-12'>
          
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Form></Form>
            <Testimonials></Testimonials>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;