import React, {Component} from 'react';


/*
fetch-jsonp的使用
Ⅰ、安装fetch-jsonp cnpm install fetch-jsonp --save
Ⅱ、import FetchJsonp from 'fetch-jsonp';
Ⅲ、看文档 https://www.npmjs.com/package/fetch-jsonp
Ⅳ、判断服务器API是否能用jsonp,在接口链接后+&callback=xxx。
    例如http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&callback=xxx
*/

import fetchJsonp from 'fetch-jsonp';

class Fetchjsonp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         };
    }

    getData=()=>{
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        fetchJsonp(api)     //能接受跨域请求
        // 成功时执行，序列化
        .then((response)=>{
            return response.json()
        })
        // 接收数据
        .then((json)=>{
            // console.log('parsed json', json)
            this.setState({
                data:json.result
            })
        })
        //失败时执行
        .catch((ex)=>{
            console.log('parsing failed', ex)
        })
    }
    render() {
        return (
            <div>
                <h2>fetch-jsonp获取服务器API接口数据</h2>
                <button onClick={this.getData}>fetch-jsonp获取数据</button>
                <ul>
                    {
                        this.state.data.map((value,key)=>{

                            return (<li key={key}>{value.title}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Fetchjsonp;