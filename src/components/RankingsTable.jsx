import React from "react";
import { useState, useEffect } from "react";
import { Form, Input } from "reactstrap";

//Styling Imports
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import styled from "styled-components";

export function RankingsTable() {
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    fetch("http://131.181.190.87:3000/rankings")
      .then((res) => res.json())
      .then((resJson) => setRowData(resJson));
  });

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

  return (
    <Styles>
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
        />
      </div>
    </Styles>
  );
}

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
