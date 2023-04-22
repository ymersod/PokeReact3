import { Outlet, Link } from "react-router-dom";

const AboutHtml = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
      <h1>ABOUT THIS ONE</h1>
      <p>
        Bedste pokemonspil du nogensinde kommer til at spille jeg lover det:
      </p>
      <p>https://www.rebornevo.com/pr/index.html/</p>
    </div>
  );
};

export default AboutHtml;
