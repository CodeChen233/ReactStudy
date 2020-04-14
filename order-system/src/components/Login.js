import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
// import {Link} from 'react-router-dom';

import '../assets/css/login.css';


/*
实现JavaScript跳转路由
1、要引入Redirect
    import {Redirect} from 'react-router-dom';
2、定义一个flag
     this.state = { 
            loginFlag:false,
         };
3、判断flag
*/
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // username:'',
            loginFlag:false,
         };
    }

    doLogin=(e)=>{
        e.preventDefault();
        let username=this.refs.username.value;
        let password=this.refs.password.value;
        // console.log(username,password)
        if(username==="admin" && password==="19960115"){
            this.setState({
                loginFlag:true
            })
        }else{
            alert("登录失败")
        }

    }

    forgetPwd=()=>{
        alert("嗯?")
    }

    register=()=>{
        alert("抱歉，您尚无资格注册，请充钱")
    }

    render() {
        if(this.state.loginFlag){
            // return(<Redirect to={{pathname:'/'}} />)
        return(<div><Redirect to='/' />{alert("欢迎点餐")}</div>)
        }
        return (
            <div>

                
                <div className="main">
                    <div className="title">
                        <span>密码登录</span>
                    </div>
                
                    <div className="title-msg">
                        <span>请输入登录账户和密码</span>
                    </div>
                
                    <form className="login-form" onSubmit={this.doLogin} noValidate >
                        {/* <!--输入框--> */}
                        <div className="input-content">
                            {/* <!--autoFocus--> */}
                            <div>
                                <input type="text"  id='username' ref='username'
                                    placeholder="用户名" />
                            </div>
                
                            <div style={{"marginTop": "16px"}}>
                                <input type="password"
                                     placeholder="登录密码"  id='password' ref='password'  maxLength="32"/>
                            </div>
                        </div>

                        {/* <!--登入按钮--> */}
                        <div style={{"textAlign": "center"}}>
                            <input type="submit" className="enter-btn" value='登录' />
                        </div>
                
                        <div className="foor">
                            <div className="left" onClick={this.forgetPwd}><span>忘记密码 ?</span></div>
                
                            <div className="right"  onClick={this.register}><span>注册账户</span></div>
                        </div>
                    </form>
                
                </div>




                {/* <form onSubmit={this.doLogin} style={{"textAlign":"center"}}>
                    <br /><br /><br />
                    <input type='text' ref='username' />
                    <br /><br />
                    <input type='password' ref='password' />
                    <br /><br />
                    <input type='submit' value='执行登录' />

                </form> */}
                
            
            </div>
        );
    }
}

export default Login;