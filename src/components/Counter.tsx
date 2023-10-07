import { useState, ReactNode, FC } from "react";

interface CounterProps {
  children: (count: number, incrementCount: () => void) => ReactNode;
}

const Counter: FC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <>{children(count, incrementCount)}</>;
};

export default Counter;
