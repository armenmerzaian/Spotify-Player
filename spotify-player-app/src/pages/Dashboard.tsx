import { useLayoutEffect } from "react";
import { userAuth } from "../util/userContext";
import { useNavigate } from "react-router";
import { Sidebar } from "../components/Sidebar";
import NavBar from "../components/NavBar";

export const Dashboard = () => {
  const navigate = useNavigate();
  const authorizer = userAuth();

  useLayoutEffect(() => {
    if (!authorizer.userState) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex mx-auto">
      <div className="grid grid-cols-5 grid-row-2 w-full h-full min-h-full relative">
        <div id="sidebar-container" className="hidden md:block h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] w-full">
          <Sidebar />
        </div>
        <div id="main-container" className="bg-green-500 col-span-full h-[calc(100vh-4rem)] md:col-span-4 md:h-[calc(100vh-6rem)] w-full">
          
        </div>
        <div id="playcontrol-container" className="bg-blue-500 col-span-5 h-16 md:h-[6rem] w-full">
          
        </div>
      </div>
    </div>
  );
};

// TODO: Setup grid layout
