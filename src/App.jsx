import { useState } from "react";

import "./App.css";
import Header from "./components/base/header";

import { Outlet } from "react-router-dom";
import Footer from "./components/base/Footer";

function App() {
  return (
    <>
      <Header />
      <div className=" m-3 rounded-xl overflow-hidden ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
