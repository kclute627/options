import React from "react";
import Clock from "../components/dashboard/Clock";
import DashboardSideBar from '../components/dashboard/DashboardSideBar';

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="dashboard__sidebar">
            <DashboardSideBar />
        </div>
        
      <div className="clock">
        <Clock />
      </div>
    </div>
  );
};

export default Dashboard;
