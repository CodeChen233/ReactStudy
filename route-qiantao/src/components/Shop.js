import React, {Component} from 'react';
import '../assets/css/index.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ShopIndex from './Shop/ShopIndex';
import ShopAdd from './Shop/ShopAdd';
import ShopList from './Shop/ShopList';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是商户"
         };
    }
    render() {
        return (
            <div className="shop">
                <div className="content">
                    <div className="left">
                        <Link to='/shop/'><p>商户首页</p></Link>
                        <Link to='/shop/add'><p>商户添加</p></Link>
                        <Link to='/shop/list'><p>商户列表</p></Link>
                    </div>

                    <div className="right">
                        <Router>
                            {/* 默认加载个人中心 */}
                            {/* {`${this.props.match.url}`} 自动寻父组件路由名称 */}
                            <Route exact path={`${this.props.match.url}/`} component={ShopIndex} /> 
                            <Route path={`${this.props.match.url}/add`} component={ShopAdd} /> 
                            <Route path={`${this.props.match.url}/list`} component={ShopList} /> 
                            {/* <Route path='/shop/add' component={ShopAdd} /> 
                            <Route path='/shop/list' component={ShopList} />   */}
                            
                        </Router>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Shop;