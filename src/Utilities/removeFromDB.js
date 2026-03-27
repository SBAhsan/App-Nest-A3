import { getStoredApp } from "./addToDB"

const removeFromStoredDB = (id) => {
    const storedAppData = getStoredApp();

    const updatedAppData = storedAppData.filter(appId => parseInt(appId) !== id);

    const updatedAppDataSTR = JSON.stringify(updatedAppData);
    localStorage.setItem("installedApp", updatedAppDataSTR);
}

export {removeFromStoredDB};