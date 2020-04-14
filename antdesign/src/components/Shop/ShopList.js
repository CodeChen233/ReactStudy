import React, {Component} from 'react';


class ShopList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是一个商户列表组件"
         };
    }
    render() {
        return (
            <div style={{"margin":"20% 25%","textAlign":"center"}}>
                我是商户列表
            </div>
        );
    }
}

export default ShopList;