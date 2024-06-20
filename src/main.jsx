import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Header from "./components/GoogleDrivePage/Header";
import Home from "./components/HomePage/Home";
import GoogleDrive from "./components/GoogleDrivePage/GoogleDrive";
import Mydrive from "./components/Siderbar items/Mydrive.jsx"
import ComputerCom from "./components/Siderbar items/ComputerCom.jsx";
import StarredComp from "./components/Siderbar items/StarredComp.jsx";
import RecentCom from "./components/Siderbar items/RecentCom.jsx";
import ShareWme from "./components/Siderbar items/ShareWme.jsx";
import SpamCom from "./components/Siderbar items/SpamCom.jsx"
import BinCom  from "./components/Siderbar items/BinCom.jsx"
import Storage from "./components/Siderbar items/Storage.jsx"

function App () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/drive",
    element: <GoogleDrive/>,
  },
  {
    path: "/mydrive",
    element: <Mydrive/>,
  },
  {
    path: "/computer",
    element: <ComputerCom/>,
  },
  {
    path: "/starred",
    element: <StarredComp />,
  },
  {
    path: "/recent",
    element: <RecentCom />,
  },
  {
    path: "/shared",
    element: <ShareWme />,
  },
  {
    path: "/spam",
    element: <SpamCom />,
  },
  {
    path: "/bin",
    element: <BinCom />,
  },
  {
    path: "/storage",
    element: <Storage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
