import "./nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import PreferenceModal from "../preferenceModal/PreferenceModal";

function Nav(filterRecipes, handleFilterButtonClick, selectedFilters) {
    const [modal, setModal] = useState(false);
    // const handleOpenModal = () => {
    //     setModal(true);
    // };

    // const handleClosedModal = () => {
    //     setModal(false);
    // };
    const toggleModal = () => {
        modal === true ? setModal(false) : setModal(true);
    };

    return (
        <div>
            {modal && (
                <PreferenceModal
                    onCancel={toggleModal}
                    handleFilterButtonClick={handleFilterButtonClick}
                    selectedFilters={selectedFilters}
                />
            )}
            <section className="navbar">
                <h3 className="navbar__text" onClick={toggleModal}>
                    Preference
                </h3>
                <Link to="/grocery">
                    <h3 className="navbar__text">Grocery</h3>
                </Link>
                <Link to="/recipes">
                    <h3 className="navbar__text">Weekly Menu</h3>
                </Link>
            </section>
        </div>
    );
}

export default Nav;
