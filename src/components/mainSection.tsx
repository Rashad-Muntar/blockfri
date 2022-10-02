import Wrapper from "./shared/wrapper";
import { Grid, GridItem, Flex, Box } from "@chakra-ui/react";
import SideBar from "./sideBar/sidebar";
const MainSection = () => {
  return (
    <Wrapper>
      <Flex w="100%">
        <Box w="20%">
          <SideBar />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default MainSection;
