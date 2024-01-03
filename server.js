const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cookTime: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

app.get('/recipes', async (req, res) => {
  try {
    const allRecipes = await Recipe.find();
    res.status(200).json({ success: true, data: allRecipes });
    console.log("Fetching Recipe(s)");
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post('/insert', async (req, res) => {
  try {
    const { title, cookTime, ingredients, instructions } = req.body;

    const newRecipe = new Recipe({
      title: title,
      cookTime: cookTime,
      ingredients: ingredients,
      instructions: instructions,
    });

    await newRecipe.save();

    res.status(201).json({ success: true, data: newRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

