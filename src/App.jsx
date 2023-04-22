import "./App.css";
import LoadTable from "./Components/LoadPokemonTable";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
