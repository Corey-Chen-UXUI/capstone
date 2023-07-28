import "./App.scss";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import TestPage from "./pages/TestPage";
import GroceryListPage from "./pages/GroceryListPage";
import Navigation from "./components/nav/Nav";

function App() {
    const [groceryList, setGroceryList] = useState([]);
    console.log(groceryList);
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<WelcomePage />}></Route>
                    <Route path="/recipes" element={<HomePage setGroceryList={setGroceryList} />}></Route>
                    <Route path="recipes/:recipeId" element={<RecipeDetailPage />}></Route>
                    <Route path="home" element={<Navigate to="/" />}></Route>
                    <Route path="/test" element={<TestPage />}></Route>
                    <Route path="/grocery" element={<GroceryListPage groceryList={groceryList} />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
