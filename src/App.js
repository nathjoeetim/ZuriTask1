import React from "react";
import "./App.css";
import Links from "./component/links/linkItem";
import UserImg from "./component/UserImg";
import Fotter from "./component/fotters/Fotters";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div>
          <UserImg />
          <Links />
        </div>
        <Fotter />
      </div>
    </React.Fragment>
  );
}

export default App;
