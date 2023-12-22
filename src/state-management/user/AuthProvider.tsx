import React, { ReactNode, useReducer } from "react";
import UserContext from "./userContext";

interface Login {
  type: "LOGIN";
  user: string;
}

interface Logout {
  type: "LOGOUT";
}

export type UserAction = Login | Logout;

export const loginReducer = (user: string, action: UserAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";

      return user;
  }
};

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, userDispatch] = useReducer(loginReducer, "");

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
