import { Box, Flex, Show, Text } from "@chakra-ui/react";
import { GiAbstract024, GiAbstract016 } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { ImMenu2 } from "react-icons/im";
import CustomeSwitch from "../../shared/switch";
const AuthSection = () => {
  return (
    <Flex color="textGray" alignItems="center" height="100%">
      <Show above="md">
        <Box borderX="1px" borderColor="textGray">
          <Box borderBottom="1px" borderColor="textGray" p="3px">
            <GiAbstract016 color="#485460" fontSize="12px" />
          </Box>
          <Box p="3px">
            <GiAbstract024 color="#485460" fontSize="12px" />
          </Box>
        </Box>
        <Flex
          height="100%"
          alignItems="center"
          px="5px"
          borderRight="1px solid #485460"
        >
          <Box mr="10px" h="25px" w="25px" bg="#485460" borderRadius="full" />
          <Text fontSize="10px" color="white">
            Rashad Muntar
          </Text>
        </Flex>
        <Flex
          px="5px"
          height="100%"
          borderRight="1px solid #485460"
          alignItems="center"
        >
          <CustomeSwitch />
        </Flex>
        <Flex alignItems="center" px="5px" color="white">
          <RiLogoutCircleRLine color="#485460" />
          <Text
            color="textDefault"
            ml="5px"
            fontSize="xs"
            fontWeight="semibold"
          >
            Login
          </Text>
        </Flex>
      </Show>
      <Show below="md">
        <Flex fontSize="xl" color="textDefault">
          <ImMenu2 />
        </Flex>
      </Show>
    </Flex>
    //   alignItems="center"
    //   fontSize="xs"
    //   w={["60%", "50%", "%"]}
    //   justifyContent="flex-end"
    //   color="textGray"
    // >
    //   <Show above="md">
    //   <Box p="3px" boxSizing="content-box" h="100%" borderX="1px solid #485460">
    //     <Box p="3px">
    //       <GiAbstract016 color="textGray" />
    //     </Box>
    //     <Box p="3px">
    //       <GiAbstract024 color="textGray" />
    //     </Box>
    //   </Box>
    //   <Flex alignItems="center" px="5px" borderRight="1px solid #485460">
    // <Box
    //   mr="10px"
    //   h="25px"
    //   w="25px"
    //   bg="textGray"
    //   borderRadius="full"
    // />
    //     <Flex height="100%">
    //       <Text color="textDefault">Rashad Muntar</Text>
    //     </Flex>
    //   </Flex>
    //   <Flex justifyContent="center" px="5px" borderRight="1px solid #485460" >
    //     <CustomeSwitch />
    //   </Flex>

    // <Flex alignItems="center" px="5px">
    //   <RiLogoutCircleRLine />
    // <Text color="textDefault" ml="5px" fontWeight="semibold">
    //   Login
    // </Text>
    //   </Flex>
    //   </Show>
    // <Show below="md">
    //   <Flex fontSize="xl" color="textDefault">
    //     <ImMenu2 />
    //   </Flex>
    // </Show>
  );
};

export default AuthSection;
