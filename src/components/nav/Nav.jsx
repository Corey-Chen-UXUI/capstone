import "./nav.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import PreferenceModal from "../preferenceModal/PreferenceModal";

function Nav(filterRecipes, handleFilterButtonClick, selectedFilters) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        modal === true ? setModal(false) : setModal(true);
    };

    return (
        <div>
            <section className="navbar">
                <NavLink to="/grocery">
                    <h3 className="navbar__text">Grocery</h3>
                </NavLink>
                <NavLink to="/recipes">
                    <h3 className="navbar__text">Weekly Menu</h3>
                </NavLink>
            </section>
        </div>
    );
}

export default Nav;
