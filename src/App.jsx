import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Docs from "./components/Docs";
import Landing from "./components/Landing";
import HomeLayout from "./components/HomeLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/Login";

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
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient} />
    </RouterProvider>
  );
}

export default App;
