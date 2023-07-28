import "./groceryList.scss";

function GroceryList({ recipes }) {
    return (
        <div>
            <section className="grocery">
                <h1 className="grocery__header">Grocery List</h1>
                {recipes.map((recipe) => {
                    return (
                        <>
                            <h2>{recipe.name}</h2>
                            {recipe.ingredients.map((ingredient) => {
                                return (
                                    <>
                                        <section className="grocery__checkbox">
                                            <input
                                                className="grocery__checkbox-box"
                                                type="checkbox"
                                                key={"1"}
                                                value="Shrimps"
                                            />
                                            <span className="grocery__checkbox-label">{ingredient}</span>
                                        </section>
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
