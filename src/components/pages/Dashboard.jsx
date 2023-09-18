import React, { useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Main from "../common/Main";

const Dashboard = (props) => {
  const { user } = props;

  return (
    <>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex h-full">
            <Sidebar user={user} />
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
