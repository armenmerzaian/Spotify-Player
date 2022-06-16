import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import User from "../util/userInterface";
import { userAuth } from "../util/userContext";
import AuthLink from "../util/AuthLink";
import parseHash from "../util/parseHash"

export const Login = () => {

  const [user, setUser] = useState<User | null>(null);
  const authorizer = userAuth();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    console.log(authorizer?.userState);

    if (authorizer?.userState){
        console.log("navigating to dashboard")
        navigate("/dashboard");
    } else if (window.location.hash){
        console.log("extracting the hash")
        const userToken: User = parseHash(window.location.href);
        console.log(userToken);
        console.log("setting user state");
        authorizer?.loginUser(userToken);
        setUser(userToken);


    } else {
        console.log("redirecting to spotify auth")
        window.location.href = AuthLink();
    }
 
  }, [user]);

  return <></>;
};
