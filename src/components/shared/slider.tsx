import React, { ReactNode } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import "swiper/css";
interface Props {
  slideNum: number;
  children?: ReactNode;
}

const Slide = ({ children, slideNum }: Props) => {
  return (
    <Flex h="100%">
      <Swiper
        slidesPerView={slideNum}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        modules={[Navigation]}
        loop={true}
        width={600}
        className="mySwiper"
      >
        {children}
      </Swiper>
      <Flex borderX="1px" flexDirection="column" alignItems="center" borderColor="textGray" w="10%">
        <Box className="review-swiper-button-prev" borderBottom="1px" borderColor="textGray">
          <BiLeftArrowAlt
            className="review-swiper-button-prev"
            color="#00d8d6"
          />
        </Box>
        <Box className="review-swiper-button-next">
          <BiRightArrowAlt
            className="review-swiper-button-next"
            color="#00d8d6"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Slide;
