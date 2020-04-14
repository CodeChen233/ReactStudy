import React, {Component} from 'react';


class ShopAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是一个路由模块化1组件"
         };
    }
    render() {
        return (
            <div style={{"margin":"20% 25%","textAlign":"center"}}>
                我是路由模块化1
            </div>
        );
    }
}

export default ShopAdd;