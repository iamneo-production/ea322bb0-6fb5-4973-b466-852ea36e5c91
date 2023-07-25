import "../Styles/HomeStyles.css";
import img1 from "../Assert/Image/img1.jpeg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Service";
import Contact1 from "./Contact";
import Feedback from "./Feedback";

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div className='hero-container'>
     <img src={img1} alt="BigCo Inc. logo"/>  
        <h1>Find Your Dream Job Today</h1>
        <p>Job Portal is a platform where individuals can find their dream job.     We offer a user-friendly interface to search for jobs by location, job title, and industry. Create a profile and apply for jobs with ease. Join Job Portal today and make your career dreams a reality.</p>
      </div>
      <div>
      <Menu></Menu>
      <Contact1></Contact1>
      <Feedback></Feedback>
      <Footer/>
      </div>
    </>
  );
}

export default Home;
