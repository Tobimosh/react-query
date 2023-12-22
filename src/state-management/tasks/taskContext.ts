import { Dispatch } from "react";
import { Action, Task } from "./TaskProvider";
import React from "react";


interface TaskContextInterface {
    tasks: Task[],
    dispatch: Dispatch<Action>;
}

const TasksContext = React.createContext<TaskContextInterface>({} as TaskContextInterface )

export default TasksContext;