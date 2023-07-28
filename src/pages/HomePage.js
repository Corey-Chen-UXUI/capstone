import React, { useState, useEffect } from "react";
import WeeklyPlan from "../components/weeklyPlan/WeeklyPlan";

function HomePage({ setGroceryList }) {
    //  allRecipes.length > 0
    return (
        <div>
            <WeeklyPlan setGroceryList={setGroceryList} />
        </div>
    );
}

export default HomePage;
