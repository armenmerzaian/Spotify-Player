import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import User from "../util/userInterface";
import { userAuth, userContextInterface } from "../util/userContext";
import authLink from "../util/authLink";
import parseHash from "../util/parseHash";

export const Login = () => {
  const [user, setUser] = useState<User>();
  const authorizer: userContextInterface = userAuth();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (authorizer.userState) {
      navigate("/dashboard");
    } else if (window.location.hash) {
      const userToken: User = parseHash(window.location.href);
      authorizer.loginUser(userToken);
      setUser(userToken);
    } else {
      window.location.href = authLink();
    }
  }, [user]);

  // TODO: Loading spinner
  // TODO: Error Handling
  // TODO: Save userState & timestamp to localstorage, then test in on page reload 
  return <></>;
};
