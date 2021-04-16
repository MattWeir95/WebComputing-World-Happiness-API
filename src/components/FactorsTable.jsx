import React from "react";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import styled from "styled-components";
import { Form, Input, Label, FormGroup } from "reactstrap";

const API_URL = "http://131.181.190.87:3000/factors/";
const token = localStorage.getItem("token");
const headers = {
  accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};
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
    headerName: "Economy",
    field: "economy",
    sortable: true,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Family",
    field: "family",
    sortable: true,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Health",
    field: "health",
    sortable: true,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Freedom",
    field: "freedom",
    sortable: true,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Generosity",
    field: "generosity",
    sortable: true,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Trust",
    field: "trust",
    sortable: true,
    filter: "agNumberColumnFilter",
  },
];

export function FactorsTable(value) {
  const [rowData, setRowData] = useState([]);

  const [yearInput, setYearInput] = useState("2020");
  const [limitInput, setLimitInput] = useState("50");
  const [countryInput, setCountryInput] = useState("");

  useEffect(() => {
      let newUrl = "";
      let countrySet = countryInput === "" ? true: false;
      if(countrySet){
        newUrl = API_URL + yearInput + "?limit=" + limitInput;
      }
      else{
        newUrl = API_URL + yearInput + "?limit=" + limitInput + "&country=" + countryInput;
      }
      
      console.log(newUrl)
    fetch(newUrl, { headers })
      .then((res) => res.json())
      .then((resJson) => setRowData(resJson));
  }, [yearInput, limitInput, countryInput]);
  
  return (
    <Styles>
      <div className="container">
        <Form id="inputForm">
            <FormGroup>
        <Label id="year__label" for="yearSelect">Select Year</Label>
          <Input
            value={yearInput}
            onChange={(e) => {
              setYearInput(e.target.value);
            }}
            type="select"
            name="select"
            id="yearSelect"
          >
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
          </Input>
          </FormGroup>
          <FormGroup>
        <Label id="limit__label" for="limitSelect">Number of Results</Label>

          <Input
            value={limitInput}
            onChange={(e) => {
              setLimitInput(e.target.value);
            }}
            type="select"
            name="select"
            id="limitSelect"
          >
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
            <option>150</option>
            <option>200</option>
          </Input>
          </FormGroup>
          <FormGroup>
          <Label id="country__label" for="search__bar">Search Country</Label>

          <Input
            onChange={(e) => {
                setCountryInput(e.target.value);
              }}
            type="search"
            id="search__bar"
            
          />
          </FormGroup>
        </Form>
        </div>
        <div
        id="factors__grid"
        className="ag-theme-alpine ag-row-hover ag-column-hover container"
      >
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </Styles>
  );
}

const Styles = styled.div``;
