import Wrapper from "./shared/wrapper";
import { Flex, Box, Show } from "@chakra-ui/react";
import SideBar from "./sideBar/sidebar";
import PerformanceSection from "./main/performanceSection";
const MainSection = () => {
  return (
    <Wrapper>
      <Flex w="100%">
        <Show above="md">
        <Box w="20%" minW="200px">
          <SideBar />
        </Box>
        </Show>
        <PerformanceSection />
      
      </Flex>
    </Wrapper>
  );
};

export default MainSection;
