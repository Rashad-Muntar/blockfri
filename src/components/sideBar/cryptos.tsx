// import type { RootState } from "../../app/store";
// import Root
import Image from "next/image";
import { useSelector } from "react-redux";
import { Box, Text, Flex, Button } from "@chakra-ui/react";

const Cryptos = () => {
  const data = useSelector((state: any) => state.crypto);
  return (
    <Box mx="10px">
      {data.length > 0 &&
        data?.slice(0, 3).map((crpt, index) => (
          <Flex justifyContent="space-between">
            <Flex>
              <Text>{crpt.name}</Text>
            </Flex>

            {/* <Text>{crpt.current_price.toFixed(2)}</Text> */}
          </Flex>
        ))}
      <Flex my="10px" justifyContent="space-between">
        <Button
          size="xs"
          w="45%"
          border="1px"
          borderColor="sunsetRed"
          bg="transparent"
          color="white"
        >
          Withdraw
        </Button>
        <Button
          size="xs"
          w="45%"
          border="1px"
          borderColor="jadeBlue"
          bg="transparent"
          color="white"
        >
          deposit
        </Button>
      </Flex>
    </Box>
  );
};

export default Cryptos;

// market?vs_currency=usd&order