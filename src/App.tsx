import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/layout";
import HomePage from "./pages";
import ProfilePage from "./pages/Profile";
import DemoPage from "./pages/Demo";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/profile", element: <ProfilePage /> },
        { path: "/demo", element: <DemoPage /> },
      ],
    },
  ],
  { basename: "/memotube" }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
