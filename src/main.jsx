import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AllCourses from "./pages/AllCourses.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import MyCourses from "./pages/MyCourses.jsx";
import Profile from "./pages/Profile.jsx";

// defining the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "all-courses",
        element: <AllCourses />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
