
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";


import NavBar from "./components/NavBar.jsx";



import Home from "./pages/Home";
import Factors from "./pages/Factors";
import Register from './pages/Register';
import LoginPage from './pages/LoginPage';
import Search from './pages/Search';
import Rankings from './pages/Rankings';


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
              <Search />
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
