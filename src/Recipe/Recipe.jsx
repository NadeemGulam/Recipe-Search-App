import React, { useEffect, useState } from "react";
import "./Recipe.css";
import Recipes from "./Recipes";
const Recipe = () => {
  const APP_ID = "9ad7436d";
  const APP_KEY = "73de4bf9999b4d04649dff50b9f98d60";

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("chicken");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    console.log("Effect has been run");
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipes) => (
          <Recipes
            key={recipes.recipe.label}
            title={recipes.recipe.label}
            img={recipes.recipe.image}
            calories={recipes.recipe.calories}
            ingredients={recipes.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
