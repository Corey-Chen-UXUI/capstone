import { Link } from "react-router-dom";
import "./weeklyPlan.scss";
import React, { useEffect, useState } from "react";
import recipe1 from "../../assets/images/recipe/skewer.jpg";
import PreferenceModal from "../preferenceModal/PreferenceModal";
import axios from "axios";

function WeeklyPlan({ setGroceryList }) {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [selectedAllergy, setSelectedAllergy] = useState([]);

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
        console.log(selectedIngredient);
        if (selectedFilters.includes(selectedIngredient)) {
            let filters = selectedFilters.filter((filter) => filter !== selectedIngredient);
            setSelectedFilters(filters);
        } else {
            //After click an item, if it's not included in selectedFilter, add it to the selectIngredient
            //we have to use spreading operator ...selectedFilters, otherwise it will become [ [selectedFilters], selectedIngredient][]
            setSelectedFilters([...selectedFilters, selectedIngredient]);
        }
    };
    console.log(selectedFilters); // this returns the clicked item list

    const filterRecipes = (selectedIngredients, recipes) => {
        const filteredRecipes = [];
        for (let ingredient of selectedIngredients) {
            for (let recipe of recipes) {
                if (recipe.ingredients.includes(ingredient)) {
                    filteredRecipes.push(recipe);
                }
                console.log(recipe.ingredients.includes(ingredient));
            }
        }
        //allergy remove
        // for (let allergies of selectedAllergy) {
        //     for (let recipe of recipes) {
        //         if (recipe.ingredients.includes(allergies)) {
        //             filteredRecipes.remove(recipe);
        //         }
        //     }
        // }
        localStorage.setItem("recipes", JSON.stringify(filteredRecipes));
        return filteredRecipes;
    };
    useEffect(() => {
        if (allRecipes.length > 0) {
            console.log(filterRecipes(selectedFilters, allRecipes));
        }
    }, [selectedFilters]);
    // console.log(allRecipes);
    // console.log(selectedFilters);

    return (
        <div>
            <PreferenceModal handleFilterButtonClick={handleFilterButtonClick} selectedFilters={selectedFilters} />
            <h1 className="calendar__header">Weekly Menu</h1>
            <section className="calendar">
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Monday - date</h2>
                    <section className="calendar__recipes">
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Tuesday - date</h2>
                    <section className="calendar__recipes">
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Wednesday - date</h2>
                    <section className="calendar__recipes">
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Thursday - date</h2>
                    <section className="calendar__recipes">
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Friday - date</h2>
                    <section className="calendar__recipes">
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Saturday - date</h2>
                    <section className="calendar__recipes">
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                    </section>
                </section>
                <section className="calendar__day">
                    <h2 className="calendar__day-title">Sunday - date</h2>
                    <section className="calendar__recipes">
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                        <img src={recipe1} className="calendar__recipe" alt="alt-palceholder" />
                    </section>
                </section>
            </section>
        </div>
    );
}

export default WeeklyPlan;
