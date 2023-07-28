import React, { useState, useEffect } from "react";
import WeeklyPlan from "../components/weeklyPlan/WeeklyPlan";

function HomePage() {
    //  allRecipes.length > 0
    return (
        <div>
            <WeeklyPlan />
        </div>
    );
}

export default HomePage;
