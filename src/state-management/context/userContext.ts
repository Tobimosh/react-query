import { Dispatch } from "react";
import { UserAction } from "../../react-query/reducer/loginReducer";
import React from "react";



interface UserContextInterface {
    user: string;
    userDispatch: Dispatch<UserAction>
}


const UserContext = React.createContext<UserContextInterface>({} as UserContextInterface)

export default UserContext;