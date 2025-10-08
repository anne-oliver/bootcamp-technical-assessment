import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {

  const [recipes, setRecipes ] = useState([]);

  useEffect(() => {
    axios.get('/recipes')
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error('Error fetching admin data:', err));
  }, []);

  const toggleFavorite = (id) => {
    axios.patch(`/recipes/${id}/fav`)
      .then((res) => {
        setRecipes((prev) =>
          prev.map((recipe) => (recipe._id === id ? res.data : recipe))
        );
      })
      .catch((err) => console.error('Error toggling favorite:', err));
  };

  const deleteRecipe = (id) => {
    axios.delete(`/recipes/${id}`, {
      headers: {
        Auth: 'mysecretpasscode'
      }
    })
      .then(() => {
        setRecipes((prev) => prev.filter((recipe) => recipe._id !== id));
      })
      .catch((err) => console.error('Error deleting recipe:', err));
  };

  return (
    <section>
      <header>
        <h2>⚙️ Admin</h2>
      </header>
      {recipes.length === 0 ? (
        <div>No Posts Yet.</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th>Views</th>
              <th>Favorite?</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe._id}>
                <td>{recipe.name}</td>
                <td>{recipe.views}</td>
                <td>
                  <input
                    name="favorite"
                    type="checkbox"
                    defaultChecked={recipe.favorite}
                    onClick={() => toggleFavorite(recipe._id)}
                  />
                </td>
                <td onClick={() => deleteRecipe(recipe._id)}>❌</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

