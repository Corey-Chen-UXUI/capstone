import "./nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import PreferenceModal from "../preferenceModal/PreferenceModal";

function Nav() {
    const [modal, setModal] = useState(false);
    const handleOpenModal = () => {
        setModal(true);
    };

    const handleClosedModal = () => {
        setModal(false);
    };
    return (
        <div>
            {modal && <PreferenceModal onCancel={handleClosedModal} />}
            <section className="navbar">
                <h3 className="navbar__text" onClick={() => handleOpenModal()}>
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
