import Navbar from "../Components/Navbar";
import about from "../Assert/Image/about.jpg";
import "../Styles/About.css";
import Footer from "../Components/Footer";
function About() {
  return (
    <>
    <Navbar></Navbar>
    <div className="about">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${about})` }}
      ></div>
      <div className="rightSide">
        <h1> About Us</h1>
        <p>Welcome to JobPortal, your go-to destination for connecting talented individuals with rewarding career opportunities. We understand the significance of finding the right job or hiring the perfect candidate, and that's why we've created a comprehensive platform that simplifies and enhances the job search process.

At JobPortal, we strive to bridge the gap between job seekers and employers, empowering both parties to achieve their goals. Whether you're a skilled professional looking to advance your career or a company seeking top-notch talent, we're here to facilitate meaningful connections that drive success.

Our platform boasts a user-friendly interface and powerful features designed to streamline the job search experience. Job seekers can explore a vast array of industries, browse through a diverse range of job listings, and create personalized profiles that showcase their skills, experience, and aspirations.

For employers, JobPortal offers a robust recruitment solution. Our platform enables businesses of all sizes to create compelling job postings, attract qualified candidates, and manage the hiring process efficiently.</p>
      </div>
    </div>
 <Footer></Footer>
    </>
  );
}

export default About;

