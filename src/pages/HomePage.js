import WeeklyPlan from "../components/weeklyPlan/WeeklyPlan";
import Nav from "../components/nav/Nav";

function HomePage({ setGroceryList, filterRecipes, handleFilterButtonClick, selectedFilters }) {
    //  allRecipes.length > 0
    return (
        <div>
            <Nav
                handleFilterButtonClick={() => {
                    handleFilterButtonClick();
                }}
                filterRecipes={filterRecipes}
                selectedFilters={selectedFilters}
            />
            <WeeklyPlan
                setGroceryList={setGroceryList}
                handleFilterButtonClick={handleFilterButtonClick}
                filterRecipes={filterRecipes}
            />
        </div>
    );
}

export default HomePage;
