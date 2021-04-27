import React from "react";

//Component Imports
import { Heading } from "../components/Heading.jsx";
import { RankingsTable } from "../components/RankingsTable";
import styled from "styled-components";

//Returns the content of the search page for the router.
export default function SearchPage() {
  return (
    <Styles>
      <div className="search__page">
        <Heading heading="Search" secondHeading="Rankings" />

        <div className="container">
          <RankingsTable search="true" />
        </div>
      </div>
    </Styles>
  );
}

//CSS
const Styles = styled.div`
  .search__page,
  .heading {
    background-color: #f5f5f5;
  }

  .search__page {
    height: calc(100vh - 57px);
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
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
