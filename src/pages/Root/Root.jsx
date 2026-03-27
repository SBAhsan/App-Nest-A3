import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import { InfinitySpin } from "react-loader-spinner";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      {isLoading && 
      <div className="h-screen flex items-center justify-center">
        <InfinitySpin width="200" color="#9370DB" />
        </div>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
