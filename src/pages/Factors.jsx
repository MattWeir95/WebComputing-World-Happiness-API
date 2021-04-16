import React from "react";
import {Heading} from "../components/Heading";
import styled from 'styled-components'

export default function Factors(){

    let token = localStorage.getItem("token");
    let loggedIn = token === "empty" ? false : true;

    if(loggedIn){
        return (
            <Styles>
            <Heading heading="Factors" />
            </Styles>
        )

    }else {
        
        return (
            <Styles>
            <Heading heading="To view this page you need to login" />
            </Styles>
        )
    }
    
}


const Styles = styled.div`

.heading{
    font-family: "Montserrat";
    padding-top: 100px;
    text-align: center;
    font-weight: 600;
}

div > h1{
  
    font-size: 8rem;
    font-weight: 500;
}`


