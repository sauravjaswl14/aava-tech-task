import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Docs from "./components/Docs";
import Landing from "./components/Landing";
import HomeLayout from "./components/HomeLayout";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <Landing />
          </RequireAuth>
        ),
      },

      {
        path: "docs",
        element: <Docs />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
