import React from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Logout } from "./Logout";
import jwt from "jsonwebtoken";

import {

  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

export default function NavBar() {









  return (
    <Styles>


      <div>
        <Navbar expand="md">


          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/rankings">Rankings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/factors">Factors</NavLink>
            </NavItem>
          </Nav>


          <LoggedOutItems />

          <LoggedInItems />




        </Navbar>
      </div>
    </Styles>
  );
}

function LoggedOutItems(props) {
  let token = localStorage.getItem("token");
  let loggedIn = token === "empty" ? false : true;

  if (!loggedIn) {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/register">Register</NavLink>
        </NavItem>
      </Nav>

    )
  }
  return null;
}


function LoggedInItems() {
  let token = localStorage.getItem("token");
  let loggedIn = token === "empty" ? false : true;
  let tokenDecoded = jwt.decode(token);
  let tokenEmail = ""
  if(tokenDecoded !== null){
    tokenEmail = tokenDecoded.email
  }
  

  if (loggedIn) {
    return (

      <Nav className="ml-auto" navbar>
        <NavbarText id="email__text"> {tokenEmail} </NavbarText>
        <NavItem>
          <NavLink onClick={Logout} >Logout</NavLink>
        </NavItem>
      </Nav>
    )
  }
  return null;
}



const Styles = styled.div`


#email__text{
  padding-right: 20px;
}
.navbar {
  background-color: lightslategrey;
}

a.nav-link {
  color: white;
  transition: 0.4s;
  
  border-radius: 10px;
}

a.nav-link:hover {
  color: black;
  background-color: lightgrey;
  
}

`





// <nav>
//       <ul>

//         <li>
//           <Link to="/">Home</Link>
//         </li>

//         <li>
//           <Link to="/rankings">Rankings</Link>
//         </li>

//         <li>
//           <Link to="/search">Search</Link>
//         </li>

//         <li>
//           <Link to="/factors">Factors</Link>
//         </li>

//         <li>
//           <Link to="/register">Register</Link>
//         </li>

//         <li>
//           <Link to="/login">Login</Link>
//         </li>

//         <li>
//           <Link to="/logout">Logout</Link>
//         </li>

//       </ul>
//     </nav>
