import React, { useState, useEffect }  from "react";
import axios from "axios";
import Card from './Card.jsx';


export default function List({ showRecipeOnClick }) {

  const [recipes, setRecipes ] = useState([]);

  useEffect(() => {
    axios.get('/recipes')
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error('Error fetching recipes'));
  }, []);

  return (
    <section>
      <header>
        <h2>📚 All Recipes </h2>
      </header>
      {recipes.length === 0 ? (
        <div>No recipes yet!</div>
      ) : (
        recipes.map((recipe) => (
          <Card
            key={recipe._id}
            recipe={recipe}
            showRecipeOnClick={showRecipeOnClick}
          />
        ))
      )}
    </section>
  );
}