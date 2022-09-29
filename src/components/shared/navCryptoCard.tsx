import Image from "next/image";
import { Flex, Text, Box } from "@chakra-ui/react";

interface Props {
  img: string;
  title: string;
}
const colors = [
  "#575fcf",
  "#f53b57",
  "#575fcf",
  "#0fbcf9",
  "#0be881",
  "#ffc048",
  "#ffd32a",
  "#ff3f34",
];

const NavCryptoCard = ({ img, title }: Props) => {
  return (
    <Flex
      _hover={{
        borderBottom: "3px solid 'linear(to-l, #7928CA, #FF0080)'",
      }}
      h="100%"
      whiteSpace="nowrap"
      borderRight="1px solid #485460"
      // overflow="hidden"
      // px="10px"
      fontSize="xs"
      alignItems="center"
    >
      <Box
        mr="3px"
      >
        <Image src={img} layout="fill" />
      </Box>
      <Text noOfLines={1} color={colors[Math.round(Math.random() * 7)]}>{title}</Text>
    </Flex>
  );
};

export default NavCryptoCard;
