import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './assets/css/App.css';

// import Home from './components/Home';
import Users from './components/Users';
import Shop from './components/Shop';
// import Route_moduler from './components/Route_moudler';
// import News from './components/News';
import routes  from './module/route.js';

// let routes = [ 
//   {
//     path: "/route_moduler",
//     component: Route_moduler,
//     // exact: true,
//   },
//   {
//     path: '/',
//     component: Home,
//     exact: true
//   }
// ];

function App() {
  return (

    
    
    <Router>

        <div className="link">
                <Link to="/">首页</Link>
                <Link to="/user">用户</Link>
                <Link to="/shop">商户</Link>
                <Link to="/route_moduler">路由模块化</Link>
                <Link to="/news">新闻</Link>
        </div>
        
        <div>
          {
            routes.map((route,key)=>{
              // if(route.exact){
              //   return(<Route key={key} exact path={route.path} component={route.component} />)
              // }else{
              //   return(<Route key={key} path={route.path} component={route.component} />)
              // }

              //路由模块化父子组件传值，为了封装所有子路由

              if(route.exact){
                return(<Route key={key} exact path={route.path} 
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )}
                  />)
              }else{
                return(<Route key={key} path={route.path} 
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )}
                  />)
              }
            })
          }
          
          {/* <Route exact path='/' component={Home} /> */}
          {/* 想要实现嵌套路由就不能用exact严格匹配 */}
          <Route path='/user' component={Users} />
          <Route path='/shop' component={Shop} />
          
        </div>
    </Router>
   
  );
}

export default App;
