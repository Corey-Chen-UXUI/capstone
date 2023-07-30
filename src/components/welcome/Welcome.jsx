import "./welcome.scss";
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div>
            <Link to={"./recipes"}>
                <section className="welcome">
                    <section className="welcome__border">
                        <h1 className="welcome__title">Meal plan just for you</h1>
                    </section>
                </section>
            </Link>
        </div>
    );
}

export default Welcome;
