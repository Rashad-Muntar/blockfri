import Slide from "../../shared/slider";
import type { RootState } from "../../app/store";
import useDataFetch from "../../shared/useFetch";
import NavCryptoCard from "../../shared/navCryptoCard";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

const NavSlider = () => {
  
  const data = useSelector((state: RootState) => state.crypto);

  const dataArr = data?.coins;
  return (
    <Flex alignItems="center" width="75%">
      <Slide slideNum={7}>
        {data.length > 0 && data?.slice(0, 14).map((crpt, index) => (
          <SwiperSlide>
            <NavCryptoCard img={crpt.image} title={crpt.name} key={index} />
          </SwiperSlide>
        ))}
      </Slide>
    </Flex>
  );
};

export default NavSlider;
