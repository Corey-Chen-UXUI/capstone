import "./preferenceModal.scss";

function PreferenceModal() {
    return (
        <div>
            <section className="preference">
                <h1 className="preference__header">Preference</h1>
                <section className="preference__image"></section>
                {/* preference */}
                <section className="preference__content">
                    <h2 className="preference__title">What main ingredient do you like?</h2>
                    <section className="preference__filters">
                        <button type="checkbox" className="preference__filter">
                            Chicken
                        </button>
                        <button type="checkbox" className="preference__filter">
                            Pork
                        </button>
                        <button type="checkbox" className="preference__filter">
                            Shrimp
                        </button>
                        <button className="preference__filter">Beef</button>
                        <button className="preference__filter">Fish</button>
                    </section>
                    {/* allergic section */}
                    <h2 className="preference__title">What are you allergic to?</h2>
                    <section className="preference__filters">
                        <button type="checkbox" className="preference__filter">
                            Shrimp
                        </button>
                        <button type="checkbox" className="preference__filter">
                            Peach
                        </button>
                        <button type="checkbox" className="preference__filter">
                            Peanuts or nuts
                        </button>
                    </section>
                </section>
                <section className="preference__content">
                    <button className="preference__cta">Save setting</button>
                </section>
            </section>
        </div>
    );
}

export default PreferenceModal;
