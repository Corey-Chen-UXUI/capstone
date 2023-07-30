import { useEffect, useState } from "react";
import GroceryList from "../components/groceryList/GroceryList";
import Nav from "../components/nav/Nav";

function GroceryListPage({ groceryList }) {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const recipes = localStorage.getItem("recipes");
        setRecipes(JSON.parse(recipes));
        console.log(JSON.parse(recipes));
    }, []);

    return (
        <div>
            <Nav />
            <GroceryList recipes={recipes} />
        </div>
    );
}

export default GroceryListPage;
