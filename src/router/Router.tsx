import { createBrowserRouter } from "react-router-dom";
import Area from "../pages/Area/Area";
import Main from "../pages/Main/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurWorks from "../pages/OurWorks/OurWorks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Area />,
    children: [
      { path: "/services", element: <Main />, index: true },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/our-works", element: <OurWorks /> },
    ],
  },
]);
