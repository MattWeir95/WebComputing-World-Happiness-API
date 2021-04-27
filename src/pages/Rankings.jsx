import React from "react";

//Components
import { RankingsTable } from "../components/RankingsTable";
import { Heading } from "../components/Heading.jsx";
import { Footer } from "../components/Footer.jsx";
import styled from "styled-components";

//Styling Imports
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

//Returns the content of the Rankings page for the router.
export default function Rankings() {
  return (
    <Styles>
      <div className="rankings__page">
        <Heading heading="World Happiness Report" secondHeading="Rankings" />
        <div className="container">
          <div className="transbox">
            <Footer text={text} />
          </div>
        </div>
        <div className="container">
          <RankingsTable search="false" />
        </div>
      </div>
    </Styles>
  );
}

//CSS
const Styles = styled.div`
  .transbox {
    background-color: #ffffff;
    border: 1px solid black;
    opacity: 0.6;
  }

  .transbox p {
    margin-bottom: 0px;
    font-size: 30px;
    font-weight: bold;
    color: #000000;
    font-family: "Montserrat";
    text-align: center;
  }

  .rankings__page,
  .heading {
    background-color: #f5f5f5;
  }

  .rankings__page {
    height: calc(100vh - 57px);
  }
  #rankings__grid {
    height: 567px;
    width: 820px;
  }
  .ag-row-hover {
    background-color: #dfdfff !important;
  }

  .ag-column-hover {
    background-color: #dfffdf;
  }

  .container {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div > h1 {
    font-size: 8rem;
    font-weight: 500;
  }

  div > p {
    font-size: 4rem;
    font-weight: 100;
    text-align: center;
  }
`;

//Text from (https://en.wikipedia.org/wiki/World_Happiness_Report)
const text =
  "Data is collected from people in over 150 countries. Each variable measured reveals a populated-weighted average score on a scale running from 0 to 10 that is tracked over time and compared against other countries.";
