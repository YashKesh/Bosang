import React from 'react';

import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import About from './components/About'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
import Signup from './components/Signup';
import AboutUs from './components/Aboutus';
import Comingsoon from './components/Comingsoon';
import Conciergedesk from './components/Conceirgedesk';
import Footer from './components/Footer';
import Partnershipform from './components/Partnershipform';
import Helpcenter from './components/Helpcenter';
import Announcement from './components/Announcement';
import Debitcards from './components/Debitcards';


function App() {
  return (
    <>
     
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    
    
    <Route path="/about" element={<About/>} />
     <Route path="/Signin" element={<Signin/>} />
            
     <Route path="/signup" element={<Signup/>} />
     <Route path="/dashboard" element={<Comingsoon/>} />
     <Route path="/contact" element={<Conciergedesk/>} /> 
     <Route path="/helpcenter" element={<Helpcenter/>} /> 
     {/* <Route path="/partnership" element={<Partnershipform/>} />  */}
     <Route path="/announcement" element={<Announcement/>} /> 
     <Route path="/debitcard" element={<Debitcards/>} /> 
    </Routes>
    
    <Footer/>
     </Router>
     {/* <Home/> */}
     {/* <About></About>
   <Signin/> */}
  
     
     </>
 
  
    
  );
}

export default App;
