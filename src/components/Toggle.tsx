import { FC, ReactNode, useState } from "react";

interface ToggleProps {
  children: (isOpen: boolean, toggle: () => void) => ReactNode;
}

const Toggle: FC<ToggleProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return <>{children(isOpen, toggle)}</>;
};

export default Toggle;
