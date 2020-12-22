import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  //Select,
  //MenuItem,
} from "@material-ui/core";
import "./App.css";
import Axios from "./components/axiox_";
import Recipe from "./components/Recipe";

const appID = "0b766607";
const appKEY = "4a43006a1c9baecc99f344add70bce72";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchRecipe(q) {
    let req = `search?q=${q}&app_id=${appID}&app_key=${appKEY}&from=0&to=6`;
    const request = await Axios.get(req);
    setRecipes(request.data.hits);
    setSearch("");
    //setMealtype("");
  }
  useEffect(() => {
    fetchRecipe();
  }, []);

  function __search(e) {
    e.preventDefault();
    fetchRecipe(search);
  }

  return (
    <div className="App">
      <p onClick={() => fetchRecipe()}>recipe app</p>
      <form className="__form">
        <div className="__formControl">
          <FormControl>
            <InputLabel>search for...</InputLabel>
            <Input
              onChange={(event) => setSearch(event.target.value)}
              value={search}
              className="__input"
            />
            <br />
          </FormControl>
          {/*<FormControl className="__formControl">
            <InputLabel>Meal Type:</InputLabel>
            <Select
              value={mealType}
              onChange={(event) => setMealtype(event.target.value)}
              className="__select"
            >
              <MenuItem value="">
                <em>Unspecified</em>
              </MenuItem>
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
            </Select>
            <br />
          </FormControl>*/}
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="__btn"
          onClick={__search}
        >
          Submit
        </Button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe.recipe} key={recipe.recipe.label} />
        ))}
      </div>
    </div>
  );
}

export default App;
