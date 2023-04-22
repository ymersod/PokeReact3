import React, { useEffect, useState } from "react";
import "./App.css";
import LoadTable from "./Components/LoadPokemonTable";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
      <LoadTable limit={20} />
    </div>
  );
};

export default App;
