import "./App.scss";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import TestPage from "./pages/TestPage";
import GroceryListPage from "./pages/GroceryListPage";

function App() {
    // const baseURL = "http://localhost:5050/recipes";

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<WelcomePage />}></Route>
                    <Route path="/recipes" element={<HomePage />}></Route>
                    <Route path="recipes/:recipeId" element={<RecipeDetailPage />}></Route>
                    <Route path="home" element={<Navigate to="/" />}></Route>
                    <Route path="/test" element={<TestPage />}></Route>
                    <Route path="/grocery" element={<GroceryListPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
