import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { SingupPage } from "./pages/signup";
import { LoginPage } from "./pages/login";
import Layout from "./components/layout";
import Homepage from "./pages/homepage";
import UserListPage from "./pages/user_list";
import { ResetPasswordPage } from "./pages/reset";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SingupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/reset",
    element: <ResetPasswordPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/user-list",
        element: <UserListPage />,
      },
    ],
  },
]);

export default router;
