import { Flex, Text, Show, Box, border } from "@chakra-ui/react";
import Wrapper from "../shared/wrapper";
import { GiCalendarHalfYear } from "react-icons/gi";
import NavSlider from "./navComponents/navSlider";
import AuthSection from "./navComponents/authSection";
const Nav = () => {
  return (
    <Wrapper>
      <Flex
        height="40px"
        borderBottom="1px solid #485460"
        justifyContent="space-between"
        px={["20px", "20px", "0"]}
      >
        <Flex w="60%">
          <Flex justifyContent="center" borderRight="1px" borderColor="textGray" alignItems="center" color="white" w="37.5%">
            <Flex h="100%" alignItems="center">
              <GiCalendarHalfYear />
            </Flex>
            <Flex>
              <Text h="100%" whiteSpace="nowrap">
                Block
              </Text>
            </Flex>
          </Flex>
          <Show above="md">
            <NavSlider />
          </Show>
        </Flex>
        <AuthSection />
      </Flex>
    </Wrapper>
  );
};

export default Nav;
