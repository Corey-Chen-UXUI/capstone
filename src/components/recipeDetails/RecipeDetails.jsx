import "./recipeDetails.scss";
import { useState } from "react";
import chevron from "../../assets/images/icons/chevron.png";
function RecipeDetails() {
    const apiUrl = "http://localhost:5050/recipes/";

    // const [opened, setOpened] = useState(null);
    // const toggle = (event) => {
    //     if (opened == event) {
    //         return setOpened(null);
    //     }
    //     setOpened(event);
    // };
    return (
        <div>
            <section className="recipe">
                <h1 className="recipe__header">Dish Name Placeholder</h1>
                <section className="recipe__content">
                    <section className="recipe__image" alt="recipe-image"></section>
                    {/* accordion section */}
                    <section className="accordion">
                        <section className="accordion__title">
                            <h2 className="accordion__title-text">Accordion title</h2>
                            <img className="accordion__arrow-close" alt="chevron" src={chevron} />
                        </section>
                        <section className="accordion__content">
                            <p className="accordion__content-recipe">
                                Placeholder text :is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets conta
                            </p>
                        </section>
                    </section>
                    {/* accordion section */}
                    <section className="accordion">
                        <section className="accordion__title">
                            <h2 className="accordion__title-text">Accordion title</h2>
                            <img className="accordion__arrow-close" alt="chevron" src={chevron} />
                        </section>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default RecipeDetails;
