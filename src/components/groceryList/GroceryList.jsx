import "./groceryList.scss";
import CheckBox from "../checkbox/CheckBox";
import { Link } from "react-router-dom";

function GroceryList({ recipes }) {
    return (
        <div>
            <h1 className="header">Grocery List</h1>
            <section className="grocery">
                {recipes.map((recipe) => {
                    return (
                        <>
                            <Link to={`/recipes/${recipe.id}`}>
                                <h2 className="grocery__title" key={recipe.id}>
                                    {recipe.name}
                                </h2>
                            </Link>
                            {recipe.ingredients.map((ingredient) => {
                                return (
                                    <>
                                        <CheckBox groceryitem={ingredient} />
                                    </>
                                );
                            })}
                        </>
                    );
                })}
            </section>
        </div>
    );
}

export default GroceryList;
