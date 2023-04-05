import Cart from "components/cart";
import Header from "components/header";
import List from "pages/list";
import PizzaDetail from "pages/pizza-detail";
import {
  Outlet,
} from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Cart />
        <Outlet/>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "/pizza/:id",
        element: <PizzaDetail />,
      },
    ]
  },
]