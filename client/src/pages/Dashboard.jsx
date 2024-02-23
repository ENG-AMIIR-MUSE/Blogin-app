import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Components/SidebarDash";
import DashProfile from "../Components/DashProfile";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const searchUrl = new URLSearchParams(location.search);
    const tabFromUrl = searchUrl.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  console.log(tab);
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="md:w-56 md:bg-red-950">
          <Sidebar />
        </div>
        <div>{tab === "profile" && <DashProfile />}</div>
      </div>
    </>
  );
}
