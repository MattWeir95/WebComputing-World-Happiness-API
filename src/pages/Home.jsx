import React from "react";

//Component Imports
import styled from "styled-components";

//Returns the content of the home page for the router.
export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

//Text for the Hero, text from (https://en.wikipedia.org/wiki/World_Happiness_Report)
const Hero = () => (
  <Styles>
    <div className="hero">
      <div className="hero_text">World Happiness Report</div>
      <div className="transbox">
        <div className="info">
          <p>
            The World Happiness Report is a publication of the United Nations
            Sustainable Development Solutions Network. It contains articles and
            rankings of national happiness, based on respondent ratings of their
            own lives, which the report also correlates with various (quality
            of) life factors.
          </p>
        </div>
      </div>
    </div>
  </Styles>
);

//CSS
const Styles = styled.div`
  .hero {
    background-image: url("../images/happy.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: calc(100vh - 56px);
  }

  .hero_text {
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
    padding-bottom: 50px;
    padding-top: 50px;
    font-size: 3rem;
    color: White;
  }
  .transbox {
    margin: 30px;
    background-color: #ffffff;
    border: 1px solid black;
    opacity: 0.6;
  }

  .transbox p {
    font-weight: bold;
    color: #000000;
  }
`;
