import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Docs from "./components/Docs";
import Landing from "./components/Landing";
import HomeLayout from "./components/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },

      {
        path: "docs",
        element: <Docs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
