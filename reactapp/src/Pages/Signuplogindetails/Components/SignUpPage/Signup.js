import classes from "./signup.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dropdown } from "../Select/Select";
import img15 from '../../Assets/img15.jpg';
import { VscAccount } from 'react-icons/vsc';
import { IoMdLogIn } from "react-icons/io";
import axios from "axios";

function Signup() {
    let navigate = useNavigate();

    const options = [
        {
            value: 'employer',
            label: 'Employer',
        },
        {
            value: 'jobseeker',
            label: 'Job seeker',
        }
    ];
    
    const [formValues, setFormValues] = useState({
        fname: '',
        lname: '',
        email: '',
        psd: '',
        cpsd: '',
        role: 'Job seeker'
    });

    const [formErrors, setFormErrors] = useState({
        fname: '',
        lname: '',
        email: '',
        psd: '',
        cpsd: ''
        
    });

    const selectRole = (value) => {
        setFormValues({ ...formValues, ...{ 'role': value } });
    }

    const validateEmail = (email) => {

        const emailRegex = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
        return emailRegex.test(email);
    };

    const validateName = (name) => {

        const nameRegex = /^[A-Z][a-zA-Z]+$/ ;
        return nameRegex.test(name);
    }; 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        let errorMessage = '';
        if (name === 'email' && !validateEmail(value)) {
            errorMessage = 'Email format is invalid';
        } else if ((name === 'fname' || name === 'lname') && !validateName(value)) {
            errorMessage = 'Start with an uppercase letter & contain letters';
        } else if (name === 'psd'&& value.length < 8) {
            errorMessage = 'Password should be at least 8 characters';
        } else if (name === 'cpsd') {
            if(value.length < 8){
                errorMessage = 'Password should be at least 8 characters';
            }
            else if(formValues.psd!==value){
                errorMessage = "confirm password and password doesn't match";
            }
        }
        setFormErrors({ ...formErrors, [name]: errorMessage });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formErrors).every(error => error === '')) {
            console.log(formValues);
        
        } else {
            console.log("Form has errors, please correct them."); 
        } 
    }

    const [show, setShow]=useState(false)
    const [showw, setShoww]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    const handlerShow=()=>{
        setShoww(!showw)
    }

    const CheckUser=()=>{
        if (Object.values(formErrors).every(error => error === '')){   
        const apiuser="http://localhost:8080/user/check/"+formValues.email
        axios.get(apiuser)
                .then(res => {
                    if(!res.data){
                        const api ="http://localhost:8080/user/register"
                        axios.post(api,{
                            "first_name":formValues.fname,
                            "last_name":formValues.lname,
                            "email":formValues.email,
                            "password":formValues.psd,
                            "conform_password":formValues.cpsd
                        }) 
                        setFormValues({
                            fname: '',
                            lname: '',
                            email: '',
                            psd: '',
                            cpsd: '',
                            role: 'Job seeker'
                        })
                    }
                    else{
                        alert("Email already exists")
                    }    
                })
                .catch(err => (console.log(err)))
    };
}
    
    return (
        <div className={classes.main} style={{ backgroundImage: `url(${img15})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className={classes.bottom}>
                <form onSubmit={handleSubmit}>
                    <fieldset className={classes.field}>
                        <div >
                        <h3 className={classes.signupaccount}><VscAccount /></h3>
                            <h1 className={classes.signhead}>SignUp</h1>
                            <div className={classes.formlayout}>
                                <div>
                                    <label >Select a role</label>
                                    <Dropdown placeholder={'Select a role'} defaultValue={'Job seeker'} options={options} onChange={selectRole}  />
                                </div>

                                <label className={classes.lab}>First name</label>
                                <input className={classes.in1} name="fname" type="text" placeholder="First name" value={formValues.fname} onChange={handleInputChange} required="required"></input>
                                {formErrors.fname && <p className={classes.errorMessage}>{formErrors.fname}</p>}

                                <label className={classes.lab}>Last name</label>
                                <input className={classes.in2} name="lname" type="text" placeholder="Last name" value={formValues.lname} onChange={handleInputChange} required="required"></input>
                                {formErrors.lname && <p className={classes.errorMessage}>{formErrors.lname}</p>}

                                <label className={classes.lab}>Enter mail</label>
                                <input className={classes.in3} name="email" type="text" placeholder="Enter email" value={formValues.email} onChange={handleInputChange} required="required"></input>
                                {formErrors.email && <p className={classes.errorMessage}>{formErrors.email}</p>}

                                <label className={classes.lab}>Enter password</label>
                                <input className={classes.in4} name="psd" type={show?"text":"password"} placeholder="Enter password" value={formValues.psd} onChange={handleInputChange} required="required"></input>
                                <label  className={classes.showhide} onClick={handleShow}>{show?"Hide":"show"}</label>
                                {formErrors.psd && <p className={classes.errorMessage}>{formErrors.psd}</p>}
                               
                                <label className={classes.lab}>Enter confirm password</label>
                                <input className={classes.in5} name="cpsd" type={showw?"text":"password"} placeholder="Enter confirm password" value={formValues.cpsd} onChange={handleInputChange} required="required"></input>
                                <label  className={classes.showhide1} onClick={handlerShow}>{showw?"Hide":"show"}</label>
                                {formErrors.cpsd && <p className={classes.errorMessage}>{formErrors.cpsd}</p>}
                            </div>
                            <div className={classes.btnsContainer}>
                                <button className={classes.in6} type="submit"  value='SignUp' onClick={() => CheckUser()} ><span>Signup</span><span className={classes.signupsym}><IoMdLogIn /></span></button>
                                <button className={classes.in7} type="button" onClick={() => navigate("/login")}>Have an account? Login</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Signup;




