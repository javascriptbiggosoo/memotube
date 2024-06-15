import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import RootLayout from "./pages/layout";
import { isTokenValid } from "./utils/isTokenValid";
import { getItem } from "./utils/localStorage";
import { jwtDecode } from "jwt-decode";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "./atoms/userAtoms";
import MLoading from "./components/common/MLoading";

const HomePage = lazy(() => import("./pages"));
const BoardPage = lazy(() => import("./pages/Board"));
const PostPage = lazy(() => import("./pages/Board/Post"));
const MylistPage = lazy(() => import("./pages/Mylist"));
const MylistItemPage = lazy(() => import("./pages/Mylist/MylistItem"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<MLoading />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "/mylist",
          element: (
            <Suspense fallback={<MLoading />}>
              <MylistPage />
            </Suspense>
          ),
        },
        {
          path: "/mylist/:listId",
          element: (
            <Suspense fallback={<MLoading />}>
              <MylistItemPage />
            </Suspense>
          ),
        },
        {
          path: "/board",
          element: (
            <Suspense fallback={<MLoading />}>
              <BoardPage />
            </Suspense>
          ),
        },
        {
          path: "/board/:postId",
          element: (
            <Suspense fallback={<MLoading />}>
              <PostPage />
            </Suspense>
          ),
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
  }, [setCurrentUser]);

  return <RouterProvider router={router} />;
}

export default App;
