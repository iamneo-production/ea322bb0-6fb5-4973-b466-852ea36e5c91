import { FacebookOutlined, TwitterCircleFilled } from "@ant-design/icons";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import userService from "../../../../services/userService";
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function Signup({ toast }) {
  const navigate = useNavigate();
  function loginhandler() {
    navigate("/login");
  }
  const onRegister = (response) => {
    if (response === 200) {
      toast.success("Registration Successful !!!");
      navigate("/login");
    } else  {
      toast.error("Username Already Exists");
    } 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      username: e?.target?.username?.value,
      password: e?.target?.password?.value,
      role: e?.target?.role?.value,
    };

    userService.registerUser(formValues, onRegister);
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className="login-form-body">
        <div className="box-form">
          <div className="left">
            <div className="overlay">
              <h1>Virtusa Jobs</h1>
              <p>Making new job opportunities every day</p>
            </div>
          </div>
          <div className="right">
            <h5 className="signup-text">SignUp</h5>
            <p>
              Already have an account?{" "}
              <span className="create-account-option" onClick={loginhandler}>
                Login Here
              </span>{" "}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <select id="role" name="role" className="select">
                  <option value="jobseeker" className="select-option">
                    Job Seeker
                  </option>
                  <option value="employer" className="select-option">
                    Employer
                  </option>
                </select>
                <input
                  name="username"
                  type="email"
                  required="required"
                  placeholder="Enter your Email Id"
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                />
                <br />
                <div className="peye">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  name="password"
                  required="required"
                  // name="password"
                  // type="password"
                  // placeholder="Enter your Password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                <h2 className="eye" onClick={togglePasswordVisibility}>
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                </h2>
                </div>
              </div>

              <br />
              <button className="login-button">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
