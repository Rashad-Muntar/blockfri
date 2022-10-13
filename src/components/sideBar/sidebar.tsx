import Wrapper from "../shared/wrapper";
import { GiCalendarHalfYear } from "react-icons/gi";
import Cryptos from "./cryptos";
import { Box, Flex, Text } from "@chakra-ui/react";
import DashMenu from "./dashboardMenus";
const SideBar = () => {
  return (
    <Box
      color="textGray"
      pt="10px"
      fontSize="xs"
      h="100vh"
      w="100%"
      borderRight="1px"
      borderColor="textGray"
    >
      <Flex p="5px"  mx="10px"   rounded="base" bg="black" justifyContent="space-between">
        <Text>System status</Text>
        <Text color="jadeBlue">Active</Text>
      </Flex>
      <Box rounded="base" p="5px" m="10px" border="1px" borderColor="textGray">
        <Flex
          justifyContent="space-between"
          borderBottom="1px"
          borderColor="textGray"
        >
          <Text fontStyle="semiBold">Total Balance</Text>
          <Text color="jadeBlue">$245215764</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Pending</Text>
          <Text color="mGold">$2452157</Text>
        </Flex>
      </Box>
      <Cryptos />

      <Box px="10px" borderY="1px" borderColor="textGray" py="5px">
        <Text>Dashboard menu</Text>
      </Box>
      <Box ml="10px">
        <DashMenu />
      </Box>
      <Box px="10px" borderY="1px" borderColor="textGray" py="5px">
        <Text>Dashboard menu</Text>
      </Box>
      <Flex px="10px" align="center" borderY="1px" borderColor="textGray" py="10px">
        <GiCalendarHalfYear color="white" fontSize="20px"/>
        <Text fontSize="16px" ml="15px">Dashboard menu</Text>
      </Flex>
    </Box>
  );
};

export default SideBar;
