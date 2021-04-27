import React from "react";
import { useState, useEffect } from "react";

//Component Imports
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import { Form, Input } from "reactstrap";
import styled from "styled-components";
import { GetRankings } from "../api";

//Returns the Rankings Table
export function RankingsTable(props) {
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);

  //API call to get the row data.
  useEffect(() => {
    GetRankings()
      .then((res) => res.json())
      .then((resJson) => setRowData(resJson));
  }, []);

  //Column headers for table
  const columns = [
    {
      headerName: "Rank",
      field: "rank",
      sortable: true,
      filter: "agNumberColumnFilter",
    },

    { headerName: "Country", field: "country", sortable: true, filter: true },

    {
      headerName: "Score",
      field: "score",
      sortable: true,
      filter: "agNumberColumnFilter",
    },

    {
      headerName: "Year",
      field: "year",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
  ];

  function onGridReady(props) {
    setGridApi(props.api);
  }

  const onFilterTextChange = (e) => {
    gridApi.setQuickFilter(e.target.value);
  };

  //Displays the search bar depending on what page youre on.
  function DisplaySearchBar(props) {
    if (props.search === "true") {
      return (
        <div className="searchBar">
          <Form>
            <Input
              onChange={onFilterTextChange}
              type="search"
              id="search__bar"
              placeholder="Enter Your Search"
            />
          </Form>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <Styles>
      <DisplaySearchBar search={props.search} />
      <div
        id="rankings__grid"
        className="ag-theme-alpine ag-row-hover ag-column-hover"
      >
        <AgGridReact
          onGridReady={onGridReady}
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
          floatingFilter={true}
        />
      </div>
    </Styles>
  );
}

//CSS
const Styles = styled.div`
  #search__bar {
    width: 820px;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 20px;
  }

  div.searchBar {
    display: block;
    text-align: center;
  }
`;
