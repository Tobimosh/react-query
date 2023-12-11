import { ReactNode, useContext, useReducer } from "react";
import TasksContext from "./context/taskContext";
import { taskListReducer } from "../react-query/reducer/taskListReducer";


interface Props{
    children: ReactNode
}
const TaskProvider = ({children}: Props) => {
      const [tasks, dispatch] = useReducer(taskListReducer, []);

  return (
    <TasksContext.Provider value={{tasks, dispatch}}>
            {children}
    </TasksContext.Provider>
 
  )
}

export default TaskProvider
