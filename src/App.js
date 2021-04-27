import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

//Component Imports
import NavBar from "./components/NavBar.jsx";


//Page imports
import Home from "./pages/Home";
import Factors from "./pages/Factors";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import Rankings from "./pages/Rankings";
import SearchPage from "./pages/SearchPage.jsx";


//Base APP, Returns a page depending on the router. 
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/factors">
              <Factors />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/search">
              <SearchPage />
            </Route>

            <Route exact path="/rankings">
              <Rankings />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
