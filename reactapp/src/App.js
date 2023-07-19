import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Jobs from './Pages/JobDetails/Components/Jobs';
import JobDetails from './Pages/JobDetails/Components/JobDetails';
import AdminPage from "./Pages/Dashboard/Admin/Admin";
import HomePage from "./Pages/Signuplogindetails/Components/HomePage/HomePage";
import Login from "./Pages/Signuplogindetails/Components/LoginPage/Login";
import SignUpPage from "./Pages/Signuplogindetails/Components/SignUpPage/Signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import JobSearchPage from './Pages/JobSearch/JobSearchPage';
import Home1 from "./Pages/LandingPage/Components/Home";
import About from "./Pages/LandingPage/Components/About";
 import Service from "./Pages/LandingPage/Components/Service";
import Signup from "./Pages/LandingPage/Components/Signup";
import Contact from "./Pages/LandingPage/Components/Contact";
import Login1 from "./Pages/LandingPage/Components/Login";
import Errorpage from './Pages/LandingPage/Components/Errorpage';
import JobseekerDashboard from "./Pages/Dashboard/Jobseeker_Dashboard/JobseekerDashboard";
import Navbar from './Pages/PostJobAndEditJob/components/Navbar';
import Home from './Pages/PostJobAndEditJob/components/Home.js';
import AddJob from './Pages/PostJobAndEditJob/jobs/AddJob.js';
import EditJob from './Pages/PostJobAndEditJob/jobs/EditJob.js';
import ViewJob from './Pages/PostJobAndEditJob/jobs/ViewJob.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//adding comment
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>  
          {/* <Route exact path="/" element={<Jobs/>} />
          <Route exact path="/JobDetails/:id" element={<JobDetails/>} /> */}

          {/* <Route path='/' element = {<AdminPage/>}/> */}

          {/* <Route path='/' element ={<HomePage/>}/>
          <Route path='/signup' element ={<SignUpPage/>}/>  
          <Route path='/login' element ={<Login/>}/>  */}
          {/* <JobSearchPage /> */}
        {/* <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/*" element={<Errorpage/>}/> */}
        
          
        {/* <JobseekerDashboard /> */}
          
            <Route path="/empeditprofile" element={<EmployerEditProfile />} />
            <Route path="/empprofile/:id" element={<EmployerProfile />} />
        
          
            <Route path='/' element={<Home />}/>
            <Route path='/addjob' element={<AddJob />} />
            <Route path='/editjob/:id' element={<EditJob />} />
            <Route path='/viewjob/:id' element={<ViewJob />} />
          
       
           </Routes>  
           <ToastContainer /> 
      </Router>   
    </div>
  );
}

export default App;
