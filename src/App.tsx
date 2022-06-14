import React from "react";
import { Store } from "./Store";
import { Link } from "react-router-dom";

function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>The Rookie</h1>
          <p>Pick your favourite episode!!!</p>
        </div>
        <div className="header-link-container">
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/faves" className="header-link">
            Favourite(s): {state.favourites.length}
          </Link>
        </div>
      </header>
      {props.children}
    </>
  );
}

export default App;
