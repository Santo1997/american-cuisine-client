import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/base/header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/base/Footer";

export const RecipeContext = createContext([]);
export const ChefContext = createContext([]);

function App() {
  const { chefs, recipies } = useLoaderData();

  return (
    <>
      <RecipeContext.Provider value={recipies}>
        <ChefContext.Provider value={chefs}>
          <Header />
          <div className=" m-3 rounded-xl overflow-hidden ">
            <Outlet />
          </div>
          <Footer />
        </ChefContext.Provider>
      </RecipeContext.Provider>
    </>
  );
}

export default App;
