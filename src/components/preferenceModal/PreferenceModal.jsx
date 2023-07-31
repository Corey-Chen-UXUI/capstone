import React, { useEffect, useState } from "react";
import "./preferenceModal.scss";

function PreferenceModal({ handleFilterButtonClick, selectedFilters, selectedAllergy, onCancel }) {
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    console.log(handleFilterButtonClick);
    let filters = ["Chicken", "Pork", "Beef", "Fish", "Vegi"];
    let allergy = ["Shrimp", "Peach", "Peanuts or Nuts"];

    return (
        <div>
            <section className="overlay" onClick={onCancel}></section>
            <section className="preference">
                <h1 className="preference__header">Preference</h1>
                <section className="preference__image"></section>
                {/* preference */}
                <section className="preference__content">
                    <h2 className="preference__title">What main ingredient do you like?</h2>
                    <section className="preference__filters">
                        {filters.map((ingredient, idx) => (
                            <button
                                name="likes"
                                className={`preference__filter${
                                    selectedFilters?.includes(ingredient) ? "-active" : ""
                                }`}
                                onClick={() => handleFilterButtonClick(ingredient)}
                                key={`filters-${idx}`}>
                                {ingredient}
                            </button>
                        ))}
                    </section>
                    {/* allergic section */}
                    <h2 className="preference__title">What are you allergic to?</h2>
                    <section className="preference__filters">
                        {allergy.map((ingredient, idx) => (
                            <button
                                name="allergy"
                                className={`preference__filter${
                                    selectedFilters?.includes(ingredient) ? "-active" : ""
                                }`}
                                onClick={() => handleFilterButtonClick(ingredient)}
                                key={`allergy-${idx}`}>
                                {ingredient}
                            </button>
                        ))}
                    </section>
                </section>
                <section className="preference__content">
                    <button className="preference__cta" onClick={onCancel}>
                        Save setting
                    </button>
                </section>
            </section>
        </div>
    );
}

export default PreferenceModal;
