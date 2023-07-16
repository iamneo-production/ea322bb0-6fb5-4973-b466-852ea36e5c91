import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Jobs from './Pages/JobDetails/Components/Jobs';
// import JobDetails from './Pages/JobDetails/Components/JobDetails';
// import AdminPage from "./Pages/Dashboard/Admin/Admin";
// import HomePage from "./Pages/Signuplogindetails/Components/HomePage/HomePage";
// import Login from "./Pages/Signuplogindetails/Components/LoginPage/Login";
// import SignUpPage from "./Pages/Signuplogindetails/Components/SignUpPage/Signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import JobSearchPage from './Pages/JobSearch/JobSearchPage';
import EmployerEditProfile from './Pages/Employer/Components/EmployerEditProfile';
import EmployerProfile from './Pages/Employer/Components/EmployerProfile';
import Navbar from './Pages/PostJobAndEditJob/components/Navbar';
import Home from './Pages/PostJobAndEditJob/components/Home.js';
import AddJob from './Pages/PostJobAndEditJob/jobs/AddJob.js';
import EditJob from './Pages/PostJobAndEditJob/jobs/EditJob.js';
import ViewJob from './Pages/PostJobAndEditJob/jobs/ViewJob.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Routes> */}
          {/* <Route exact path="/" element={<Jobs/>} />
          <Route exact path="/JobDetails/:id" element={<JobDetails/>} /> */}

          {/* <Route path='/' element = {<AdminPage/>}/> */}

          {/* <Route path='/' element ={<HomePage/>}/>
          <Route path='/signup' element ={<SignUpPage/>}/>  
          <Route path='/login' element ={<Login/>}/>  */}
          {/* <Routes>
          <Route path="/empeditprofile" element={<EmployerEditProfile />} />
          <Route path="/empprofile/:id" element={<EmployerProfile />} />
          </Routes> */}
          {/*<JobSearchPage /> */}

        {/* </Routes> */}
        <Navbar />
          <Routes>
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
