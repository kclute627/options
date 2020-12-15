import React, { useState } from "react";

import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import ListIcon from "@material-ui/icons/List";
import LocalConvenienceStoreIcon from "@material-ui/icons/LocalConvenienceStore";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { switchScreen } from "../../actions/dashboardActions";

const DashboardSideBar = () => {
  const [collapse, collapseHandler] = useState(false);
  const [text, textHandler] = useState("");

  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboard);

  const closeWindow = () => {
    collapseHandler(!collapse);
  };
  const showText = (text) => {
    textHandler(text);
  };
  const hideText = () => {
    textHandler("");
  };

  const { loading, currentView } = dashboard;

  return (
    <div className={!collapse ? "dsidebar" : "collapse"}>
      <div className='dsidebar-1'>
        <div className='dsidebar-1-photo'>KC</div>
        <div className='span'></div>
      </div>
      <div className={!collapse ? "dsidebar-2" : "dsidebar-3"}>
        <div
          className={
            collapse && currentView === "open"
              ? "collapse__item collapse__active"
              : currentView === "open"
              ? "dsidebar-2-menu-item active"
              : collapse
              ? "collapse__item"
              : "dsidebar-2-menu-item"
          }
          onMouseEnter={() => showText("Open Orders")}
          onMouseLeave={() => hideText()}
          onClick={() => dispatch(switchScreen("open"))}
        >
          <div className='dsidebar-2-menu-icon'>
            <ImportContactsIcon />
          </div>
          <span
            className={text === "Open Orders" && collapse ? "text" : "none"}
          >
            {text}
          </span>
          <div className={!collapse ? "dsidebar-2-menu-des" : "none"}>
            Open Orders
          </div>
        </div>
        <div
          className={
            collapse && currentView === "watch"
              ? "collapse__item collapse__active"
              : currentView === "watch"
              ? "dsidebar-2-menu-item active"
              : collapse
              ? "collapse__item"
              : "dsidebar-2-menu-item"
          }
          onMouseEnter={() => showText("Watch List")}
          onMouseLeave={() => hideText()}
          onClick={() => dispatch(switchScreen("watch"))}
        >
          <a className='dsidebar-2-menu-icon'>
            <ListIcon />{" "}
          </a>
          <span className={text === "Watch List" && collapse ? "text" : "none"}>
            {text}
          </span>

          <div className={!collapse ? "dsidebar-2-menu-des" : "none"}>
            Watch List{" "}
          </div>
        </div>
        <div
          className={
            collapse && currentView === "market"
              ? "collapse__item collapse__active"
              : currentView === "market"
              ? "dsidebar-2-menu-item active"
              : collapse
              ? "collapse__item"
              : "dsidebar-2-menu-item"
          }
          onMouseEnter={() => showText("Markets")}
          onMouseLeave={() => hideText()}
          onClick={() => dispatch(switchScreen("market"))}
        >
          <div className='dsidebar-2-menu-icon'>
            <LocalConvenienceStoreIcon />
          </div>
          <span className={text === "Markets" && collapse ? "text" : "none"}>
            {text}
          </span>

          <div className={!collapse ? "dsidebar-2-menu-des" : "none"}>
            Markets
          </div>
        </div>
        <div
          className={
            collapse && currentView === "gains"
              ? "collapse__item collapse__active"
              : currentView === "gains"
              ? "dsidebar-2-menu-item active"
              : collapse
              ? "collapse__item"
              : "dsidebar-2-menu-item"
          }
          onMouseEnter={() => showText("Gains and Losses")}
          onMouseLeave={() => hideText()}
          onClick={() => dispatch(switchScreen("gains"))}
        >
          <div className='dsidebar-2-menu-icon'>
            <ImportExportIcon />
          </div>
          <span
            className={
              text === "Gains and Losses" && collapse ? "text" : "none"
            }
          >
            {text}
          </span>
          <div className={!collapse ? "dsidebar-2-menu-des" : "none"}>
            Gains / Losses
          </div>
        </div>

        <div className={!collapse ? "final" : "final-1"} onClick={closeWindow}>
          <div className=''>
            {!collapse ? (
              <ArrowLeftIcon style={{ fontSize: 50, marginLeft: "50%" }} />
            ) : (
              <ArrowRightIcon style={{ fontSize: 50, marginLeft: "10%" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
