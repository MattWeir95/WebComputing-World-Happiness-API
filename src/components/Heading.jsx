import React from "react";
import styled from "styled-components";

//Returns a h1 & p with the text passed through the props
export function Heading(props) {
  return (
    <Styles>
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.secondHeading}</p>
      </div>
    </Styles>
  );
}

//CSS
const Styles = styled.div`
  .heading {
    font-family: "Montserrat";
    padding-top: 20px;
    text-align: center;
    font-weight: 600;
  }
`;
