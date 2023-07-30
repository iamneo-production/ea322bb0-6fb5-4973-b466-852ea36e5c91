import "./index.css";
import { useState } from "react";
import employerService from "../../services/employerService";
import jobSeekerService from "../../services/jobSeekerService";
import { useNavigate } from "react-router-dom";
const Registration = ({ toast }) => {
  const isEmployer = localStorage.getItem("role") === "employer";
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [employerData, setEmployerData] = useState({
    name: "",
    location: "",
    description: "",
    userId: Number(userId),
  });
  const [jobSeekerData, setjobSeekerData] = useState({
    name: "",
    location: "",
    experience: "",
    skills: "",
    userId: Number(userId),
  });
  function onRegister(status) {
    if (status >= 200 && status < 300) {
      toast.success("Registration Successful");
      isEmployer ? navigate("/employer") : navigate("/job-seeker");
    } else {
      toast.error("Registration Failed");
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    isEmployer
      ? setEmployerData({ ...employerData, [name]: value })
      : setjobSeekerData({ ...jobSeekerData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    isEmployer
      ? employerService.createEmployer(employerData, onRegister)
      : jobSeekerService.createJobSeeker(jobSeekerData, onRegister);
  };
  return (
    <>
      <div className="container">
        <div className="registration-card">
          <div className="registration-card-image ">
            <h2 className="registration-card-heading">
              Registration
              <small className="registration-small">
                Lets fill in some details
              </small>
            </h2>
          </div>
          <form className="registration-card-form" onSubmit={handleSubmit}>
            {isEmployer ? (
              <>
                <div className="registration-input">
                  <input
                    type="text"
                    className="registration-input-field"
                    name="name"
                    required
                    onChange={handleInputChange}
                  />
                  <label className="registration-input-label" htmlFor="name">
                    Name
                  </label>
                </div>
                <div className="registration-input">
                  <input
                    type="text"
                    className="registration-input-field"
                    required
                    name="location"
                    onChange={handleInputChange}
                  />
                  <label
                    className="registration-input-label"
                    htmlFor="location"
                  >
                    Location
                  </label>
                </div>
                <div className="registration-input">
                  <textarea
                    className="registration-text-area"
                    name="description"
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    className="registration-text-area-label description"
                    htmlFor="description"
                  >
                    Description
                  </label>
                </div>
              </>
            ) : (
              <>
                <div className="registration-input">
                  <input
                    type="text"
                    className="registration-input-field"
                    name="name"
                    required
                    onChange={handleInputChange}
                  />
                  <label className="registration-input-label" htmlFor="name">
                    Name
                  </label>
                </div>
                <div className="registration-input">
                  <input
                    type="text"
                    className="registration-input-field"
                    required
                    name="location"
                    onChange={handleInputChange}
                  />
                  <label
                    className="registration-input-label"
                    htmlFor="location"
                  >
                    Location
                  </label>
                </div>
                <div className="registration-input">
                  <textarea
                    className="registration-text-area"
                    name="experience"
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    className="registration-text-area-label description"
                    htmlFor="experience"
                  >
                    Experience
                  </label>
                </div>
                <div className="registration-input">
                  <textarea
                    className="registration-text-area"
                    name="skills"
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    className="registration-text-area-label description"
                    htmlFor="skills"
                  >
                    Skills
                  </label>
                </div>
              </>
            )}
            <div className="registration-action">
              <button className="registration-action-button">Register</button>
            </div>
          </form>
          <div className="registration-card-info">
            <p>
              By signing up you are agreeing to our{" "}
              <a href="#" className="registration-terms">
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
