import React, {Component} from 'react';

/* 
Ⅰ、安装axios模块 cnpm install axios --save / npm install axios --save
Ⅱ、import axios from 'axios'
Ⅲ、看文档使用 https://www.kancloud.cn/yunye/axios/234845

*/
import axios from 'axios';

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
         };
    }

    getData=()=>{
        //通过axios获取服务器数据，如果服务器后台不允许跨域，那么axios就不行，可以用fetch-jsonp
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';// 此接口已允许后台跨域
        // 为给定 ID 的 user 创建请求
        axios.get(api)

        //成功时执行
        .then((response)=>{
        // console.log(response.data.result);
        //设置state值时注意this指向
        
        this.setState({
            data:response.data.result
        })
        })
        //备注：在Microsoft Edge 浏览器请求失败，应该是跨域请求问题，此浏览器不会设置，改用Google浏览器则请求成功
        // 失败时执行
        .catch(function (error) {
        console.log(error);
        });

        // 可选地，上面的请求可以这样做
        // axios.get('/user', {
        // params: {
        //     ID: 12345
        // }
        // })
        // .then(function (response) {
        // console.log(response);
        // })
        // .catch(function (error) {
        // console.log(error);
        // });
    }

    // testData=()=>{
    //     var D=this.state.data[1].title;
    //     console.log(D)
    //     console.log(typeof(D))
        
    // }
    render() {
        return (
            <div>
                <h2>axios获取服务器API接口数据</h2>
                <button onClick={this.getData}>点击获取服务器数据</button>
                {/* <button onClick={this.testData}>test</button> */}
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

export default Axios;