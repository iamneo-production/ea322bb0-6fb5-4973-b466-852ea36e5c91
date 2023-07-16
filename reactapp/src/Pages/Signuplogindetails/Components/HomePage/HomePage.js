import classes from './homepage.module.css'
import { useNavigate } from "react-router-dom";
import img4 from "../../Assets/img4.jpg";


function HomePage(){
    let navigate = useNavigate()
    function signhandler(){
        navigate("/signup")
    }
    function loginhandler(){
        navigate("/login")
    }
    return(
        <div className={classes.main} style={{backgroundImage:`url(${img4})`}}>
            <fieldset className={classes.top}>   
                <button className={classes.btn1} onClick={signhandler}>Signup</button> 
                <button className={classes.btn2} onClick={loginhandler}>login</button>
            </fieldset>    
        </div>   
    );
}

export default HomePage;