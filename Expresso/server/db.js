require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

const recipeSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    description: { type: String},
    ingredients: { type: [String], default: []},
    steps: { type: [String], default: []},
    favorite: { type: Boolean, default: false},
    views: { type: Number, default: 0},
    image_url: { type: String, required: true }
  },
  { timestamps: true }
);

const Recipe = new mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
