import { FC, ReactNode, useEffect, useState } from "react";

interface ITaskItem {
  id: number;
  task: string;
  status: string;
}

interface IFiltererProps {
    options: string[]
    children: (data: ITaskItem[]) => ReactNode
}

const Filterer: FC<IFiltererProps> = ({ options, children }) => {
  // options: An array of filter options (e.g., ["All", "Active", "Completed"]).
  // children: A function that takes the selected option as an argument and returns JSX to render the filtered list.
  // Children takes options as an argument to returns jsx to render the filtered list
  // The Filter component should maintain the selected option in its state.

  const [data, setData] = useState<ITaskItem[]>([
    { id: 0, task: "wakeup", status: "completed" },
    { id: 1, task: "breakfast", status: "completed" },
    { id: 2, task: "lunch", status: "active" },
    { id: 3, task: "dinner", status: "not started" },
  ]);
  const [filteredData, setFilteredData] = useState<ITaskItem[]>([]);

  useEffect(() => {

    const filterData = () => {
        if (options.includes("all")) {
            setFilteredData(data)
            return
        }
      setFilteredData(data.filter((item) => options.includes(item.status)))
    };
    filterData();
  }, [options]);

  return <>{children(filteredData)}</>;
};

export default Filterer;
