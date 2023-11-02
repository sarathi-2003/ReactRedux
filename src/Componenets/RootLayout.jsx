import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBarPanel";
import { Provider } from "react-redux";
import Store from "../Store/Store";
const RootLayout = () => {
  return (
    <>
      <Provider store={Store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;