import React, { useEffect, useState } from "react";
import "./preferenceModal.scss";

function PreferenceModal({ handleFilterButtonClick, selectedFilters }) {
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    let filters = ["Chicken", "Pork", "Shrimp", "Beef", "Fish", "Vegi"];
    let allergy = ["Shrimp", "Peach", "Peanuts or Nuts"];

    return (
        <div>
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

                        {/* testbelow */}
                        {filteredRecipes.map((recipes, idx) => (
                            <div key={`recipes-${idx}`} className="item">
                                <p>{filteredRecipes.name}</p>
                                <p className="category">{filteredRecipes.steps}</p>
                            </div>
                        ))}
                        {/* end of test */}
                    </section>
                    {/* allergic section */}
                    <h2 className="preference__title">What are you allergic to?</h2>
                    <section className="preference__filters">
                        <button type="checkbox" className="preference__filter">
                            Shrimp
                        </button>
                        <button type="checkbox" className="preference__filter">
                            Peach
                        </button>
                        <button type="checkbox" className="preference__filter">
                            Peanuts or nuts
                        </button>
                    </section>
                </section>
                <section className="preference__content">
                    <button className="preference__cta">Save setting</button>
                </section>
            </section>
        </div>
    );
}

export default PreferenceModal;
