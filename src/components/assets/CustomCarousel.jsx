import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
const CustomCarousel = ({ imagesArray, selected, setSelected }) => {
  const [imageSelected, setImageSelected] = useState(0);
  useEffect(() => {
    const carouselImages = imagesArray
      ? document.querySelector("#image-container-carousel")
      : null;
    const size = imagesArray ? carouselImages.clientWidth : null;
    if (carouselImages)
      carouselImages.style.transform = `translateX(${-imageSelected * size}px)`;
  }, [imageSelected]);

  useEffect(() => {
    setImageSelected(0);
  }, [imagesArray]);

  useEffect(() => {
    setImageSelected(selected);
  }, [selected]);

  useEffect(() => {
    setSelected(imageSelected);
  }, [imageSelected, setSelected]);

  return (
    <StyledCarousel className="image-car">
      {imagesArray && imagesArray.length > 0 && (
        <div className="slider">
          <div
            onClick={() =>
              setImageSelected(
                imageSelected === imagesArray.length - 1 ? 0 : imageSelected + 1
              )
            }
            className="btn-next"
          >
            {">"}
          </div>
          <div
            className="btn-prev"
            onClick={() =>
              setImageSelected(
                imageSelected === 0 ? imagesArray.length - 1 : imageSelected - 1
              )
            }
          >
            {"<"}
          </div>
          <div className="images" id="image-container-carousel">
            {imagesArray.map((src) => (
              <img src={src} alt="" />
            ))}
          </div>
          <div className="bullets">
            {imagesArray.map((img, index) => (
              <div
                className={`bullet ${
                  imageSelected === index ? "selected-bullet" : 0
                }`}
                onClick={() => setImageSelected(index)}
              ></div>
            ))}
          </div>
        </div>
      )}
    </StyledCarousel>
  );
};

const StyledCarousel = styled.div`
  height: 30vw;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: 60vw;
  }
  .slider {
    position: relative;
    width: 39.4vw;
    height: 54vw;
    display: flex;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 90%;
    }
    .images {
      display: flex;
      transition: 1s;
      width: 100%;
      height: 100%;
    }
    img {
      min-width: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }
  .bullets {
    position: absolute;
    display: flex;
    bottom: 0vw;
    right: 50%;
    transform: translateX(50%);
    gap: 0.5vw;
    @media (max-width: 768px) {
      bottom: 2vw;
      gap: 2vw;
    }
    .bullet {
      display: flex;
      width: 1vw;
      height: 1vw;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.5s;
      background: rgba(196, 196, 196, 0.4);
      @media (max-width: 768px) {
        width: 3vw;
        height: 3vw;
        border: 1px white solid;
      }
      &:hover {
        background: ${colors.Navy};
      }
      &.selected-bullet {
        background: #c4c4c4;
      }
    }
  }
  .btn-next,
  .btn-prev {
    font-family: unset;
    font-size: 4vw;
    color: ${colors.MainBeige};
    cursor: pointer;
    opacity: 0.8;
    transition: 0.5s;
    @media (max-width: 768px) {
      font-size: 12vw;
    }
    &:hover {
      opacity: 1;
      color: #268fb4;
    }
  }
  .btn-next {
    z-index: 10;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .btn-prev {
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0vw;
  }
`;
export default CustomCarousel;
