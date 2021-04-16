import React from "react";
import styled from 'styled-components'
import {Button} from "reactstrap";

export const ScrollDown = () => {


    const scrollToBottom = () => window.scrollTo({top:1e10, behavior: "smooth"});


    return(
        <Styles>
        <div className="container"> 
            <Button id="down__button" onClick={scrollToBottom} size="lg" > &#x25BC;  </Button>
        </div>
        </Styles>
    )
}

export const ScrollUp = () => {


    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"});


    return(
        <Styles>
        <div className="container"> 
            <Button id="up__button" onClick={scrollToTop} size="lg" > &#x25B2;  </Button>
        </div>
        </Styles>
    )
}

export const ScrollRight = (props) => {


    const scrollToRight = () => window.location.href = "/factors";;


    return(
        <Styles>
        <div className="container"> 
            <Button id="right__button" onClick={scrollToRight} size="lg" > &#x25B7;  </Button>
        </div>
        </Styles>
    )
}

//&#x25C1;

const Styles = styled.div`


#down__button, #up__button {
    margin-top: 30px;
    background-color: #729bf9;
    width: 20%;
    margin-left: 40%;
    margin-right: 40%;
    margin-bottom: 2%;
    text-align: center;
}

#right__button{
    background-color: #729bf9;
    width: 50px;
    text-align: center;
    margin-left: 100%;
    
    

}


`