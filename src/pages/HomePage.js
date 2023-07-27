import React, { useState, useEffect } from "react";
import PreferenceModal from "../components/preferenceModal/PreferenceModal";

function HomePage() {
    const apiURL = "http://localhost:5050/recipes/recipes-all";
    return (
        <div>
            <PreferenceModal />
        </div>
    );
}

export default HomePage;
