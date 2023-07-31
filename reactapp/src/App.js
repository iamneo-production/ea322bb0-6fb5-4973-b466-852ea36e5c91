import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./Pages/Dashboard/Admin/Admin";
import Login from "./Pages/Signuplogindetails/Components/LoginPage/Login";
import SignUpPage from "./Pages/Signuplogindetails/Components/SignUpPage/Signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/LandingPage/Components/Home";
import Errorpage from "./Pages/LandingPage/Components/Errorpage";
import JobseekerDashboard from "./Pages/Dashboard/Jobseeker_Dashboard/JobseekerDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registration from "./Pages/Registration/Registration";
import EmployerDashboard from "./Pages/Dashboard/Employer_Dashboard/EmployerDashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login toast={toast} />} />
          <Route path="/signup" element={<SignUpPage toast={toast} />} />
          <Route path="/admin/dashboard" element={<AdminPage />} />
          <Route path="/employer" element={<EmployerDashboard />} />
          <Route path="/job-seeker" element={<JobseekerDashboard />} />
          <Route
            path="/registration"
            element={<Registration toast={toast} />}
          />
          <Route path="/*" element={<Errorpage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
