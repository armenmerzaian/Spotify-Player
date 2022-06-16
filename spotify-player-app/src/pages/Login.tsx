import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import User from "../util/userInterface";
import { userAuth, userContextInterface } from "../util/userContext";
import AuthLink from "../util/AuthLink";
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
      window.location.href = AuthLink();
    }
  }, [user]);

  // TODO: Loading spinner
  return <></>;
};
