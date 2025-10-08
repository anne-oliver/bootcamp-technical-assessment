import React, { useState } from "react";
import axios from "axios";
import parseContent from "../lib/parseContent.js";


export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [image_url, setImageURL] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = parseContent({ name, image_url, ingredients, steps });

    axios.post('/recipes', payload)
      .then(() => {
        if (onSubmit) {
          onSubmit();
        }
      })
      .catch((err) => {
        console.error('Error saving recipe:', err);
      });
  };

  return (
    <section>
      <header>
        <h2>✏️ New Recipe</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        < br/>

        <label>
          Image URL:
          <input
            type="text"
            name="image_id"
            required
            value={image_url}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>
        < br/>

        <label>
          Ingredients: <i>(one per line)</i>
          <textarea
            name="ingredients"
            required
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={8}
            cols={48}
          />
        </label>
        < br/>

        <label>
          Steps: <i>(one per line)</i>
          <textarea
            name="steps"
            required
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows={8}
            cols={48}
          />
        </label>
        < br/>

        <input type="submit" value="Save Recipe" />
      </form>
    </section>
  );
}

