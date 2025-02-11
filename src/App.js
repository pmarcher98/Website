import './App.css';
import React from 'react';

import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Testimonial,
} from "./pages/index";
import Footer from "./components/common/Footer";


export default function App() {
  return (
    <>
      <div> 
        <Router>
          <Header />
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/*" element= {<PageNotFound />} />
            <Route path="/booking" element= {<Booking />} />
            <Route path="/testimonial" element= {<Testimonial />} />
            <Route path="/about" element= {<AboutUs />} />
            <Route path="/contact" element= {<Contact />} />
            <Route path="/rooms" element= {<Room />} />
            <Route path="/services" element= {<Services />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
