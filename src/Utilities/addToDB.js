const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("installedApp");

  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else return [];
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();

  if (storedAppData.includes(id)) {
    alert("App already installed");
  } else {
    storedAppData.push(id);
    const app = JSON.stringify(storedAppData);
    localStorage.setItem("installedApp", app);
    console.log(storedAppData);
  }
};

export { addToStoredDB, getStoredApp };
