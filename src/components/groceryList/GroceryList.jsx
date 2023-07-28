import "./groceryList.scss";

function GroceryList() {
    return (
        <div>
            <section className="grocery">
                <h1 className="grocery__header">Grocery List</h1>
                <section className="grocery__checkbox">
                    <input className="grocery__checkbox-box" type="checkbox" key={"1"} value="Shrimps" />
                    <span className="grocery__checkbox-label">Shrimp</span>
                </section>
            </section>
        </div>
    );
}

export default GroceryList;
