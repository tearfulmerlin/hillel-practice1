import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import paths from './router';

const router = createBrowserRouter(paths);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
