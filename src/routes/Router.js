import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import ProtectedRoute from "../features/ProtectedRoute";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/user/:userId",
        element: <ProtectedRoute />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
