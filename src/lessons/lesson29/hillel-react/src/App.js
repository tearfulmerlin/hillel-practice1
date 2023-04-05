import store from './store/store'
import { Provider, useSelector } from 'react-redux';
import './App.css';
import Card from 'components/card';
import Cart from 'components/cart';
import Loader from './components/loader';
import usePizzaList from 'hooks/usePizzaList';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { routes } from 'router';

function App() {

  const router = createBrowserRouter(routes);

  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </Provider>
  )
}

export default App;
