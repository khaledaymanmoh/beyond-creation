import React from "react";
import styled from "styled-components";
import image from "../images/sectionimage.jpg";
import Button from "./assets/Button";
const HomeSection = () => {
  return (
    <StyledSection>
      <img src={image} alt="" />
      <div className="section-text-container">
        <h1>The place</h1>
        <h1>we call home</h1>
        <p>
          Makadi Heights is a town built over 3.4 million square meters planned
          for development, with an elevation reaching 78 meters above sea level
          guaranteeing magnificent panoramic sea views residential units.
          Envisioned as a comprehensive town.
        </p>
        <div className="section-btns">
          <Button>DOWNLOAD BROCHURE</Button>
          <Button>SHOW MASTER PLAN</Button>
        </div>
      </div>
    </StyledSection>
  );
};
const StyledSection = styled.div`
  height: 43.6vw;
  background: #21436e;
  padding-left: 9.4vw;
  display: flex;
  gap: 3.82vw;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0 10vw 10vw;
  }
  img {
    width: 38.2vw;
    height: 38.2vw;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
  .section-text-container {
    width: 40.625vw;
    @media (max-width: 768px) {
      width: auto;
    }
    h1 {
      font-size: 5.55vw;
      line-height: 6vw;
      font-family: "darabic";
      @media (max-width: 768px) {
        font-size: 10vw;
        line-height: 12vw;
        text-align: center;
      }
    }
    p {
      margin-top: 3vw;
      font-size: 1.53vw;
      line-height: 2vw;
      font-family: "sharpsans";
      @media (max-width: 768px) {
        font-size: 3vw;
        line-height: normal;
        margin-top: 4vw;
      }
    }
  }
  .section-btns {
    display: flex;
    gap: 1.46vw;
    margin-top: 2.22vw;
    @media (max-width: 768px) {
      gap: 3vw;
      margin-top: 6vw;
    }
    a {
      width: 15.35vw;
    }
  }
`;

export default HomeSection;
