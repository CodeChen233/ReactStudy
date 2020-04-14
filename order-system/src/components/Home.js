import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


import '../assets/css/index.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            domain:'http://a.itying.com/',
         };
    }

    requestData=()=>{
        var api=this.state.domain+'api/productlist';
        axios.get(api)
        .then((response)=>{
            //handel success
            // console.log(response)
            this.setState({
                list:response.data.result
            })
        })

        .catch((error)=>{
            //handel failed
            console.log(error)
        })
    }

    componentDidMount(){
        this.requestData()
    }
    
    render() {
        return (
            <div className='home'>
                <header className='header'>
                    <p className='title'>无人点餐系统<Link to='/login'><span style={{"float":"right","color":"black","fontWeight":"bold"}}>登录</span></Link></p>
                </header>

                
                <div className='list'>
                    <div className='item'>
                        {
                            this.state.list.map((value,key)=>{
                                return (
                                    <div key={key}>
                                        <h3 className='item_cate'>{value.title}</h3>
                                        <ul className='item_list'>
                                            {
                                                value.list.map((value,key)=>{
                                                    return (
                                                    <li key={key}>
                                                        <Link to={`/productContent/${value._id}`}>
                                                            <div className='inner'>
                                                                <img src={`${this.state.domain}${value.img_url}`} alt='' />
                                                                <p className='title'>{value.title}</p>
                                                                <p className='price'>{value.price}元</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
                <footer className='footer'>
                <div style={{'textAlign': 'center','opacity': '1'}}>
                     &copy; 2019-2020 备案号：苏ICP备19027005号
                </div>
                </footer>
            </div>
        );
    }
}

export default Home;