import React, { createContext, ReactNode, useContext, useState } from "react";
import User from "./userInterface";

export interface userContextInterface {
  userState: User;
  loginUser: Function;
  logoutUser: Function;
}

const userStateContext: React.Context<userContextInterface> = createContext<
  userContextInterface | any
>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userState, setUserState] = useState<User | any>();

  function loginUser(user: User): void {
    setUserState(user);
  }

  function logoutUser(): void {
    setUserState(null);
  }

  return (
    <userStateContext.Provider value={{ userState, loginUser, logoutUser }}>
      {children}
    </userStateContext.Provider>
  );
};

export const userAuth = (): userContextInterface => {
  return useContext(userStateContext);
};
