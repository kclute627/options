import React from "react";
import Clock from "../components/dashboard/Clock";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
import OpenOrders from "../components/dashboard/OpenOrders";
import Markets from "../components/dashboard/Markets";
import Gains from "../components/dashboard/Gains";
import WatchList from "../components/dashboard/WatchList";
import Daygain from "../components/dashboard/Daygain";
const Dashboard = () => {
  const dashboard = useSelector((state) => state.dashboard);

  const { loading, currentView } = dashboard;

  
  return (
    <div className='dashboard'>
      <div className='dashboard__sidebar'>
        <DashboardSideBar />
      </div>

      <div className='right'>
        <Clock />
        <Daygain />
      </div>
      <div className='dashboard__main'>
        {currentView == "open" && !loading && <OpenOrders />}
        {currentView == "gains" && !loading && <Gains />}
        {currentView == "market" && !loading && <Markets />}
        {currentView == "watch" && !loading && <WatchList />}
      </div>
    </div>
  );
};

export default Dashboard;
