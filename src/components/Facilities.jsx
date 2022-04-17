import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as I1 } from "../images/i1.svg";
import { ReactComponent as I2 } from "../images/i2.svg";
import { ReactComponent as I3 } from "../images/i3.svg";
import { ReactComponent as I4 } from "../images/i4.svg";
import { ReactComponent as I5 } from "../images/i5.svg";
import { ReactComponent as I6 } from "../images/i6.svg";

import image1 from "../images/genericservice.jpg";
import CustomCarousel from "./assets/CustomCarousel";

const Facilities = () => {
  const [selected, setSelected] = useState(0);
  const facilities = [
    {
      name: "Commercial Areas",
      caption: "Downtown Makadi Heights Mall",
      icon: I1,
      image: image1,
    },
    {
      name: "Sports Facilities",
      caption: "Sports Courts, Fitness Center Water Sports Activities",
      icon: I2,
      image: image1,
    },
    {
      name: "Kids Friendly Areas",
      caption: "Kids Aqua Park Kids Areas",
      icon: I3,
      image: image1,
    },
    {
      name: "Central Park",
      caption: "Far far away, behind the word mountains",
      icon: I4,
      image: image1,
    },
    {
      name: "Hotels",
      caption: "Far far away, behind the word mountains",
      icon: I5,
      image: image1,
    },
    {
      name: "Medical Facilities",
      caption: "Far far away, behind the word mountainsl",
      icon: I6,
      image: image1,
    },
  ];

  return (
    <StyledSection>
      <div className="col1">
        <h1 className="h-1">Discover Lifestyle</h1>
        <h1 className="h-2">Amentities</h1>
        <p className="f-section-text">
          Occupying a land area of 33,000 square meters, Makadi Heights’
          stunning clubhouse
        </p>
        <div className="f-grid">
          {facilities.map((facility, index) => (
            <div
              className={`f-item ${selected === index && "selected"}`}
              onClick={() => setSelected(index)}
            >
              <facility.icon />
              <h4>{facility.name?.toUpperCase()}</h4>
              <p>{facility.caption}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="col2">
        <CustomCarousel
          imagesArray={facilities.map((f) => f.image)}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  padding: 8.35vw 9.375vw 15.5vw 9.1vw;
  display: flex;
  gap: 3.26vw;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 6vw;
  }
  .col1 {
    h1 {
      color: #21436e;
      /* line-height: 4.5vw; */
      font-family: "darabic";
      &.h-1 {
        font-size: 3.5vw;
        line-height: 2.6vw;
        @media (max-width: 768px) {
          font-size: 7vw;
          line-height: 6vw;
        }
      }
      &.h-2 {
        font-size: 7vw;
        line-height: 6vw;
        @media (max-width: 768px) {
          font-size: 14vw;
          line-height: 12vw;
        }
      }
    }
    .f-section-text {
      width: 32.6vw;
      font-size: 1.25vw;
      margin-top: 2vw;
      color: #21436e;
      font-family: "sharpsans";
      @media (max-width: 768px) {
        width: auto;
        font-size: 3vw;
        margin-top: 8vw;
      }
    }
    .f-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 37.15vw;
      margin-top: 3.66vw;
      @media (max-width: 768px) {
        width: auto;
        margin-top: 7vw;
      }
      .f-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.6vw 0;
        cursor: pointer;
        @media (max-width: 768px) {
          padding: 3vw 0;
        }
        &.selected {
          svg {
            path {
              fill: #21436e;
            }
          }
          h4 {
            color: #21436e;
          }
        }
        &:nth-child(-n + 4) {
          border-bottom: dotted 1px #c4c4c4;
        }
        &:nth-child(2n) {
          border-left: dotted 1px #c4c4c4;
        }
        svg {
          width: 3vw;
          height: 3vw;
          object-fit: contain;
          margin-bottom: 1.15vw;
          @media (max-width: 768px) {
            width: 7vw;
            height: 7vw;
            margin-bottom: 3vw;
          }
          path {
            transition: color 0.5s ease;
          }
        }
        h4 {
          transition: color 0.5s ease;
          font-size: 1.25vw;
          color: #268fb4;
          font-family: "darabic";
          @media (max-width: 768px) {
            font-size: 2.5vw;
          }
        }
        p {
          text-align: center;
          color: #757575;
          font-size: 1.11vw;
          width: 11.8vw;
          margin-top: 0.7vw;
          font-family: "sharpsans";
          @media (max-width: 768px) {
            font-size: 2vw;
            width: 90%;
            margin-top: 1.3vw;
          }
        }
      }
    }
  }
  .col2 {
    .image-car {
      margin-top: 4.6vw;
    }
  }
`;

export default Facilities;
