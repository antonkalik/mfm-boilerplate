import React from "react";
import "./index.css";

const Dashboard = ({ dispatch }) => (
  <div className="dashboard">
    <p>Remote Dashboard</p>
    <button
      onClick={() => {
        dispatch({
          type: "increment",
        });
      }}
    >
      Increment
    </button>
  </div>
);

export default Dashboard;
