import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

export default function Card({ recipe, showRecipeOnClick }) {

  const {
    name,
    description,
    image_url,
    createdAt,
    favorite
  } = recipe;

  const imgSrc = recipe.image_url;

  const timeAgo = createdAt ? formatDistanceToNow(parseISO(createdAt), {addSuffix: true}) : 'just added';

  return (
    <aside onClick={() => showRecipeOnClick({ id: recipe._id })}>
      <img src={imgSrc} width='384' height='192' alt='header image' />
      <h2>
        {name} {favorite && <sup>⭐️</sup>}
      </h2>
      <small>{timeAgo}</small>
      <p>{description}</p>
    </aside>
  );
}