import React, {Component} from 'react';
import '../assets/css/index.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// import Route_moduler1 from './Route_moduler/Route_moduler1';
// import Route_moduler2 from './Route_moduler/Route_moduler2';
// import Route_moduler3 from './Route_moduler/Route_moduler3';

class Route_moulder extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是路由模块化"
         };
    }

    componentDidMount(){
        // console.log(this.props.routes)
    }
    render() {
        return (
            <div className="shop">
                <div className="content">
                    <div className="left">
                        <Link to='/route_moduler/'><p>路由模块1</p></Link>
                        <Link to='/route_moduler/2'><p>路由模块2</p></Link>
                        <Link to='/route_moduler/3'><p>路由模块3</p></Link>
                    </div>

                    <div className="right">
                        {/* <Router> */}
                            {/* 默认加载个人中心 */}
                            {/* {`${this.props.match.url}`} 自动寻父组件路由名称 */}
                            {/* <Route exact path={`${this.props.match.url}/`} component={Route_moduler1} /> 
                            <Route path={`${this.props.match.url}/2`} component={Route_moduler2} /> 
                            <Route path={`${this.props.match.url}/3`} component={Route_moduler3} />  */}
                            {/* <Route path='/shop/add' component={ShopAdd} /> 
                            <Route path='/shop/list' component={ShopList} />   */}
                            
                        {/* </Router> */}

                        <Router>

                            {
                                this.props.routes.map((route,key)=>{
                                    if(route.exact){
                                        return <Route key={key} exact path={route.path} component={route.component} />
                                    }else{
                                        return <Route key={key} path={route.path} component={route.component} />
                                    }
                                })
                            }
                        </Router>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Route_moulder;