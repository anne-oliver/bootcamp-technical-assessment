import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns";

export default function Detail({ id }) {

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.error('Error getting recipe', err));
  }, [id]);

  if (!recipe) {
    return <p>Recipe information loading...</p>;
  }

  const {
    name,
    description,
    ingredients,
    steps,
    views,
    image_url,
    favorite,
    createdAt
  } = recipe;


  const imgSrc = image_url;

  const timeAgo = createdAt ? formatDistanceToNow(parseISO(createdAt), {addSuffix: true}) : 'just added';

  return (
    <article>
      <h2>
        {name} {favorite && <sup>⭐️</sup>}
      </h2>
      <img src={imgSrc} width='768' height='384' alt='header image' />
      <small>Posted {timeAgo}</small>
      <br/>
      <small>{views} Views</small>

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </article>
  );
}

