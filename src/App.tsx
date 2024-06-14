import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/layout";
import HomePage from "./pages";
import ProfilePage from "./pages/Profile";
import { BoardPage } from "./pages/Board";
import PostPage from "./pages/Board/Post";
import MylistPage from "./pages/Mylist";
import MylistItemPage from "./pages/Mylist/MylistItem";
import { useEffect } from "react";
import { isTokenValid } from "./utils/isTokenValid";
import { getItem } from "./utils/localStorage";
import { jwtDecode } from "jwt-decode";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "./atoms/userAtoms";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/profile", element: <ProfilePage /> },
        { path: "/mylist", element: <MylistPage /> },
        { path: "/mylist/:listId", element: <MylistItemPage /> },
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
  const setCurrentUser = useSetRecoilState(currentUserState);
  useEffect(() => {
    if (isTokenValid(getItem("token"))) {
      const { email } = jwtDecode<{ email: string }>(getItem("token"));
      setCurrentUser({ email });
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
