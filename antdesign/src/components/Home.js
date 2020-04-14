import React, {Component} from 'react';
import {Button,DatePicker} from 'antd';
import {LeftOutlined, PlayCircleOutlined} from '@ant-design/icons';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是一个首页组件"
         };
    }

    getData=(data,dataString)=>{
        console.log(data,dataString)
    }
    render() {
        return (
            <div style={{"margin":"20% 25%","textAlign":"center"}}>
                我是首页<br /><br />
                <Button type="primary">Antd按钮</Button>
                <br /><br />
                <LeftOutlined />
                <Button icon={<PlayCircleOutlined />}></Button>
                <br /><br />
                <DatePicker onChange={this.getData} />
            </div>
        );
    }
}

export default Home;