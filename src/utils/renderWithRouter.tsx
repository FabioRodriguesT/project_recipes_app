// src/utils/renderWithRouter.tsx

import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { JSX } from "react";

export const renderWithRouter = (ui: JSX.Element, { route = "/" } = {}) => {
  window.history.pushState({}, "", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

// src/utils/renderWithRouter.tsx

// import { render } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event";
// import { ReactElement, ReactNode } from "react";
// import RecipeProvider from "../context/recipeProvider";

// interface RenderOptions {
//   route?: string;
// }

// export const renderWithRouter = (
//   ui: ReactElement,
//   { route = "/" }: RenderOptions = {}
// ) => {
//   const Wrapper = ({ children }: { children: ReactNode }) => (
//     <MemoryRouter initialEntries={[route]}>
//       <RecipeProvider>{children}</RecipeProvider>
//     </MemoryRouter>
//   );

//   return {
//     user: userEvent.setup(),
//     ...render(ui, { wrapper: Wrapper }),
//   };
// };
