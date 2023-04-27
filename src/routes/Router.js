import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import ProtectedRoute from "../features/ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import RedirectIfAuthenticate from "../features/RedirectIfAuthenticate";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <RedirectIfAuthenticate>
            <LoginPage />
          </RedirectIfAuthenticate>
        ),
      },
      {
        path: "/user/:id",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
