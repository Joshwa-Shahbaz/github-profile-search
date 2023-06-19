import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./components/Root";
import Repo from "./components/Repo";
import { CardProvider } from "./store/context";
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
      <CardProvider>
        <RouterProvider router={router} />
      </CardProvider>
    </>
  );
}

export default App;
