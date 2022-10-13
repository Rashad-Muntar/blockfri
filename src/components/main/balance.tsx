import React from "react";
import { useSelector } from "react-redux";
import { Box, Flex, Select, Text } from "@chakra-ui/react";

const Balance = () => {
  const data = useSelector((state: any) => state.crypto);

  return (
    <Flex>
      <Flex>
        <Text>Balance:</Text>
        <Select>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Ethereum">Ethereum</option>
        </Select>
      </Flex>
      <Flex>
        <Text>Bitcoin:</Text>
        <Text></Text>
      </Flex>
    </Flex>
  );
};

export default Balance;
