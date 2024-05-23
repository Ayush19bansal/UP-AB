import React, { useState, useEffect } from "react";
import { Button, Box, useColorMode } from "@chakra-ui/react";
import { Getctx } from "./UserContext";

const Counter = () => {
  const ctx = Getctx();
  const [count, setCount] = useState(0);
  const { colorMode } = useColorMode();

  useEffect(() => {
    ctx.setdata(count);
  }, [count]);

  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Box zIndex={1} textAlign="center">

      <h1 className="h1">Counter: {count}</h1>
      {/* Replace MUI Button with Chakra UI Button */}
      <Button
        colorScheme="blue"
        onClick={() => setCount(Math.min(count + 1, 20))}
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
  </Box>
  );
};

export default Counter;