import PlanetConainer from 'pages/planets'
import BasicLayout from 'templates/basic-layout';
import {
  useParams 
} from "react-router-dom";

const PlanetDetail = (props) => {
  const location = useParams();
  console.log({location});
  return <div>props</div>
}
const router = [
  {
    path: "/",
    element: <BasicLayout/>,
    children: [
      {
        path: "/planets",
        element: <PlanetConainer />,
      },
      {
        path: '/planets/:planetId',
        element: <PlanetDetail />
      },
      {
        path: '/people',
        element: 'test',
      },
      {
        path: '/ships',
        element: 'ships',
      },
    ]
  },
  
];

export default router;
