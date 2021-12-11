import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home/Home';

import Japanese from './Pages/Japanese/Japanese';

AOS.init();
function App() {

  return (
    <div className="App">
    <Router>
  
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/home" element={<Home/>}/>
          <Route  path="/Japanese" element={<Japanese/>}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
  
    </Router>
    </div>
  );
}

export default App;


