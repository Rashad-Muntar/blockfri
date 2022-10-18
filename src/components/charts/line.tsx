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
  
  interface LineProp <T>  {
    data: T[];
    xAxis: T;
    yAxis: T;
    lineData: T
  }

const LineCharts = <T extends unknown>({data, xAxis, yAxis, lineData}: LineProp<T>) => {
    return (
        <ResponsiveContainer  height={350}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: 40, bottom: 5 }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            opacity={0.3}
          />
          <XAxis
            dataKey={xAxis}
            axisLine={false}
            tickLine={false}
            tickCount={2}
          />
          <YAxis
            hide={true}
            dataKey={yAxis}
            axisLine={false}
            tickLine={false}
            tickFormatter={(num) => `$${num}`}
            tickCount={5}
            domain={["dataMin - 100", "dataMax + 500"]}
          />
          <Tooltip />
          <Legend />
          <Line  activeDot={false}  type="step" dataKey={lineData} stroke="#ff5e57" />
        </LineChart>
      </ResponsiveContainer>
    )
}

export default LineCharts