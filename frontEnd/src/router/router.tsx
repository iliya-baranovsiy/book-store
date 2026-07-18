import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import BookPage from "../pages/BookPage";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "../components/protectedRoute";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/books/:id", element: <BookPage /> },
      {path: "/auth", element: <AuthPage />},
      {
        element: <ProtectedRoute />,
        children: [
          {path:"/profile", element: <ProfilePage />}
        ]
      }
    ],
  },
]);
