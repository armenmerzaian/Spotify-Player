import React, { createContext, ReactNode, useContext, useState } from "react";
import User from "./userInterface";

interface userContextInterface {
    userState: User | null,
    loginUser: Function,
    logoutUser: Function,
}

const userStateContext = createContext<userContextInterface | null>(null);

export const UserContextProvider = ({ children }: { children: | ReactNode}) => {
  const [userState, setUserState] = useState<User | null>(null);

  function loginUser(user: User): void {
    setUserState(user);
  }

  function logoutUser(): void{
    setUserState(null);
  }

  return <userStateContext.Provider value={{userState, loginUser, logoutUser}}>{children}</userStateContext.Provider>;
};

export const userAuth = () => {
    return useContext(userStateContext);
}
