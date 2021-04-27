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

 
  .transbox {
    margin: 30px;
    background-color: #ffffff;
    border: 1px solid black;
    opacity: 0.6;
  }

  .transbox p {
    font-weight: bold;
    color: #000000;
    font-family: "Montserrat";
    padding-bottom: 50px;
    padding-top: 50px;
    font-size: 3rem;
    text-align: center;
  }
`;


// Background image source: https://www.flickr.com/photos/douglucas/18855702682/in/photolist-uJdpu7-F6PNNm-FuNvdE-d85XtJ-KEULHW-315cN-zGECM-3D8XL6-eaXh2z-2aYJT5u-hxDBVp-s7Myjg-5igdho-PTpDNw-QLsR3Q-8mA2Zn-bUpqGv-qHbiuX-5bEkPC-6MjE8M-82N9pJ-CiAcXk-desXk6-KEULzQ-5J2zDE-cxrJLL-W76uSG-31LAFC-6e2fRC-9jc3DS-32XBfe-9akM8w-5TWQPd-7TeiL3-KAsoYP-ACeG-ApCKEe-4cZQ2q-DvCdd-JAstfu-ojstJu-fw2gGy-81QNsY-vFEv9f-5H8Nxq-QGEcnF-QGEcbD-3dhvG7-pztBQm-QLsR89