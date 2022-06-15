import React, { useEffect, useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import User from "../util/userInterface";
import { userAuth } from "../util/userContext";
import AuthLink from "../util/AuthLink";

export const Login = () => {

  const [user, setUser] = useState<User | null>(null);
  const authorizer = userAuth();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (authorizer?.userState){
        navigate("/dashboard");
    } else if (window.location.hash){
        console.log("got hash:" + window.location.hash);

    } else {
        window.location.href = AuthLink();
    }
 
  }, [user]);

  return <></>;
};
