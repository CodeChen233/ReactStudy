import React, {Component} from 'react';
import '../assets/css/index.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import UserInfo from './User/UserInfo';
import UserMain from './User/UserMain';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是用户"
         };
    }
    render() {
        return (
            <div className="user">
                <div className="content">
                    <div className="left">
                        <Link to='/user/'><p>个人中心</p></Link>
                        <Link to='/user/info'><p>用户信息</p></Link>
                    </div>

                    <div className="right">
                        <Router>
                            {/* 默认加载个人中心 */}
                            <Route exact path='/user/' component={UserMain} /> 
                             {/* 第二种写法 {`${this.props.match.url}`} 自动寻父组件路由名称 */} 
                            <Route path='/user/info' component={UserInfo} />
                            
                        </Router>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Users;