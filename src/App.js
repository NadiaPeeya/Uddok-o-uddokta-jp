import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home/Home';

import Japanese from './Pages/Japanese/Japanese';
import Research from './Pages/Research/Research';
import Training from './Pages/Training/Training';
import Consulting from './Pages/Consulting/Consulting';
import Funding from './Pages/Funding/Funding';
import News3 from './Pages/News3/News3';
import News2 from './Pages/News2/News2';
import News1 from './Pages/News1/News1';

AOS.init();
function App() {

  return (
    <div className="App">
    <Router>
  
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/home" element={<Home/>}/>
          <Route  path="/Japanese" element={<Japanese/>}/>
          <Route  path="/Research" element={<Research/>}/>
          <Route  path="/Training" element={<Training/>}/>
          <Route  path="/Consulting" element={<Consulting/>}/>
          <Route  path="/Funding" element={<Funding/>}/>
          <Route  path="/NewsBanner1" element={<News1/>}/>
          <Route  path="/NewsBanner2" element={<News2/>}/>
          <Route  path="/NewsBanner3" element={<News3/>}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
  
    </Router>
    </div>
  );
}

export default App;


