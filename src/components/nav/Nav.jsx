import "./nav.scss";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <section className="navbar">
                <Link to="">
                    <h3 className="navbar__link">Preference</h3>
                </Link>
                <Link to="">
                    <h3 className="navbar__link">Grocery</h3>
                </Link>
                <Link to="">
                    <h3 className="navbar__link">Weekly Menu</h3>
                </Link>
            </section>
        </div>
    );
}

export default Nav;
