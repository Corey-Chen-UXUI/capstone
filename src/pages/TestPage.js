import React from "react";
import RecipeDetails from "../components/recipeDetails/RecipeDetails";
import CheckBox from "../components/checkbox/CheckBox";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import LoginModal from "../components/loginModal/LoginModal";

function TestPage() {
    return (
        <div>
            <LoginModal></LoginModal>
            <VideoPlayer width={100} />
            <CheckBox></CheckBox>
        </div>
    );
}

export default TestPage;
