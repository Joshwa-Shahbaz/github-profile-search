import { Outlet } from "react-router";
import Header from "./Header";

const RootPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default RootPage;
