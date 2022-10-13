import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { subDays, fromUnixTime } from "date-fns";
import useDataFetch from "../shared/useFetch";
import axios from "axios";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  Legend,
} from "recharts";

type Props = {
  icon: string;
  name: string;
};
function DetailChart() {
  const dt = useSelector((state: any) => state.detail);
  const [init, setInit] = useState("bitcoin");
  //   const { data } = useDataFetch<{ coins: [Props] }>(
  //     `https://api.coingecko.com/api/v3/coins/${dt}/market_chart?vs_currency=usd&days=7`
  //   );
  useEffect(() => {
        setInit(dt);
  }, [dt]);
  console.log(init)

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${init}/market_chart?vs_currency=usd&days=7`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dt]);

  console.log(typeof dt);
  //   console.log(data);
  // console.log(fromUnixTime(54751))
  const dtData = "";
  // console.log(`https://api.coingecko.com/api/v3/coins/${dt}/market_chart?vs_currency=usd&days=7`)
  // console.log(data[0].sparkline_in_7d.price.slice(0, 10))
  return (
    <Box>
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          // data={}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default DetailChart;
