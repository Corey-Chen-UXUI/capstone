import React, { useEffect, useState } from "react";
import "./preferenceModal.scss";

function PreferenceModal({ handleFilterButtonClick, selectedFilters }) {
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    let filters = ["chicken", "pork", "shrimp", "beef", "fish"];

    //useEffect Below: when there is any change to [selectedFilters] and then it will run filtereRecipes();

    // const testRecipe = allRecipes[0];
    // console.log(testRecipe.ingredients);

    // //create a function return boolean if recipe has given ingredient or not
    // const hasOneIngredient = (ingredient, recipe) => {
    //     return recipe.ingredients.includes(ingredient);
    // };

    //filter is basically the selectedFilter

    //based on the selectedFilter we go through the api list
    // const filterRecipes = () => {
    //     if (selectedFilters.length > 0) {
    //         let tempRecipes = selectedFilters.map((selectedIngredient) => {
    //             let temp = allRecipes.filter((recipe) => allRecipes.main_ingredient === selectedIngredient);
    //             return temp;
    //             console.log(temp);
    //         });
    //         setFilteredRecipes(tempRecipes.flat());
    //     } else {
    //         setFilteredRecipes([...allRecipes]);
    //     }
    //     console.log(filteredRecipes);
    // };

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
