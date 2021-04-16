import React from "react";
import {Heading} from "../components/Heading";
import styled from 'styled-components'
import {FactorsTable} from "../components/FactorsTable";

export default function Factors(){

    let token = localStorage.getItem("token");
    let loggedIn = token === "empty" ? false : true;

    if(loggedIn){
        return (
            <Styles>
                <Heading heading="Search" secondHeading="Factors"/>
                
            <FactorsTable />
            
            </Styles>
        )

    }else {
        
        return (
            <Styles>
            <Heading heading="Please Login" secondHeading="To View This Feature" />
            </Styles>
        )
    }

    
    
}


const Styles = styled.div`



div > h1{
  
    font-size: 8rem;
    font-weight: 500;
}

div > p {
    font-size: 4rem;
    font-weight: 100;
    text-align: center;
    
}


#factors__grid{
    width: 2000px;
    height: 538px;
    display: block;
    
    
   
    

    
}

#inputForm{
    display: flex;
    justify-content: space-evenly;
    

}



`



