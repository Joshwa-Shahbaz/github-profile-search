import { Outlet } from "react-router";
import Header from "./Header";
import React, { useState } from "react";

const RootPage = () => {
  const [user, setUser] = useState("");

  const userHandler = (e) => {
    setUser(e.target.value);
  };
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default RootPage;
