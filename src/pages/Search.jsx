import React from "react";

//Component Imports
import { Heading } from "../components/Heading.jsx";
import { RankingsTable } from "../components/RankingsTable"
import { SearchBar } from "../components/SearchBar";

//Styling imports
import styled from 'styled-components'




export default function Search() {



    return (
        <Styles>
            <div>
                <Heading heading="Search" secondHeading="Rankings" />
                <SearchBar />
                <div className="container">
                    <RankingsTable search=""/>
                </div>
            </div>
        </Styles>
    )
}




const Styles = styled.div`


.heading{
    font-family: "Montserrat";
    padding-top: 100px;
    text-align: center;
    
}

div > h1{
  
    font-size: 8rem;
    font-weight: 500;
}
div > p {
    font-size: 4rem;
    font-weight: 100;
    text-align: center;
    
}

#rankings__grid{
    height: 350px;
    width:820px;
    
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

`