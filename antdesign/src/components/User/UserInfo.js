import React, {Component} from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是用户信息"
         };
    }
    render() {
        return (
            <div>
                用户信息组件
            </div>
        );
    }
}

export default UserInfo;