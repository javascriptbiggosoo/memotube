import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/layout";
import HomePage from "./pages";
import ProfilePage from "./pages/Profile";
import { BoardPage } from "./pages/Board";
import PostPage from "./pages/Board/Post";
import MylistPage from "./pages/Mylist";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/profile", element: <ProfilePage /> },
        { path: "/mylist", element: <MylistPage /> },
        {
          path: "/board",
          element: <BoardPage />,
        },
        {
          path: "/board/:postId",
          element: <PostPage />,
        },
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
