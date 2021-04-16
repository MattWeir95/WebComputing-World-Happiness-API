import React from "react";
import styled from "styled-components";
import { Form, Input } from "reactstrap";

export function SearchBar() {
  return (
    <Styles>
      <div className="searchBar">
        <Form>
          <Input type="text" id="search__bar" placeholder="Enter Your Search" />
        </Form>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  #search__bar {
    width: 820px;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  div.searchBar {
    display: block;
    text-align: center;
  }
`;
