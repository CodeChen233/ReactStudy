import React, {Component} from 'react';


class ShopIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是一个商户首页组件"
         };
    }
    render() {
        return (
            <div style={{"margin":"20% 25%","textAlign":"center"}}>
                我是商户首页
            </div>
        );
    }
}

export default ShopIndex;