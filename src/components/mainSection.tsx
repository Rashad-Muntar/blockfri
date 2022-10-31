import React, { useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "./shared/wrapper";
import { Flex, Box, Show } from "@chakra-ui/react";
import SideBar from "./sideBar/sidebar";
import PerformanceSection from "./main/performanceSection";
import DetailChart from "./main/detailChart";
import Testing from "./main/testing";
import useDataFetch from "./shared/useFetch";
import { addDays, subDays, fromUnixTime, getUnixTime } from "date-fns";

type Props = {};

const MainSection = () => {
  const dt = useSelector((state: any) => state.cryptoDetails);
  const date = new Date();
  const endDate = addDays(date, 1);
  const currentDate = getUnixTime(date);
  const endDateUnit = getUnixTime(date);

  const { data } = useDataFetch<{ coins: [Props] }>(
    `https://api.coingecko.com/api/v3/coins/${dt.name}/market_chart?vs_currency=usd&days=30&interval=daily`
  );
  console.log(data)
 
  return (
    <Wrapper>
      <Flex w="100%">
        <Show above="md">
          <Box w="20%" minW="200px">
            <SideBar />
          </Box>
        </Show>
        <Box width={{ sm: "100%", md: "100%", lg: "55%" }} m="20px">
          <PerformanceSection />
          <DetailChart data={data} />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default MainSection;
