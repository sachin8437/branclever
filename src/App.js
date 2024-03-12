import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './responsive.css'; 
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import About from './pages/About';
import Service from './pages/Service';
import Footer from './components/Footer'; 
import WhatsAppWidget from "react-whatsapp-chat-widget";
import { animateScroll as scroll } from 'react-scroll';
import PlacementForm from './components/PlacementForm';
import Portfolio from './pages/Portfolio';
import Review from './pages/Review';
import Career from './pages/Career';



export default class App extends Component {
  
  scrollToTop = () => {
    scroll.scrollToTop({
      duration: 5000,
      smooth: 'easeInOutQuart',
    });
  };
 
  render() {  
    
  

    return (
      <> 
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="/traning-and-placement" element={<PlacementForm />} />
            <Route path="/review" element={<Review />} />
            <Route path="/career" element={<Career />} />
          </Routes>
          <Footer />
          {/* <Chat /> */}
       
        </BrowserRouter> 
          
         <WhatsAppWidget
            phoneNo="9872711866"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={false}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt="Hi Team, is there any related service available ?"
            iconSize="40"
            iconColor="white"
            iconBgColor="#28a745"
            headerIcon={process.env.PUBLIC_URL + '/images/supports1.png'}
            headerIconColor="pink"
            headerTxtColor="black"
            headerBgColor="#28a745"
            headerTitle="Technical Team"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={<> Hi there 👋 <br /><br /> How can I help you? </>}
            footerBgColor="#999"
            placeholder="Type a message.."
            btnBgColor="#28a745"
            btnTxt="Start Chat"
            btnTxtColor="black"
        />

        <button onClick={this.scrollToTop} className='onTop '><i className="fa fa-arrow-circle-up" aria-hidden="true"></i></button>
         
      </>
    );
  }
}
