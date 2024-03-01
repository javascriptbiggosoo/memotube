import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/layout";
import HomePage from "./pages";
import ProfilePage from "./pages/Profile";
import AuthPage from "./pages/Login";
import AboutPage from "./pages/About";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/login", element: <AuthPage /> },
        { path: "/profile", element: <ProfilePage /> },
        { path: "/about", element: <AboutPage /> },
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
