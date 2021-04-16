
import React from "react";

//Components
import { RankingsTable } from "../components/RankingsTable";
import { ScrollDown, ScrollUp} from "../components/Scrolls";
import { Heading } from "../components/Heading.jsx";
import { Footer } from "../components/Footer.jsx";

//Styling Imports
import styled from 'styled-components'
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";




export default function Rankings() {
    return (
        <Styles>
            <Heading heading="World Happiness Report" secondHeading="Rankings" />
            <div className="container">
                <RankingsTable />
            </div>
            <ScrollDown />
            
            <Footer text={text} />
            <ScrollUp />
        </Styles>

    )
}




const Styles = styled.div`

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



div > h1{
  
    font-size: 8rem;
    font-weight: 500;
}

div > p {
    font-size: 4rem;
    font-weight: 100;
    text-align: center;
    
}

.footer__p {
    padding-top: 150px;
}

`
const text = "Data is collected from people in over 150 countries. Each variable measured reveals a populated-weighted average score on a scale running from 0 to 10 that is tracked over time and compared against other countries.";
