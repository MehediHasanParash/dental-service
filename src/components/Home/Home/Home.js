import React from 'react';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Featuredservice from '../Featuredservice/Featuredservice';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonoials';

const Home = () => {
    return (
        <div>
            {/* <h1>this is home</h1> */}
            <Header></Header>
            <Services></Services>
            <Featuredservice></Featuredservice>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;