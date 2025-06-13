import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import RecipeProvider from "./context/recipeProvider";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecipeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipeProvider>
  </React.StrictMode>
);
