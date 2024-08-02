import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Login, Meals, InProgress,
  RecipeDetails, Profile, DoneRecipes,
  FavoriteRecipes, NotFound, Drinks,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/meals" element={ <Meals /> } />
      <Route path="/meals/:id" element={ <RecipeDetails /> } />
      <Route path="/meals/:id/in-progress" element={ <InProgress /> } />
      <Route path="/drinks" element={ <Drinks /> } />
      <Route path="/drinks/:id" element={ <RecipeDetails /> } />
      <Route path="/drinks/:id/in-progress" element={ <InProgress /> } />
      <Route path="profile" element={ <Profile /> } />
      <Route path="done-recipes" element={ <DoneRecipes /> } />
      <Route path="favorite-recipes" element={ <FavoriteRecipes /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
