import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./components/Root";
import Repo from "./components/Repo";

import List from "./components/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <List />,
      },
      {
        path: ":userId",
        element: <Repo />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
