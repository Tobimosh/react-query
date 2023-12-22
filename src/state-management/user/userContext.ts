import { Dispatch } from "react";
import { UserAction } from "./AuthProvider";
import React from "react";



interface UserContextInterface {
    user: string;
    userDispatch: Dispatch<UserAction>
}


const UserContext = React.createContext<UserContextInterface>({} as UserContextInterface)

export default UserContext;