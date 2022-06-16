import React, { useEffect } from "react";
import { userAuth } from "../util/userContext";
import { useNavigate } from "react-router";

export const Dashboard = () => {
  const navigate = useNavigate();
  const authorizer = userAuth();

  useEffect(() => {
    if (!authorizer.userState) {
      navigate("/login");
    }
  }, []);

  

  return <div>{authorizer?.userState?.access_token}</div>;
};
