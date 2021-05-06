import React from "react";

//Component Imports
import { Heading } from "../components/Heading";
import styled from "styled-components";
import { FactorsTable } from "../components/FactorsTable";

//Returns the content of the Factors page for the router. (Changes depending if user is logged in)
export default function Factors() {
  let token = localStorage.getItem("token");
  let loggedIn = token === null ? false : true;

  if (loggedIn) {
    return (
      <Styles>
        <div className="factorsPage">
          <Heading heading="Factors" />

          <FactorsTable />
        </div>
      </Styles>
    );
  } else {
    return (
      <Styles>
        <div className="NotSuccessfactorsPage">
          <Heading
            heading="Please Login"
            secondHeading="To View This Feature"
          />
        </div>
      </Styles>
    );
  }
}


//CSS
const Styles = styled.div`
  .factors__page,
  .heading {
    background-color: #f5f5f5;
  }

  .NotSuccessfactorsPage {
    height: calc(100vh - 57px);
    background-color: #f5f5f5;
  }

  div > h1 {
    font-size: 8rem;
    font-weight: 500;
    margin-bottom: 0px;
  }

  div > p {
    font-size: 4rem;
    font-weight: 100;
    text-align: center;
    margin-bottom: 0px;
  }

  #factors__grid {
    max-width: 1832px;
    height: 584px;
  }

  #inputForm {
    display: flex;
    justify-content: space-evenly;
  }
`;
