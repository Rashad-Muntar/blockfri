import Wrapper from "../shared/wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
const SideBar = () => {
  return (
    <Box color="textGray" fontSize="xs" w="100%">
      <Flex p="5px" rounded="base" bg="black" justifyContent="space-between">
        <Text>System status</Text>
        <Text color="jadeBlue">Active</Text>
      </Flex>
      <Box>
        <Flex justifyContent="space-between">
          <Text fontStyle="semiBold">Total Balance</Text>
          <Text color="jadeBlue">$245215764</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Pending</Text>
          <Text color="mGold">$2452157</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default SideBar;
