import { createBrowserRouter } from "react-router";

import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroPage } from "@/heroes/hero/HeroPage";
import { HomePage } from "@/heroes/home/HomePage";
import { SearchPage } from "@/heroes/search/SearchPage";

import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "heroes/1", element: <HeroPage /> },
      { path: "search", element: <SearchPage /> },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
