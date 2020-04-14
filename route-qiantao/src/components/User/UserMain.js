import React, {Component} from 'react';

class UserMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是个人中心"
         };
    }
    render() {
        return (
            <div>
                个人中心组件
            </div>
        );
    }
}

export default UserMain;