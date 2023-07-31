import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import TestPage from "./pages/TestPage";
import GroceryListPage from "./pages/GroceryListPage";
import Nav from "./components/nav/Nav";

function App() {
    const [groceryList, setGroceryList] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

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

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {" "}
                    <Route path="/" element={<WelcomePage />}></Route>
                    <Route
                        path="/recipes"
                        element={
                            <HomePage
                                setGroceryList={setGroceryList}
                                filterRecipes={filterRecipes}
                                handleFilterButtonClick={handleFilterButtonClick}
                                selectedFilters={selectedFilters}
                            />
                        }></Route>
                    <Route
                        path="recipes/:recipeId"
                        element={
                            <RecipeDetailPage
                                filterRecipes={filterRecipes}
                                handleFilterButtonClick={handleFilterButtonClick}
                            />
                        }></Route>
                    <Route
                        path="home"
                        element={
                            <Navigate
                                to="/"
                                filterRecipes={filterRecipes}
                                handleFilterButtonClick={handleFilterButtonClick}
                            />
                        }></Route>
                    <Route
                        path="/grocery"
                        element={
                            <GroceryListPage
                                groceryList={groceryList}
                                filterRecipes={filterRecipes}
                                handleFilterButtonClick={handleFilterButtonClick}
                            />
                        }></Route>
                    <Route
                        path="/test"
                        element={
                            <TestPage filterRecipes={filterRecipes} handleFilterButtonClick={handleFilterButtonClick} />
                        }></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
