import Slide from "../shared/slider";
import useDataFetch from "../shared/useFetch";
import NavCryptoCard from "../shared/navCryptoCard";
import { Box } from "@chakra-ui/react";

const NavSlider = () => {
  type Props = {
    icon: string;
    name: string;
  };
  const { data } = useDataFetch<{ coins: [Props] }>(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=14"
  );
  console.log(data);
  if (data) {
    console.log(data?.coins);
  }
  const dataArr = data?.coins;
  return (

    <Slide slideNum={7} >
      {dataArr?.map((crpt, index) => (
        <NavCryptoCard img={crpt.icon} title={crpt.name} key={index} />
      ))}
    </Slide>
  );
};

export default NavSlider;
