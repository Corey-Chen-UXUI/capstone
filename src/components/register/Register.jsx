import "./register.scss";
import { useState } from "react";
import Login from "../login/Login";
import axios from "axios";

const baseUrl = "http://localhost:5050";
const signupUrl = `${baseUrl}/signup`;

function Register(props) {
    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();

        axios
            .post(signupUrl, {
                username: e.target.username.value,
                name: e.target.name.value,
                password: e.target.password.value,
            })
            .then(() => {
                setIsSignedUp(true);
            });
    };

    const renderSignUp = () => (
        <div className="form-wrap">
            <h1 className="form__title">Sign Up</h1>
            <form onSubmit={handleSignup} className="form">
                <div className="form-group">
                    Username: <input type="text" name="username" required />
                </div>
                <div className="form-group">
                    Name: <input type="text" name="name" required />
                </div>
                <div className="form-group">
                    Password: <input type="password" name="password" required />
                </div>
                <button className="btn btn-primary" type="submit">
                    Signup
                </button>
            </form>
            <section className="form__link-wrap">
                <p className="form__text">Already have an account? &nbsp; </p>
                <a onClick={() => props.onFormSwitch("login")} className="form__link">
                    Log in
                </a>
            </section>
        </div>
    );
    if (!isSignedUp) return renderSignUp();

    return (
        <div>
            <Login />
        </div>
    );
}

export default Register;
