import { useContext } from "react";
import TasksContext from "../context/taskContext";


const useTask = () => useContext(TasksContext);

export default useTask;
