import Slide from "../../shared/slider";
import useDataFetch from "../../shared/useFetch";
import NavCryptoCard from "../../shared/navCryptoCard";
import { SwiperSlide } from "swiper/react";
import { Flex } from "@chakra-ui/react";


const NavSlider = () => {
  type Props = {
    icon: string;
    name: string;
  };
  const { data } = useDataFetch<{ coins: [Props] }>(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=14"
  );

  const dataArr = data?.coins;
  return (
    <Flex alignItems="center" width="75%">
    <Slide slideNum={7} >
      {dataArr?.map((crpt, index) => (
          <SwiperSlide >
              <NavCryptoCard img={crpt.icon} title={crpt.name} key={index} />
          </SwiperSlide>
      ))}
    </Slide>
    </Flex>
  );
};

export default NavSlider;
