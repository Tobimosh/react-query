import { useContext, useReducer, useState } from "react";
import { loginReducer } from "../react-query/reducer/loginReducer";
import UserContext from "./context/userContext";
import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  const {user, userDispatch} = useAuth()

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => userDispatch({type: 'LOGOUT'})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => userDispatch({type: 'LOGIN', user: 'mosh'})} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
