import React, {Component} from 'react';
import '../assets/css/index.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import UserInfo from './User/UserInfo';
import UserMain from './User/UserMain';

//antd布局
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;



class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
          };
        
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    render() {
        return (
            <div className="user">
                <div>

                    <Layout>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        {/* <div className="logo" /> */}
                        <div className="logo">logo</div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                            <UserOutlined />
                            <span><Link to='/user/'>个人中心</Link></span>
                            </Menu.Item>
                            <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <span><Link to='/user/info'>用户信息</Link></span>
                            </Menu.Item>
                            <Menu.Item key="3">
                            <UploadOutlined />
                            <span>开发中……</span>
                            </Menu.Item>
                        </Menu>
                        </Sider>
                        <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                            })}
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            }}
                        >
                            <Router>
                                {/* 默认加载个人中心 */}
                                <Route exact path='/user/' component={UserMain} /> 
                                {/* 第二种写法 {`${this.props.match.url}`} 自动寻父组件路由名称 */} 
                                <Route path='/user/info' component={UserInfo} />
                            
                            </Router>
                        </Content>
                        </Layout>
                    </Layout>

                    {/* <div className="left">
                        <Link to='/user/'><p>个人中心</p></Link>
                        <Link to='/user/info'><p>用户信息</p></Link>
                    </div> */}

                    {/* <div className="right">
                        <Router>
                            默认加载个人中心
                            <Route exact path='/user/' component={UserMain} /> 
                              第二种写法 {`${this.props.match.url}`} 自动寻父组件路由名称
                            <Route path='/user/info' component={UserInfo} />
                        </Router>
                    </div> */}
                </div>
               
            </div>
        );
    }
}

export default Users;