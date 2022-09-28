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
    <Flex h="100%" whiteSpace="nowrap" borderRight="1px solid #485460" overflow="hidden"  px="10px" fontSize="xs" alignItems="center">
      <Box position="relative" w="1rem" h="1rem" mr="3px">
        <Image src={img} layout="fill" />
      </Box>
      <Text color={colors[Math.round(Math.random() * 7)]}>{title}</Text>
    </Flex>
  );
};

export default NavCryptoCard;
