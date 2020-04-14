import Route_moduler from '../components/Route_moudler';
  import Route_moduler1 from '../components/Route_moduler/Route_moduler1';
  import Route_moduler2 from '../components/Route_moduler/Route_moduler2';
  import Route_moduler3 from '../components/Route_moduler/Route_moduler3';
import News from '../components/News';
import Home from '../components/Home';

let routes = [
    {
      path: "/route_moduler",
      component: Route_moduler,
      // exact: true,
      //子路由
      routes:[
        {
          path: '/route_moduler/',
          component: Route_moduler1,
          exact: true,
        },
        {
          path: '/route_moduler/2',
          component: Route_moduler2,
        },
        {
          path: '/route_moduler/3',
          component: Route_moduler3,
        },
      ],

    },
    {
      path: '/',
      component: Home,
      exact: true
    },
    {
        path: '/news',
        component: News,
        exact: true
    }
  ];

  export default routes;