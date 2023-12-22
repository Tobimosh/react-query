import { useContext } from "react";
import UserContext from "./user/userContext";


const useAuth = () => useContext(UserContext);

const LoginStatus = () => {
  const { user, userDispatch } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => userDispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => userDispatch({ type: "LOGIN", user: "mosh" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
