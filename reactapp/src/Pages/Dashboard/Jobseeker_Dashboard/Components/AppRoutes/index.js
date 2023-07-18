import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import AppliedJobs from "../../Pages/AppliedJobs";
/* import Resume from "../../Pages/Resume"; */
/* import Profile from "../../Pages/Profile"; */
/* import EditProfile from "../../Pages/EditProfile"; */


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/appliedJobs" element={<AppliedJobs />}></Route>
    {/*   <Route path="/profile" element={<Profile />}></Route> */}
     {/*  <Route path="/edit-profile" element={<EditProfile />}></Route>  
     */}
      {/* <Route path="/resume" element={<Resume />}></Route> */}
      
    </Routes>
  ); 
}
export default AppRoutes;