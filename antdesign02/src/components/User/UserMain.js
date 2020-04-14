import React, {Component} from 'react';
import {DatePicker} from 'antd';

class UserMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是个人中心",
            data:'',
         };
    }

    getData=(data,dataString)=>{
        console.log(data,dataString)
        this.setState({
            data:'您选择了：'+dataString
        })
    }
    render() {
        return (
            <div>
                个人中心组件
                <br/><br/>
                <DatePicker onChange={this.getData} />
                <br/><br/>
                {this.state.data}
            </div>
        );
    }
}

export default UserMain;