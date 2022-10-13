import React from "react";
import { useSelector } from "react-redux";
import { Box, Flex, Select, Text } from "@chakra-ui/react";

const Balance = () => {
  const data = useSelector((state: any) => state.crypto);

  return (
    <Flex
      width={{ sm: "100%", md: "60%" }}
      p="5px"
      justifyContent="space-between"
      alignItems="center"
      border="1px"
      borderColor="textGray"
    >
      <Flex w="50%" justify="space-between" alignItems="center">
        <Text>Balance:</Text>
        <Select w="62%" size="xs">
          <option value="Bitcoin">Bitcoin</option>
          <option value="Ethereum">Ethereum</option>
        </Select>
      </Flex>
      <Flex w="40%" justifyContent="space-between" whiteSpace="nowrap">
        <Text>Bitcoin:</Text>
        <Text whiteSpace="nowrap">11132432432423</Text>
      </Flex>
    </Flex>
  );
};

export default Balance;
