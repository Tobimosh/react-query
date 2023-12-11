import { useReducer } from "react";
import "./App.css";
import { taskListReducer } from "./react-query/reducer/taskListReducer";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/context/taskContext";
import { loginReducer } from "./react-query/reducer/loginReducer";
import UserContext from "./state-management/context/userContext";
import AuthProvider from "./state-management/AuthProvider";
import TaskProvider from "./state-management/TaskProvider";

function App() {


  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>

   
    </AuthProvider>
  );
}

export default App;
