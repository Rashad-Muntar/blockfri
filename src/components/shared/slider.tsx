import React, { ReactNode } from "react";
import Slider from "react-slick";
 import {BiRightArrowAlt, BiLeftArrowAlt} from "react-icons/bi"


interface Props {
    slideNum: number,
    children: ReactNode
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BiRightArrowAlt 
        className={className}
        style={{ ...style, display: "block", color: "#485460" }}
        onClick={onClick}
        />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BiLeftArrowAlt 
        className={className}
        style={{ ...style, display: "block", color: "#485460" }}
        onClick={onClick}
        />
    );
  }
const Slide  = ({children, slideNum}: Props) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slideNum,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
      <div style={{position: "fixed", top: "0", width:"40%", left:"15%"}}>
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    );
  }

  export default Slide