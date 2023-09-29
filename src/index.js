import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Project1 from "./projects/Project1/Project1";
import Project2 from "./projects/Project2/Project2";
import Project3 from "./projects/Project3/Project3";
import Project4 from "./projects/Project4/Project4";
import Project5 from "./projects/Project5/Project5";
import Project6 from "./projects/Project6/Project6";
import Project7 from "./projects/Project7/Project7";
import Course1 from "./courses/Course1/Course1";
import Footer from "./components/Footer";

import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/courses1",
    element: <Course1 />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/project1",
    element: <Project1 />,
  },
  {
    path: "/project2",
    element: <Project2 />,
  },
  {
    path: "/project3",
    element: <Project3 />,
  },
  {
    path: "/project4",
    element: <Project4 />,
  },
  {
    path: "/project5",
    element: <Project5 />,
  },
  {
    path: "/project6",
    element: <Project6 />,
  },
  {
    path: "/project7",
    element: <Project7 />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
      <Footer />
    </React.StrictMode>
  </>
);
