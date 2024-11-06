import React from "react"
import Sidebar from "../Sidebar/Sidebar"
import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <main className="flex-1 overflow-auto relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
