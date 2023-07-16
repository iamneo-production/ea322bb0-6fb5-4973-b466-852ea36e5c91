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
          <Routes>
          <Route path="/empeditprofile" element={<EmployerEditProfile />} />
          <Route path="/empprofile/:id" element={<EmployerProfile />} />
          </Routes>
          {/*<JobSearchPage /> */}

        {/* </Routes> */}
      </Router>   
    </div>
  );
}

export default App;
