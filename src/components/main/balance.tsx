import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { setDetailName } from "../../State/detailCryptoslice";

const Balance = () => {
  const [curentCrypto, setCurrentcrypto] = useState("")
  const dispatch = useDispatch()

  const handleSelect = (e) => {
    setCurrentcrypto(e.target.value)
  }
  useEffect(() => {
    dispatch(setDetailName(curentCrypto))
  }, [curentCrypto])
  
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
        <Select w="62%" size="xs" onChange={handleSelect}>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
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
