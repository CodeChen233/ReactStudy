import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

import '../assets/css/index.css';
import '../assets/css/pcontent.css';



class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            domain:'http://a.itying.com/',
            loginFlag:true,
         };
    }

    requestData=(id)=>{
        var api=this.state.domain+'api/productcontent?id='+id;
        axios.get(api)
        .then((response)=>{
            this.setState({
                list:response.data.result[0]
            })

            // console.log(response.data.result[0])
        })

        .catch((error)=>{
            console.log(error)
        })

    }

    componentDidMount(){
        // console.log(this.props.match.params.id)
        let id=this.props.match.params.id;
        this.requestData(id)
    }

    doLogin=()=>{
        alert("您不打算先登录再点菜吗？");
        this.setState({
            loginFlag:false
        })

    }
    render() {

        if(!this.state.loginFlag){
            return(<Redirect to='/login' />)
        }

        return (
            <div className='pcontent'>
                <Link to='/'>
                    <div className='back'>
                        <p>返回</p>
                    </div>
                </Link>

               <div className='p_content'>
                <div className='p_info'>
                    {this.state.list.img_url?<img src={`${this.state.domain}${this.state.list.img_url}`} alt='' />:""}
                    <h2>{this.state.list.title}</h2>
                    <p className='price'>{this.state.list.price}元/份</p>

                </div>

                <div className='p_detial'>
                    <h3>{this.state.list.description}</h3>
                </div>

                <div className='p_content' dangerouslySetInnerHTML={{__html:this.state.list.content}}></div>
               </div>

               <footer className='pfooter'>
                    <div className='cart'>
                        <strong>数量：</strong>
                        <div className='cart_num'>
                            <div className='input_left' onClick={this.doLogin}>-</div>
                            <div className='input_center'>
                                <input type='text' readOnly='readonly' value='1' name='num' id='num' />
                            </div>
                            <div className='input_right' onClick={this.doLogin}>+</div>
                        </div>
                    </div>

                    <button className='addcart' onClick={this.doLogin}>加入购物车</button>
               </footer>
            </div>



            /** 
             商品详情组件<br />
                {this.state.list.description}<br />
                {this.state.list.content}<br />
                <div dangerouslySetInnerHTML={{__html:this.state.list.content}}></div>
                
                 {this.state.list.content}返回了<p>香酥黄金鱼</p>带html标签竟然不能解析

                 react中解析html标签代码
                 https://reactjs.org/docs/dom-elements.html

                 <div dangerouslySetInnerHTML={{__html:this.state.list.content}}></div>

                  
            **/
        );
    }
}

export default ProductContent;