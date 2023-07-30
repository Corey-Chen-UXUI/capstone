import WeeklyPlan from "../components/weeklyPlan/WeeklyPlan";
import Nav from "../components/nav/Nav";

function HomePage({ setGroceryList }) {
    //  allRecipes.length > 0
    return (
        <div>
            <Nav />
            <WeeklyPlan setGroceryList={setGroceryList} />
        </div>
    );
}

export default HomePage;
