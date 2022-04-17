import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
const Button = ({ destination, children, ...props }) => {
  return (
    <StyledButton href={destination || "/"} {...props}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.a`
  min-width: 10vw;
  height: 3.5vw;
  background-color: white;
  border: 0.07vw solid #ffffff;
  text-decoration: none;
  color: ${colors.mainBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  font-family: "Shanti", sans-serif;
  @media (max-width: 768px) {
    min-width: 40vw;
    height: 8vw;
    font-size: 3vw;
  }
`;
export default Button;
