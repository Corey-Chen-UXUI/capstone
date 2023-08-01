import "./recipeDetails.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import time from "../../assets/images/icons/time.png";
import axios from "axios";
import play from "../../assets/images/icons/play-video.png";
import Acordion from "../accordion/Accordion";

function RecipeDetails() {
    const apiUrl = "http://localhost:5050/recipes";
    const [selectedRecipes, setSelectedRecipes] = useState([]);
    const { recipeId } = useParams();
    // const [clicked, setClicked] = useState(false);

    useEffect(() => {
        axios
            .get(`${apiUrl}/${recipeId}`)
            .then((response) => {
                console.log(response.data);
                setSelectedRecipes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [recipeId]);

    if (!selectedRecipes) {
        return <p>Loading recipe</p>;
    }

    return (
        <div>
            <section className="recipe">
                <h1 className="recipe__header">{selectedRecipes.name}</h1>
                <section className="recipe__video" href="https://youtu.be/kKiYVLIk_9s"></section>
                <section className="recipe__content">
                    <section className="recipe__image" alt="recipe-image">
                        <img className="recipe__videoimage" src={selectedRecipes.image_url} />
                        <section className="recipe__overlay"></section>
                        <img className="recipe__playvideo" src={play} />
                    </section>
                    {/* accordion section */}
                    <Acordion title="Description" content={selectedRecipes.description}></Acordion>
                    <Acordion title="Ingredients" content={selectedRecipes.ingredients}></Acordion>
                    <Acordion title="Steps" content={selectedRecipes.steps}></Acordion>
                    <Acordion title="Prep Time" content={selectedRecipes.prep_time}></Acordion>
                    <Acordion title="Cook Time" content={selectedRecipes.cook_time}></Acordion>
                    <Acordion title="Total Time" content={selectedRecipes.total_time}></Acordion>
                    <Acordion title="Serving" content={selectedRecipes.servings}></Acordion>
                </section>
            </section>
        </div>
    );
}

export default RecipeDetails;
