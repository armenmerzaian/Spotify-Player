import React from "react";
import { userAuth } from "../util/userContext";

export const Dashboard = () => {
  const authorizer = userAuth();
  return <div>{authorizer?.userState?.access_token}</div>;
};
