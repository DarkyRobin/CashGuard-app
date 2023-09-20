import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const Dashboard = (props) => {
  const { user, uuid } = props;

  return (
    <> 
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex h-full">
            <Sidebar user={user} />
            <Main user={ user } uuid={ uuid }/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
