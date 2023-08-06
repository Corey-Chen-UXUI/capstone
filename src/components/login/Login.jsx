import "./login.scss";
import { useState } from "react";
import avator from "../../assets/images/avator-login.png";
import Profile from "../../pages/Profile";
import axios from "axios";

const baseUrl = "http://localhost:5050";
const loginUrl = `${baseUrl}/login`;

function Login(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginError, setIsLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        axios
            .post(loginUrl, {
                username: e.target.username.value,
                password: e.target.password.value,
            })
            .then((response) => {
                sessionStorage.setItem("JWTtoken", response.data.token);

                setIsLoggedIn(true);
                setIsLoginError(false);
                setErrorMessage("");
            })
            .catch((error) => {
                setIsLoginError(true);
                setErrorMessage(error.response.data.error.message);
            });
    };

    const renderLogin = () => (
        <div className="form-wrap">
            <img className="login-avator" src={avator} alt="login-avator" />
            <h1 className="form__title">Login</h1>
            {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>}
            <form onSubmit={handleLogin} className="form">
                <div className="form-group">
                    Username: <input type="text" name="username" required />
                </div>
                <div className="form-group">
                    Password: <input type="password" name="password" required />
                </div>
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
            </form>
            <section className="form__link-wrap">
                <p className="form__text"> New user? &nbsp; </p>{" "}
                <p className="form__link" onClick={() => props.onFormSwitch("register")}>
                    Create an account
                </p>
            </section>
        </div>
    );

    // Handle the Signup/Login
    if (!isLoggedIn) return renderLogin();

    return (
        <div>
            <Profile />
        </div>
    );
}

export default Login;
