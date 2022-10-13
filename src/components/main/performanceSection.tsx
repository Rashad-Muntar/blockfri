import React from "react";
import { Box, Text, Flex, Show } from "@chakra-ui/react";
import CurrentTime from "./currentTime";
import Balance from "./balance";
import { MdHistoryEdu } from "react-icons/md";
function PerformanceSection() {
  return (
    <Box
      color="textGray"
      width={{ sm: "100%", md: "100%", lg: "55%" }}
      m="20px"
      box-sizing="border-box"
    >
      <Text width="100%" borderBottom="1px" borderColor="textGray">
        Performance
      </Text>
      <Flex width="100%" fontSize="xs" my="15px" justifyContent="space-between">
        <Show above="md">
        <CurrentTime />
        </Show>
        <Balance />
        <Show above="md">
          <Flex
            border="1px"
            justifyContent="space-between"
            px="5px"
            borderColor="textGray"
            alignItems="center"
          >
            <Box className="" border="1px" borderColor="textGray">
              <MdHistoryEdu fontSize="25px" />
            </Box>
            <Box border="1px" borderColor="textGray">
              <MdHistoryEdu fontSize="25px" />
            </Box>
          </Flex>
        </Show>
      </Flex>
    </Box>
  );
}

export default PerformanceSection;
