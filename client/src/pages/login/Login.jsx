import "./login.css";
import {useRef, useContext} from "react";
import {loginCall} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register")
  }

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user)

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialMedia</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialMedia.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox" >
          <form className="loginBox" onSubmit={handleClick}>
            <input 
            placeholder="Email" 
            type="email" 
            className="loginInput" 
            ref={email} 
            />
            <input 
            placeholder="Password" 
            type="password" 
            className="loginInput" 
            ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ?  <CircularProgress color="white" size="20px"/> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            </form>
            <button className="loginRegisterButton" onClick={ navigateToRegister }>
            {isFetching ?  <CircularProgress color="white" size="20px"/> : "Create a New Account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}