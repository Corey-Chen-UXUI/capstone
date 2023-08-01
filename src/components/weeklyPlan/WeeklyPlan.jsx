import { Link } from "react-router-dom";
import "./weeklyPlan.scss";
import React, { useEffect, useState } from "react";
import recipe1 from "../../assets/images/recipe/skewer.jpg";
import PreferenceModal from "../preferenceModal/PreferenceModal";
import axios from "axios";

function WeeklyPlan({ setGroceryList }) {
    const [selectedFilters, setSelectedFilters] = useState(["Chicken"]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [selectedAllergy, setSelectedAllergy] = useState([]);
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        modal === true ? setModal(false) : setModal(true);
    };

    useEffect(() => {
        axios
            .get("http://localhost:5050/recipes/")
            .then((response) => {
                setAllRecipes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleFilterButtonClick = (selectedIngredient) => {
        console.log("HERE");
        console.log("HERE", selectedIngredient);
        if (selectedFilters?.includes(selectedIngredient)) {
            console.log("HEREEEEEE");
            let filters = selectedFilters.filter((filter) => filter !== selectedIngredient);
            setSelectedFilters(filters);
        } else {
            //After click an item, if it's not included in selectedFilter, add it to the selectIngredient
            //we have to use spreading operator ...selectedFilters, otherwise it will become [ [selectedFilters], selectedIngredient][]
            setSelectedFilters([...selectedFilters, selectedIngredient]);
        }
    };

    const handleFilterAllergyClick = (allergy) => {
        if (selectedAllergy?.includes(allergy)) {
            let filters = selectedAllergy.filter((filter) => filter !== allergy);
            setSelectedAllergy(filters);
        } else {
            //After click an item, if it's not included in selectedFilter, add it to the selectIngredient
            //we have to use spreading operator ...selectedAllergy, otherwise it will become [ [selectedAllergy], allergy][]
            setSelectedAllergy([...selectedAllergy, allergy]);
        }
    };

    console.log(selectedFilters); // this returns the clicked item list

    const filterRecipes = (selectedIngredients, recipes) => {
        let filteredRecipes = [];
        if (selectedIngredients.length > 0) {
            for (let ingredient of selectedIngredients) {
                for (let recipe of recipes) {
                    if (recipe.ingredients.includes(ingredient)) {
                        filteredRecipes.push(recipe);
                    }
                }
            }
        }

        console.log("selectedAllergy", selectedAllergy);
        //allergy remove
        if (selectedAllergy.length > 0) {
            for (let allergies of selectedAllergy) {
                for (let recipe of filteredRecipes) {
                    if (recipe.ingredients.includes(allergies)) {
                        filteredRecipes = filteredRecipes.filter((x) => {
                            return recipe.Id != recipe.id;
                        });
                    }
                }
            }
        }
        localStorage.setItem("recipes", JSON.stringify(filteredRecipes));
        return filteredRecipes;
    };

    // filterRecipes(selectedFilters, allRecipes);

    useEffect(() => {
        if (allRecipes.length > 0) {
            console.log(filterRecipes(selectedFilters, allRecipes));
        }
    }, [selectedFilters, selectedAllergy]);

    const Monday = [Math.floor(Math.random() * 21), Math.floor(Math.random() * 21), Math.floor(Math.random() * 21)];

    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    let num = Math.floor(Math.random() * array.length);
    let MondayOne = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let MondayTwo = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let MondayThree = array.splice(num, 1);

    num = Math.floor(Math.random() * array.length);
    let TuesdayOne = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let TuesdayTwo = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let TuesdayThree = array.splice(num, 1);

    num = Math.floor(Math.random() * array.length);
    let WednesdayOne = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let WednesdayTwo = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let WednesdayThree = array.splice(num, 1);

    num = Math.floor(Math.random() * array.length);
    let ThursdayOne = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let ThursdayTwo = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let ThursdayThree = array.splice(num, 1);

    num = Math.floor(Math.random() * array.length);
    let FridayOne = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let FridayTwo = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let FridayThree = array.splice(num, 1);

    num = Math.floor(Math.random() * array.length);
    let SaturdayOne = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let SaturdayTwo = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let SaturdayThree = array.splice(num, 1);

    num = Math.floor(Math.random() * array.length);
    let SundayOne = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let SundayTwo = array.splice(num, 1);
    num = Math.floor(Math.random() * array.length);
    let SundayThree = array.splice(num, 1);

    return (
        <div>
            {modal && (
                <PreferenceModal
                    handleFilterButtonClick={handleFilterButtonClick}
                    selectedFilters={selectedFilters}
                    selectedAllergy={selectedAllergy}
                    handleFilterAllergyClick={handleFilterAllergyClick}
                    onCancel={toggleModal}
                />
            )}

            <h1 className="calendar__header">Weekly Menu</h1>
            <section className="calendar">
                <h3 className="calendar__link" onClick={toggleModal}>
                    Edit
                </h3>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Monday</h2>
                    <section className="calendar__recipes">
                        <Link to={`/recipes/${allRecipes[MondayOne]?.id}`}>
                            <img
                                src={allRecipes[MondayOne]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[MondayTwo]?.id}`}>
                            <img
                                src={allRecipes[MondayTwo]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[MondayThree]?.id}`}>
                            <img
                                src={allRecipes[MondayThree]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Tuesday</h2>
                    <section className="calendar__recipes">
                        <Link to={`/recipes/${allRecipes[TuesdayOne]?.id}`}>
                            <img
                                src={allRecipes[TuesdayOne]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[TuesdayTwo]?.id}`}>
                            <img
                                src={allRecipes[TuesdayTwo]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[TuesdayThree]?.id}`}>
                            <img
                                src={allRecipes[TuesdayThree]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Wednesday</h2>
                    <section className="calendar__recipes">
                        <Link to={`/recipes/${allRecipes[WednesdayOne]?.id}`}>
                            <img
                                src={allRecipes[WednesdayOne]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[WednesdayTwo]?.id}`}>
                            <img
                                src={allRecipes[WednesdayTwo]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[WednesdayThree]?.id}`}>
                            <img
                                src={allRecipes[WednesdayThree]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Thursday</h2>
                    <section className="calendar__recipes">
                        <Link to={`/recipes/${allRecipes[ThursdayOne]?.id}`}>
                            <img
                                src={allRecipes[ThursdayOne]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[ThursdayTwo]?.id}`}>
                            <img
                                src={allRecipes[ThursdayTwo]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[ThursdayThree]?.id}`}>
                            <img
                                src={allRecipes[ThursdayThree]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Friday</h2>
                    <section className="calendar__recipes">
                        <Link to={`/recipes/${allRecipes[FridayOne]?.id}`}>
                            <img
                                src={allRecipes[FridayOne]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[FridayTwo]?.id}`}>
                            <img
                                src={allRecipes[FridayTwo]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[FridayThree]?.id}`}>
                            <img
                                src={allRecipes[FridayThree]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Saturday</h2>
                    <section className="calendar__recipes">
                        <Link to={`/recipes/${allRecipes[SaturdayOne]?.id}`}>
                            <img
                                src={allRecipes[SaturdayOne]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[SaturdayTwo]?.id}`}>
                            <img
                                src={allRecipes[SaturdayTwo]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[SaturdayThree]?.id}`}>
                            <img
                                src={allRecipes[SaturdayThree]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Sunday</h2>
                    <section className="calendar__recipes">
                        <Link to={`/recipes/${allRecipes[SundayOne]?.id}`}>
                            <img
                                src={allRecipes[SundayOne]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[SundayTwo]?.id}`}>
                            <img
                                src={allRecipes[SundayTwo]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                        <Link to={`/recipes/${allRecipes[SundayThree]?.id}`}>
                            <img
                                src={allRecipes[SundayThree]?.image_url}
                                className="calendar__recipe"
                                alt="alt-palceholder"
                            />
                        </Link>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default WeeklyPlan;
