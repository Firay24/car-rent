import SignIn from "./pages/auth";
import Dashboard from "./pages/dashboard";
import { Home, Detail, Rent } from "@/pages/home";

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: "",
        name: "dashboard",
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    layout: "home",
    pages: [
      {
        icon: "",
        name: "home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: "",
        name: "detail",
        path: "/detail",
        element: <Detail />,
      },
      {
        icon: "",
        name: "rent",
        path: "/rent",
        element: <Rent />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: "",
        name: "sign-in",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];
