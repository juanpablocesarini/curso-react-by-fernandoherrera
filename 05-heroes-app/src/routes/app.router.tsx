import { createBrowserRouter } from "react-router";

import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroPage } from "@/heroes/hero/HeroPage";
import { HomePage } from "@/heroes/home/HomePage";
import { SearchPage } from "@/heroes/search/SearchPage";

export const appRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/heroes/1", element: <HeroPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/admin", element: <AdminPage /> },
]);
