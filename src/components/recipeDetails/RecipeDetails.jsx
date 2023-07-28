import "./recipeDetails.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import chevron from "../../assets/images/icons/chevron.png";

function RecipeDetails() {
    const apiUrl = "http://localhost:5050/recipes";
    const [selectedRecipes, setSelectedRecipes] = useState([]);
    const { recipeId } = useParams();
    const [clicked, setClicked] = useState(false);

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
    console.log(selectedRecipes);
    // const toggle = (i) => {
    //     if (clicked === i) {
    //         return setClicked(null);
    //     }
    //     setClicked(i);
    // };

    // const [opened, setOpened] = useState(null);
    // const toggle = (event) => {
    //     if (opened == event) {
    //         return setOpened(null);
    //     }
    //     setOpened(event);
    // };

    if (!selectedRecipes) {
        return <p>Loading 2</p>;
    }

    return (
        <div>
            <section className="recipe">
                <h1 className="recipe__header">{selectedRecipes.name}</h1>
                <section className="recipe__content">
                    <section className="recipe__image" alt="recipe-image"></section>
                    {/* accordion section */}
                    <section className="wrapper">
                        <section className="accordion" onClick={() => setClicked(!clicked)}>
                            <section className="accordion__title">
                                <h2 className="accordion__title-text">Description</h2>
                                <img
                                    className={clicked ? `accordion__arrow-close` : `accordion__arrow-open`}
                                    alt="chevron"
                                    src={chevron}
                                />
                            </section>
                            {clicked && (
                                <section className="accordion__content">
                                    <p className="accordion__content-recipe">{selectedRecipes.description}</p>
                                </section>
                            )}
                        </section>
                        {/* accordion section */}
                        <section className="accordion">
                            <section className="accordion__title">
                                <h2 className="accordion__title-text">Ingredients</h2>
                                <img className="accordion__arrow-close" alt="chevron" src={chevron} />
                            </section>
                            <section className="accordion__content">
                                <p className="accordion__content-recipe">{selectedRecipes.ingredients}</p>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default RecipeDetails;
