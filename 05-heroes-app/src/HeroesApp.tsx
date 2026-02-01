import { RouterProvider } from "react-router"
import { appRouter } from "./routes/app.router"


export const HeroesApp = () => {
  return (
    <>
        <RouterProvider router={appRouter}/>
    </>
  )
}
