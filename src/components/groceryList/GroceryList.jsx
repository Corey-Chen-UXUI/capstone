import "./groceryList.scss";
import CheckBox from "../checkbox/CheckBox";

function GroceryList({ recipes }) {
    return (
        <div>
            <h1 className="header">Grocery List</h1>
            <section className="grocery">
                {recipes.map((recipe) => {
                    return (
                        <>
                            <h2 className="grocery__title" key={recipe.id}>
                                {recipe.name}
                            </h2>
                            {recipe.ingredients.map((ingredient, id) => {
                                return (
                                    <>
                                        <CheckBox groceryitem={ingredient} key={id} />
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
