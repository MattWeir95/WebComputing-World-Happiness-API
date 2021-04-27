import React from "react";
import styled from "styled-components";

//Returns a footer with the the text set by the prop
export function Footer(props) {
  return (
    <Styles>
      <div className="footer">
        <p className="footer__p">{props.text}</p>
      </div>
    </Styles>
  );
}

//CSS
const Styles = styled.div``;
