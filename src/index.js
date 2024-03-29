import React from "react";
//import ReactDOM from "react-dom/client";
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
import Project8 from "./projects/Project8/Project8";
import Course1 from "./courses/Course1/Course1";
import Footer from "./components/Footer";

import { Navigate, createHashRouter, RouterProvider } from "react-router-dom";
import { hydrate, render } from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const router = createHashRouter([
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
    path: "/python-course",
    element: <Course1 />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/how-to-create-telegram-bot-in-python",
    element: <Project1 />,
  },
  {
    path: "/how-to-download-torrent-using-python",
    element: <Project2 />,
  },
  {
    path: "/webview-in-android-studio",
    element: <Project3 />,
  },
  {
    path: "/how-to-make-qr-code-scanner-app-from-scratch",
    element: <Project4 />,
  },
  {
    path: "/esp32-camera-module",
    element: <Project5 />,
  },
  {
    path: "/esp32-timelapse-camera",
    element: <Project6 />,
  },
  {
    path: "/how-to-make-chatroom-app-in-python",
    element: <Project7 />,
  },
  {
    path: "/secure-user-authentication-with-express-nodejs-and-prisma",
    element: <Project8 />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
        <Footer />
      </React.StrictMode>
    </>,
    rootElement
  );
} else {
  render(
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
        <Footer />
      </React.StrictMode>
    </>,
    rootElement
  );
}

// root.render(
//   <>
//     <React.StrictMode>
//       <RouterProvider router={router} />
//       <Footer />
//     </React.StrictMode>
//   </>
// );
