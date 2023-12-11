import { useReducer } from "react";
import "./App.css";
import { taskListReducer } from "./react-query/reducer/taskListReducer";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/context/taskContext";
import { loginReducer } from "./react-query/reducer/loginReducer";
import UserContext from "./state-management/context/userContext";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, dispatch] = useReducer(taskListReducer, []);


  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar/>
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
