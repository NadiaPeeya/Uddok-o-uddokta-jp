import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import React from "react";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom"
import Home from './Pages/Home/Home/Home';

import Japanese from './Pages/Japanese/Japanese';
import Research from './Pages/Research/Research';
import Training from './Pages/Training/Training';
import Consulting from './Pages/Consulting/Consulting';
import Funding from './Pages/Funding/Funding';
import News3 from './Pages/News3/News3';
import News2 from './Pages/News2/News2';
import News1 from './Pages/News1/News1';

import DonorForm from './Pages/DonorForm/DonorForm';
import InvestorForm from './Pages/InvestorForm/InvestorForm';
import MentorForm from './Pages/MentorForm/MentorForm';
import MemberForm from './Pages/MemberForm/MemberForm';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ViewMoreEvents from './Pages/ViewMoreEvents/ViewMoreEvents';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import SubscriberUser from './Pages/Dashboard/SubscriberUser/SubscriberUser';
import Blog from './Pages/Blog/Blog';
import BlogItem from './Pages/Blog/BlogItem/BlogItem';
import HistoryAndProfile from './Pages/HistoryAndProfile/HistoryAndProfile'



AOS.init();
function App() {

  return (
    <div className="App">
<AuthProvider>
<Router>
        <Switch>
          <PrivateRoute path="/Japanese">
          <Japanese/>
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          {/* <Route path="/register">
            <Register />
          </Route> */}
          <Route path="/Research">
          <Research/>
          </Route>
          <Route path="/Training">
          <Training/>
          </Route>
          <Route path="/Consulting">
          <Consulting/>
          </Route>
          <Route path="/Funding">
          <Funding/>
          </Route>
          <Route path="/NewsBanner1">
          <News1/>
          </Route>
          <Route path="/NewsBanner2">
          <News2/>
          </Route>
          <Route path="/NewsBanner3">
          <News3/>
          </Route>
          <Route path="/DonorForm">
          <DonorForm/>
          </Route>
          <Route path="/InvestorForm">
          <InvestorForm/>
          </Route>
          <Route path="/MentorForm">
          <MentorForm/>
          </Route>
          <Route path="/MemberForm">
          <MemberForm/>
          </Route>
          <Route path="/newsEvents/viewMore/:id">
          <ViewMoreEvents/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/history and profile">
          <HistoryAndProfile/>
          </Route>
          <Route path="/register">
          <Register/>
          </Route>
          <PrivateRoute path="/dashboard">
          <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/subscriberUser">
          <SubscriberUser/>
          </PrivateRoute>
          <Route path="/MemberForm">
          <MemberForm/>
          </Route>
          <Route path="/blogs">
          <Blog/>
          </Route>
          <Route path="/blogItem/:id">
          <BlogItem/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
</AuthProvider>







     
  
    
    </div>
  );
}

export default App;


