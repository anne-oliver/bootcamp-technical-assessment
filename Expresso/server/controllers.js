const Recipe = require("./db.js");

exports.getRecipes = (req, res) => {
  Recipe.find({})
    .then((recipes) => res.status(200).json(recipes))
    .catch((err) => res.status(500).send(err));
};

exports.getRecipe = (req, res) => {
  const id = req.params.id;
  Recipe.findByIdAndUpdate(id,
    {$inc: {views: 1}},
    {new: true}
  )
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).send('Recipe not found');
      }
      res.status(200).json(recipe);
    })
    .catch((err) => res.status(500).send(err));
};

exports.addRecipe = (req, res) => {
  Recipe.create(req.body)
    .then((newRecipe) => res.status(201).json(newRecipe))
    .catch((err) => res.status(500).send(err));
};

exports.toggleFavStatus = (req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      if (!recipe) {
        return res.status(404).send('Recipe not found');
      }
      recipe.favorite = !recipe.favorite;
      return recipe.save().then(() => res.status(200).json(recipe));
    })
    .catch((err) => res.status(500).send(err));
};

exports.deleteRecipe = (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((recipe) => res.sendStatus(204))
    .catch((err) => res.status(500).send(err));
};
