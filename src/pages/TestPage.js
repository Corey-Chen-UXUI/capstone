import React from "react";
import RecipeDetails from "../components/recipeDetails/RecipeDetails";
import CheckBox from "../components/checkbox/CheckBox";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";

function TestPage() {
    return (
        <div>
            <VideoPlayer width={100} />
            <CheckBox></CheckBox>
        </div>
    );
}

export default TestPage;
