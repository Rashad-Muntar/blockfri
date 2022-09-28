import { Box, color, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import Wrapper from "../shared/wrapper";
import { GiCalendarHalfYear } from "react-icons/gi";
import NavSlider from "./navSlider";

import useDataFetch from "../shared/useFetch";

const Nav = () => {
  return (
    <Wrapper>
      <Flex borderBottom="1px solid #485460">
        <Flex alignItems="center">
          <Flex
            alignItems="center"
            h="100%"
            color="jadeBlue"
            w="160px"
            justifyContent="center"
            borderRight="1px solid #485460"
          >
            <GiCalendarHalfYear color="textDefault" />
            <Text fontWeight="bold" ml="0.5rem" color="textDefault">
              {" "}
              BlockFri
            </Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <NavSlider />
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Nav;
