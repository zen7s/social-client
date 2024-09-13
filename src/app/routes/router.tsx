import { createBrowserRouter } from "react-router-dom"
import { ROUTES } from "./routes.enum"

const router = createBrowserRouter([
  {
    path: ROUTES.AUTH,
    element: <h1>Auth</h1>,
  },
  {
    path: ROUTES.ROOT,
    element: <h1>Layout</h1>,
  },
])

export default router
