import React, { useEffect, useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import User from "../util/userInterface";
import { userAuth } from "../util/userContext";
import fetchAuth from "../util/fetchAuth";

export const Login = () => {

  const [user, setUser] = useState<User | null>(null);
  const authorizer = userAuth();
  const navigate: NavigateFunction = useNavigate();
  

  useEffect(() => {
    if (authorizer?.userState){
        navigate("/dashboard");
    } else {
        fetchAuth();
    }
 
  }, [user]);

  return <></>;
};
