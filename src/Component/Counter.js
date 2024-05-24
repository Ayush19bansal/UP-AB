import React, { useState, useEffect } from "react";
import { Button, Box, useColorMode } from "@chakra-ui/react";
import { Getctx } from "./UserContext";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Counter = () => {
  const ctx = Getctx();
  const [count, setCount] = useState(0);
  const { colorMode } = useColorMode();
  const [chartData, setChartData] = useState([]); // Initialize with an empty array

  useEffect(() => {
    ctx.setdata(count);
    setChartData((prevData) => [...prevData, count]);
  }, [count]);

  const data = {
    labels: chartData.map((_, index) => index), // Use index as labels
    datasets: [
      {
        label: "Counter",
        data: chartData,
        fill: false,
        backgroundColor: "purple",
        borderColor: "purple",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    aspectRatio: 3.5,
    scales: {
      x: {
        type: "linear",
        ticks: {
          min: 0, // Not used in this case, max ensures all data points are covered
          max: chartData.length - 1, // Set max value based on chartData length
          stepSize: 1,
        },
      },
      y: {
        type: "linear",
        ticks: {
          min: 0, // Start y-axis from 0
          max: 23,
          stepSize: 1,
        },
      },
    },
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box zIndex={1} textAlign="center">
        <h1 className="h1">Counter: {count}</h1>
        <Button
          colorScheme="blue"
          onClick={() => setCount(Math.min(count + 1, 23))}
          className="btn btn1"
        >
          Increment
        </Button>
        <Button
          colorScheme="red"
          onClick={() => setCount(Math.max(count - 1, 0))}
          className="btn btn2"
        >
          Decrement
        </Button>
        <Button onClick={() => setCount(0)} className="btn btn3">
          Reset
        </Button>
      </Box>
      <Line zIndex={10} data={data} options={options} />
    </Box>
  );
};

export default Counter;
