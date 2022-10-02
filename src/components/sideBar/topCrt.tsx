import { Flex, Text } from "@chakra-ui/react";
import useDataFetch from "../shared/useFetch";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  price: string;
}

const TopCrt = ({ icon, title, price }: Props) => {

  return (
    <Flex justifyContent="space-between">
      <Flex>
        <Image src={icon} />
        <Text>{title}</Text>
      </Flex>
      <Text>{price}</Text>
    </Flex>
  );
};

export default TopCrt;
