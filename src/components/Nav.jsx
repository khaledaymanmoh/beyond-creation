import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { ReactComponent as CallNow } from "../images/callicon.svg";
import { ReactComponent as MenuIcon } from "../images/menuicon.svg";
import axios from "axios";
import { CelToF, KelToC } from "../util";
import { colors } from "../colors";
import Button from "./assets/Button";

const Nav = () => {
  const [weatherInfo, setWeatherInfo] = useState();
  useEffect(() => {
    const getWeatherInfo = async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578"
      );
      setWeatherInfo(response.data);
    };
    getWeatherInfo();
  }, []);
  return (
    <StyledNav>
      <img src={logo} className="logo" alt="makadi-logo" />
      <div className="nav-container">
        {weatherInfo && (
          <div className="weather-info">
            <img
              src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0]?.icon}@2x.png`}
              alt="makadi-weather"
              className="weather-icon"
            />
            <p>{KelToC(weatherInfo.main.temp)}°</p>
          </div>
        )}
        <a href="tel:+2012345678" className="call-now">
          <CallNow />
        </a>
        <Button className="book-now">BOOK NOW</Button>
        <label>MENU</label>
        <MenuIcon className="menu-icon" />
      </div>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.7vw 6vw 0 9.3vw;
  color: white;
  .logo {
    width: 10.76vw;
    @media (max-width: 768px) {
      width: 30vw;
    }
  }
  .nav-container {
    display: flex;
    align-items: center;
    width: fit-content;
    .weather-info {
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        display: none;
      }
      .weather-icon {
        width: 5vw;
      }
      p {
        font-size: 1.25vw;
        font-family: "darabic";
      }
    }
    .call-now {
      @media (max-width: 768px) {
        display: none;
      }
      svg {
        width: 3.5vw;
        height: 3.5vw;
        object-fit: contain;
        margin-left: 1.39vw;
      }
    }
    .book-now {
      margin-left: 2.36vw;
      @media (max-width: 768px) {
        display: none;
      }
    }
    label {
      margin-left: 2.8vw;
      margin-right: 1.4vw;
      font-size: 1.25vw;
      font-family: "darabic";
      @media (max-width: 768px) {
        display: none;
      }
    }
    .menu-icon {
      width: 3.05vw;
      height: 1.53vw;
      cursor: pointer;
      @media (max-width: 768px) {
        width: 10vw;
        height: auto;
      }
    }
  }
`;
export default Nav;
