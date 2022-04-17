import React from "react";
import styled from "styled-components";
import bg from "../images/bg.jpg";

const Intro = () => {
  return <StyledIntro></StyledIntro>;
};
const StyledIntro = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #21436e 85.42%),
    linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${bg});
  @media (max-width: 768px) {
    height: 50vh;
  }
`;
export default Intro;
