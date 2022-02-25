import * as React from 'react';
import "./chart.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface IChartProps {
}

const Chart: React.FunctionComponent<IChartProps> = (props) => {

  const data = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Mar",
      "Active User": 4000,
    },
    {
      name: "Apr",
      "Active User": 7000,
    },
    {
      name: "May",
      "Active User": 9000,
    },
    {
      name: "Jun",
      "Active User": 3000,
    },
    {
      name: "Jul",
      "Active User": 3500,
    },
    {
      name: "Aug",
      "Active User": 6000,
    },
    {
      name: "Sep",
      "Active User": 5000,
    },
    {
      name: "Oct",
      "Active User": 9000,
    },
    {
      name: "Nov",
      "Active User": 9500,
    },
    {
      name: "Dec",
      "Active User": 6000,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chart-title">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
        >
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" activeDot={{ r: 8 }} dataKey="Active User" stroke="#5550bd" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Tooltip>
          </Tooltip>
          <CartesianGrid stroke={"#e0dfdf"} strokeDasharray="5 5"></CartesianGrid>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
