import Login from "../components/login/Login";
import { useState } from "react";
import Register from "../components/register/Register";

function AuthPage() {
    const [currentForm, setCurrentForm] = useState("login");

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };
    return (
        <div>
            {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
        </div>
    );
}

export default AuthPage;
