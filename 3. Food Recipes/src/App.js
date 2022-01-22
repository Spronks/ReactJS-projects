import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const APP_ID = "c9b741ec";
  const APP_KEY = "962d1f1be622c4d03e396c02ec180388";
  const [recipes, setRecipes] = useState([]);
  const query = "chicken";
  const healthLabel = "alcohol-free";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <div className="app__searchForm">
        <input
          type="text"
          placeholder="Type the ingredient"
          autoComplete="Off"
          className="app__input"
        />
        <select className="app__healthLabels">
          <option value="vegant">vegan</option>
          <option value="unpreort">2</option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </div>
    </div>
  );
}

export default App;
