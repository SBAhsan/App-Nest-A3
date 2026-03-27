import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../Utilities/addToDB";
import sortImg from "../../assets/sort.png"
import Installed from "./Installed";
import { removeFromStoredDB } from "../../Utilities/removeFromDB";

const Installation = () => {
  const [installedAppList, setInstalledAppList] = useState([]);
  const [sort, setSort] = useState("");

  const appData = useLoaderData();

  useEffect(() => {
    const storedApp = getStoredApp();
    const storedAppINT = storedApp.map((id) => parseInt(id));
    const myStoredApps = appData.filter((app) => storedAppINT.includes(app.id));
    setInstalledAppList(myStoredApps);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if(sortType === "More Downloads"){
        const sortedByMore = [...installedAppList].sort((a, b) => b.download - a.download);
        setInstalledAppList(sortedByMore)
    }
    else if(sortType === "Less Downloads"){
        const sortedByLess = [...installedAppList].sort((a, b) => a.download - b.download);
        setInstalledAppList(sortedByLess);
    }
  }

  const handleUninstall = id => {
        removeFromStoredDB(id);
        console.log(typeof id);
        
        const remainingInstalledAppList = installedAppList.filter(app => app.id !== id);
        setInstalledAppList(remainingInstalledAppList);
     }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold pt-15 pb-4">Your Installed Apps</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 justify-between pt-15 pb-6">
        <h4 className="text-xl font-bold">
          {installedAppList.length} Apps Found
        </h4>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By {sort ? sort : ""}
              <img src={sortImg} alt="" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
                <li><a onClick={() => handleSort("More Downloads")}>More Downloads</a></li>
                <li><a onClick={() => handleSort("Less Downloads")}>Less Downloads</a></li>
            </ul>
        </div>
      </div>
      <div>
        <ul>
            {
               installedAppList.map(app => <Installed key={app.id} app={app} handleUninstall={handleUninstall}></Installed>) 
            }
        </ul>
      </div>
    </div>
  );
};

export default Installation;
