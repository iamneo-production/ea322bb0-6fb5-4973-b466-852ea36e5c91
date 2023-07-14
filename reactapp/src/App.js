import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Jobs from './Pages/JobDetails/Components/Jobs';
import JobDetails from './Pages/JobDetails/Components/JobDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Jobs/>} />
          <Route exact path="/JobDetails/:id" element={<JobDetails/>} />
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
