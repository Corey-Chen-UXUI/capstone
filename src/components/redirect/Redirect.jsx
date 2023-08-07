import "./redirect.scss";
import { Link } from "react-router-dom";

function Redirect({ userInfo }) {
    console.log(userInfo);
    return (
        <div className="redirect">
            <h1 className="redirect__title">Welcome{userInfo.name}! You have been logged in.</h1>
            <p className="redirect__text">Click the button below to start your week calendar</p>
            <Link to="/recipes">
                <button className="btn btn-primary">See my calendar</button>
            </Link>
        </div>
    );
}

export default Redirect;
