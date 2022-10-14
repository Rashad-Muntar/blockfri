import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { format, fromUnixTime, getUnixTime, parseISO, subDays } from "date-fns";
import useDataFetch from "../shared/useFetch";
import dynamic from "next/dynamic";
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
  AreaChart,
  Area,
} from "recharts";

type Props = {
  icon: string;
  name: string;
  data: { prices: [] };
};

const DetailChart = ({ data }: Props) => {
  const dt = useSelector((state: any) => state.detail);
  const [init, setInit] = useState("bitcoin");
  const [domLoadin, setDomLoading] = useState(false);
  const [formatData, setFormatData] = useState([]);

  useEffect(() => {
    setInit(dt);
  }, [dt]);
  const foarmatedData = [];

  // useEffect(() => {

  //   data?.prices.map((dt, inex) => {
  //     let dateSubStr = fromUnixTime(dt[0]);
  //     dateSubStr = format(dateSubStr, "MMM, dd");
  //     foarmatedData.push({ date: dateSubStr, price: dt[1] });
  //   });
  // }, [domLoadin]);

  data?.prices.map((dt, inex) => {
    let dateSubStr = fromUnixTime(dt[0]);
    dateSubStr = format(dateSubStr, "MMM-d");
    foarmatedData.push({
      date: dateSubStr,
      price: `${dt[1]?.toFixed(2)}`,
    });
  });

  useEffect(() => {
    setDomLoading(true);
  }, []);

  return (
    <Box>
      {domLoadin && (
        <LineChart
          width={730}
          height={350}
          data={foarmatedData}
          margin={{ top: 5, right: 10, left: 40, bottom: 5 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickCount={2}
          />
          <YAxis
            hide={true}
            dataKey="price"
            axisLine={false}
            tickLine={false}
            tickFormatter={(num) => `$${num}`}
            tickCount={5}
            domain={["dataMin - 100", "dataMax + 500"]}
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="date" stroke="#8884d8" />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
      )}
    </Box>
  );
};

export default DetailChart;
