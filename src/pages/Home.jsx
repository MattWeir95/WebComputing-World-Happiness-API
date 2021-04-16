import React from "react";
import styled from 'styled-components'
import {ScrollDown, ScrollUp} from "..//components/Scrolls";





export default function Home() {
    let token = localStorage.getItem("token");
    console.log("homePageToken: " + token);

    return (
        <main>
            <Hero />
            <Info />
        </main>
    )
}

const Hero = () => (

    <Styles>
    <div className ="hero">
        <div className="hero_text">
        World Happiness Report
        </div>
        
        <ScrollDown />
        
        

    </div>
    </Styles>
)

const Info = () => (
    <Styles>
        <div className="info">
        The World Happiness Report is a publication of the United Nations Sustainable 
        Development Solutions Network. It contains articles and rankings of national happiness, 
        based on respondent ratings of their own lives, which the report also correlates with
        various (quality of) life factors.
        </div>

        <ScrollUp />
        
    </Styles>
)

const Styles = styled.div`



.hero {
    background-image: url("../images/happy.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100vh;
    
}

.hero_text{
    padding-top: 50px;
    font-family: "Montserrat";
    color: white;
    text-align: center;
    font-size: 8rem;
    font-weight: 500;
}

.info {
    font-family: "Monserrat", sans-serif;
    text-align: center;
    padding-bottom: 200px;
    padding-top: 50px;
    font-size: 3rem;
}

`