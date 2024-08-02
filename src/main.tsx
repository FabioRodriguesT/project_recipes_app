import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import RecipeProvider from './context/recipeProvider';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <RecipeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecipeProvider>
    </React.StrictMode>,
  );
