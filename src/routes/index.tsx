import App from "@/App";
import Tasks from "@/components/pages/Tasks";
import User from "@/components/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    Component: App,
    children: [
      {
        index: true,
        // path: "tasks",
        Component: Tasks,
      },
      {
        path: "users",
        Component: User,
      },
    ],
  },
]);
export default router;
