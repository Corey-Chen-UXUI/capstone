import React, { useEffect, useState } from "react";
import "./preferenceModal.scss";

function PreferenceModal() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    // const [filteredRecipes, setFilteredRecipes] = useState(recipes);
    let filters = ["chicken", "pork", "shrimp", "beef", "fish"];
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:5050/recipes/")
    //         .then((response) => {
    //             console.log(response.data);
    //             setFilteredRecipes(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    const handleFilterButtonClick = (selectedIngredient) => {
        if (selectedFilters.includes(selectedIngredient)) {
            let filters = selectedFilters.filter((el) => el !== selectedIngredient);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedIngredient]);
        }
    };
    // useEffect(() => {
    //     filterRecipes();
    // }, [selectedFilters]);

    return (
        <div>
            <section className="preference">
                <h1 className="preference__header">Preference</h1>
                <section className="preference__image"></section>
                {/* preference */}
                <section className="preference__content">
                    <h2 className="preference__title">What main ingredient do you like?</h2>
                    <section className="preference__filters">
                        {filters.map((category, idx) => (
                            <button
                                name="likes"
                                className={`preference__filter${selectedFilters?.includes(category) ? "-active" : ""}`}
                                onClick={() => handleFilterButtonClick(category)}
                                key={`filters-${idx}`}>
                                {category}
                            </button>
                        ))}

                        {/* <button name="likes" className="preference__filter">
                            Pork
                        </button>
                        <button name="likes" className="preference__filter">
                            Shrimp
                        </button>
                        <button name="likes" className="preference__filter">
                            Beef
                        </button>
                        <button name="likes" className="preference__filter">
                            Fish
                        </button> */}
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
