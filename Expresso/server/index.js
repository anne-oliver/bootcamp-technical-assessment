require("dotenv").config();

const express = require("express");
const path = require("path");
const controllers = require("./controllers.js");
const logger = require("./middleware/logger.js");
const authCheck = require("./middleware/authChecker.js");

const app = express();

app.use(express.json());
app.use(logger);


app.use(express.static(path.join(__dirname, '../client/dist')));

//routes
app.get('/recipes', controllers.getRecipes);
app.get('/recipes/:id', controllers.getRecipe);
app.post('/recipes', controllers.addRecipe);
app.patch('/recipes/:id/fav', controllers.toggleFavStatus);
app.delete('/recipes/:id', authCheck, controllers.deleteRecipe);


const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
