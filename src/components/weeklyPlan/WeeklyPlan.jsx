import { Link } from "react-router-dom";
import "./weeklyPlan.scss";
import React, { useEffect, useState } from "react";
import recipe1 from "../../assets/images/recipe/skewer.jpg";
import PreferenceModal from "../preferenceModal/PreferenceModal";
import axios from "axios";

function WeeklyPlan({ setGroceryList }) {
  const [selectedFilters, setSelectedFilters] = useState(["Chicken"]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [selectedAllergy, setSelectedAllergy] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5050/recipes/")
      .then((response) => {
        setAllRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilterButtonClick = (selectedIngredient) => {
    console.log("HERE");
    console.log("HERE", selectedIngredient);
    if (selectedFilters?.includes(selectedIngredient)) {
      console.log("HEREEEEEE");
      let filters = selectedFilters.filter(
        (filter) => filter !== selectedIngredient
      );
      setSelectedFilters(filters);
    } else {
      //After click an item, if it's not included in selectedFilter, add it to the selectIngredient
      //we have to use spreading operator ...selectedFilters, otherwise it will become [ [selectedFilters], selectedIngredient][]
      setSelectedFilters([...selectedFilters, selectedIngredient]);
    }
  };

  const handleFilterAllergyClick = (allergy) => {
    if (selectedAllergy?.includes(allergy)) {
      let filters = selectedAllergy.filter((filter) => filter !== allergy);
      setSelectedAllergy(filters);
    } else {
      //After click an item, if it's not included in selectedFilter, add it to the selectIngredient
      //we have to use spreading operator ...selectedAllergy, otherwise it will become [ [selectedAllergy], allergy][]
      setSelectedAllergy([...selectedAllergy, allergy]);
    }
  };

  console.log(selectedFilters); // this returns the clicked item list

  const filterRecipes = (selectedIngredients, recipes) => {
    let filteredRecipes = [];
    if (selectedIngredients.length > 0) {
      for (let ingredient of selectedIngredients) {
        for (let recipe of recipes) {
          if (recipe.ingredients.includes(ingredient)) {
            filteredRecipes.push(recipe);
          }
        }
      }
    }

    console.log("selectedAllergy", selectedAllergy);
    //allergy remove
    if (selectedAllergy.length > 0) {
      for (let allergies of selectedAllergy) {
        for (let recipe of filteredRecipes) {
          if (recipe.ingredients.includes(allergies)) {
            filteredRecipes = filteredRecipes.filter((x) => {
              return recipe.Id != recipe.id;
            });
          }
        }
      }
    }
    localStorage.setItem("recipes", JSON.stringify(filteredRecipes));
    return filteredRecipes;
  };

  filterRecipes(selectedFilters, allRecipes);

  //   useEffect(() => {
  //     if (allRecipes.length > 0) {
  //       console.log(filterRecipes(selectedFilters, allRecipes));
  //     }
  //   }, [selectedFilters]);

  const Monday = [
    Math.floor(Math.random() * 21),
    Math.floor(Math.random() * 21),
    Math.floor(Math.random() * 21),
  ];

  let array = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21,
  ];
  let num = Math.floor(Math.random() * array.length);
  let MondayOne = array.splice(num, 1);
  num = Math.floor(Math.random() * array.length);
  let MondayTwo = array.splice(num, 1);
  num = Math.floor(Math.random() * array.length);
  let MondayThree = array.splice(num, 1);

  num = Math.floor(Math.random() * array.length);
  let TuesdayOne = array.splice(num, 1);
  num = Math.floor(Math.random() * array.length);
  let TuesdayTwo = array.splice(num, 1);
  num = Math.floor(Math.random() * array.length);
  let TuesdayThree = array.splice(num, 1);

  num = Math.floor(Math.random() * array.length);
  let WednesdayOne = array.splice(num, 1);
  num = Math.floor(Math.random() * array.length);
  let WednesdayTwo = array.splice(num, 1);
  num = Math.floor(Math.random() * array.length);
  let WednesdayThree = array.splice(num, 1);

  num = Math.floor(Math.random() * array.length);
  let ThursdayOne = array.splice(num, 1);
  num = Math.floor(Math.random() * array.length);
  let ThursdayTwo = array.splice(num, 1);
  num = Math.floor(Math.random() * array.length);
  let ThursdayThree = array.splice(num, 1);

  return (
    <div>
      <PreferenceModal
        handleFilterButtonClick={handleFilterButtonClick}
        selectedFilters={selectedFilters}
        selectedAllergy={selectedAllergy}
        handleFilterAllergyClick={handleFilterAllergyClick}
      />
      <h1 className="calendar__header">Weekly Menu</h1>
      <section className="calendar">
        <section className="calendar__day">
          <h2 className="calendar__day-title">Monday - date</h2>
          <section className="calendar__recipes">
            <Link to={`/recipes/${allRecipes[MondayOne]?.id}`}>
              <img
                src={allRecipes[MondayOne]?.image_url}
                className="calendar__recipe"
                alt="alt-palceholder"
              />
            </Link>
            <Link to={`/recipes/${allRecipes[MondayTwo]?.id}`}>
              <img
                src={allRecipes[MondayTwo]?.image_url}
                className="calendar__recipe"
                alt="alt-palceholder"
              />
            </Link>
            <Link to={`/recipes/${allRecipes[MondayThree]?.id}`}>
              <img
                src={allRecipes[MondayThree]?.image_url}
                className="calendar__recipe"
                alt="alt-palceholder"
              />
            </Link>
          </section>
        </section>
        <section className="calendar__day">
          <h2 className="calendar__day-title">Tuesday - date</h2>
          <section className="calendar__recipes">
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
          </section>
        </section>
        <section className="calendar__day">
          <h2 className="calendar__day-title">Wednesday - date</h2>
          <section className="calendar__recipes">
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
          </section>
        </section>
        <section className="calendar__day">
          <h2 className="calendar__day-title">Thursday - date</h2>
          <section className="calendar__recipes">
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
          </section>
        </section>
        <section className="calendar__day">
          <h2 className="calendar__day-title">Friday - date</h2>
          <section className="calendar__recipes">
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
          </section>
        </section>
        <section className="calendar__day">
          <h2 className="calendar__day-title">Saturday - date</h2>
          <section className="calendar__recipes">
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
          </section>
        </section>
        <section className="calendar__day">
          <h2 className="calendar__day-title">Sunday - date</h2>
          <section className="calendar__recipes">
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
            <img
              src={recipe1}
              className="calendar__recipe"
              alt="alt-palceholder"
            />
          </section>
        </section>
      </section>
    </div>
  );
}

export default WeeklyPlan;
