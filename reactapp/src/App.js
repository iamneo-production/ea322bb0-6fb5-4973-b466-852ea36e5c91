import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Jobs from './Pages/JobDetails/Components/Jobs';
import JobDetails from './Pages/JobDetails/Components/JobDetails';
import AdminPage from "./Pages/Dashboard/Admin/Admin";
import Login from "./Pages/Signuplogindetails/Components/LoginPage/Login";
import SignUpPage from "./Pages/Signuplogindetails/Components/SignUpPage/Signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import JobSearchPage from './Pages/JobSearch/JobSearchPage';
import Home1 from "./Pages/LandingPage/Components/Home";
import About from "./Pages/LandingPage/Components/About";
 import Service from "./Pages/LandingPage/Components/Service";

import Contact from "./Pages/LandingPage/Components/Contact";

import Errorpage from './Pages/LandingPage/Components/Errorpage';
import JobseekerDashboard from "./Pages/Dashboard/Jobseeker_Dashboard/JobseekerDashboard";
//adding comment
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>  
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/login' element ={<Login/>}/>
          <Route path='/SignUpPage' element ={<SignUpPage/>}/>  
          <Route path="/*" element={<Errorpage/>}/>
          {/* <Route exact path="/" element={<Jobs/>} />
          <Route exact path="/JobDetails/:id" element={<JobDetails/>} /> */}

          {/* <Route path='/' element = {<AdminPage/>}/> */}

          {/* <JobSearchPage /> */}
        
        
          
        {/* <JobseekerDashboard /> */}
       
           </Routes>   
      </Router>   
    </div>
  );
}

export default App;
