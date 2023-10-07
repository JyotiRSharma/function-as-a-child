import { useState, useEffect, ReactNode, FC } from "react";

interface TimerProps {
    children: (time: number, startTimer: () => void, stopTimer: () => void) => ReactNode
}

const Timer: FC<TimerProps> = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState<number | null>(null);

  const startTimer = () => {
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      const intervalId = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setTimerInterval(intervalId);
    } else {
      if (timerInterval) {
        clearInterval(timerInterval);
        setTimerInterval(null);
      }
    }

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [isRunning]);

  return <>{children(time, startTimer, stopTimer)}</>;
};

export default Timer;