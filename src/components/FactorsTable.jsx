import React from "react";
import { useState, useEffect } from "react";

//Component Imports
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import { Form, Input, Label, FormGroup } from "reactstrap";
import { GetFactors } from "../api";
import Autosuggest from "react-autosuggest";
import { GetCountries } from "../api";
import { ScrollDown, ScrollUp } from "../components/Scrolls";
import { BarGraph } from "../components/BarGraph";

import styled from "styled-components";

//API address to get the factors, will be altered to get specific results
const API_URL = "http://131.181.190.87:3000/factors/";

//Returns the Inputs, Factors Table & Graphs
export function FactorsTable(value) {
  const [rowData, setRowData] = useState([]);
  const [yearInput, setYearInput] = useState("2020");
  const [limitInput, setLimitInput] = useState("10");
  const [countryInput, setCountryInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [suggestions, setSugguestions] = useState([]);
  const [countriesForGraph, setCountriesForGraph] = useState([]);
  const [score, setScores] = useState([]);
  const [economy, setEconomy] = useState([]);
  const [family, setFamily] = useState([]);
  const [health, setHealth] = useState([]);
  const [error, setError] = useState(false);
  //Updates the rowData with an API call based on user input
  useEffect(() => {
    let newUrl = "";
    let countrySet = countryInput === "" ? true : false;

    if (countrySet) {
      newUrl = API_URL + yearInput + "?limit=" + limitInput;
    } else {
      newUrl =
        API_URL +
        yearInput +
        "?limit=" +
        limitInput +
        "&country=" +
        countryInput;
    }

    
    GetFactors(newUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        setError(true)
      }
    })
    .then((resJson) => {
      setRowData(resJson)
    })
    .catch((error) => {
      setError(true);
      console.log(error);
    });
  }, [countryInput, limitInput, yearInput]);

  //Updates the countries list for the autosuggest
  useEffect(() => {
    GetCountries().then((res) => setCountries(res));
  }, []);

  //Sets arrays with relevent data for the graphs
  useEffect(() => {
    let TempScore = [];
    let TempEco = [];
    let TempFam = [];
    let TempHealth = [];
    let TempCountry = [];

    rowData.forEach((result) => {
      TempScore.push(result.score);
      TempEco.push(result.economy);
      TempFam.push(result.family);
      TempHealth.push(result.health);
      TempCountry.push(result.country);
    });

    setScores(TempScore.slice(0, 10));
    setEconomy(TempEco.slice(0, 10));
    setFamily(TempFam.slice(0, 10));
    setHealth(TempHealth.slice(0, 10));
    setCountriesForGraph(TempCountry.slice(0, 10));
  }, [rowData]);

  //Returns a heading for the graphs based on wether or not there is enough data to show
  function GraphHeader() {
    if (rowData.length < 5) {
      return <p> Not enough data to display graphs</p>;
    } else {
      return <p>See Graphs Below</p>;
    }
  }
  if(!error){
    return (
      <Styles>
        <div className="factors__page">
          <div className="container">
            <Form id="inputForm">
              <FormGroup>
                <Label id="year__label" for="yearSelect">
                  Select Year
                </Label>
  
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
                <Label id="limit__label" for="limitSelect">
                  Number of Results
                </Label>
  
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
                <Label id="country__label" for="search__bar">
                  Search Country
                </Label>
  
                <Autosuggest
                  inputProps={{
                    placeholder: "Type Country",
                    name: "country",
                    id: "country",
                    value: countryInput,
  
                    onChange: (_event, { newValue }) => {
                      setCountryInput(newValue);
                    },
                  }}
                  suggestions={suggestions.slice(0, 10)}
                  onSuggestionsFetchRequested={async (value) => {
                    if (!value) {
                      setSugguestions([]);
                      return;
                    } else {
                      const result = countries.filter(
                        (country) =>
                          country
                            .toLowerCase()
                            .indexOf(countryInput.toLowerCase()) > -1
                      );
  
                      setSugguestions(result);
                    }
                  }}
                  onSuggestionsClearRequested={() => {
                    setSugguestions([]);
                  }}
                  getSuggestionValue={(suggestion) => suggestion}
                  renderSuggestion={(suggestion) => <span>{suggestion} </span>}
                />
              </FormGroup>
            </Form>
          </div>
          <div className="wrapper">
            <div
              id="factors__grid"
              className="ag-theme-alpine ag-row-hover ag-column-hover container"
            >
              <AgGridReact
                columnDefs={columns}
                rowData={rowData}
                pagination={true}
                paginationPageSize={10}
                floatingFilter={true}
              />
            </div>
          </div>
          <ScrollDown />
          <GraphHeader />
          <div className="graphs">
            <BarGraph
              title={yearInput + " Scores"}
              countries={countriesForGraph}
              data={score}
              label="Score"
            />
            <BarGraph
              title={yearInput + " Economy"}
              countries={countriesForGraph}
              data={economy}
              label="Economy"
            />
            <BarGraph
              title={yearInput + " Family"}
              countries={countriesForGraph}
              data={family}
              label="Family"
            />
            <BarGraph
              title={yearInput + " Health"}
              countries={countriesForGraph}
              data={health}
              label="Health"
            />
          </div>
  
          <ScrollUp />
        </div>
      </Styles>
    );
  }else{
    return(
      <p>There was an error connecting....Please check internet connection.</p>
    )
  }
  
}

//Columns for the table
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

//CSS
const Styles = styled.div`
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .graphs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__input {
    width: 240px;
    height: 38px;
    padding: 10px 20px;
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 16px;
    border: 1px solid #aaa;
    border-radius: 4px;
    -webkit-appearance: none;
  }

  .react-autosuggest__input--focused {
    outline: none;
    border: 2px solid LightSkyBlue;
  }

  .react-autosuggest__input::-ms-clear {
    display: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 30px;
    width: 280px;
    border: 1px solid #aaa;
    background-color: #fff;
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }
`;
