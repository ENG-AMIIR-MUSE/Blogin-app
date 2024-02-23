import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { FaUser, FaMobile } from "react-icons/fa";
export default function SidebarDash() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const searchUrl = new URLSearchParams(location.search);
    const tabFromUrl = searchUrl.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    console.log(tabFromUrl);
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to={"/dashboard?tab=profile"}>
            <Sidebar.Item
              active={tab === "profile"}
              icon={FaUser}
              label={"User"}
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Link to={"/dashboard?tab=posts"}>
            <Sidebar.Item
              active={tab === "posts"}
              icon={FaMobile}
              label={"Posts"}
            >
              Posts
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
