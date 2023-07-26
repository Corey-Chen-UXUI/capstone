import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import TestPage from "./pages/TestPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<WelcomePage />}></Route>
                    <Route path="/recipes" element={<HomePage />}></Route>
                    <Route path="recipes/:recipeId" element={<RecipeDetailPage />}></Route>
                    <Route path="/test" element={<TestPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
