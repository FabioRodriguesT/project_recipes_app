import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import DoneRecipes from "./pages/DoneRecipes";
import FavoriteRecipes from "./pages/FavoriteRecipes";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import RecipeInProgress from "./pages/RecipeInProgress";

function App() {
  const [count, setCount] = useState(0);
  // Caveat: referencing our plugin first will ensure vite types do not overlap

  /// <reference types="vite-plugin-react-rich-svg/client" />
  /// <reference types="vite/client" />

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loading" element={<Loading />} />
      <Route element={<Layout />}>
        <Route path="/meals" element={<Recipes />} />
        <Route path="/drinks" element={<Recipes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/done-recipes" element={<DoneRecipes />} />
        <Route path="favorite-recipes" element={<FavoriteRecipes />} />
      </Route>
      <Route path="/meals/:id" element={<RecipeDetails />} />
      <Route path="/drinks/:id" element={<RecipeDetails />} />
      <Route path="/meals/:id/in-progress" element={<RecipeInProgress />} />
      <Route path="/drinks/:id/in-progress" element={<RecipeInProgress />} />
    </Routes>
  );
}

export default App;
