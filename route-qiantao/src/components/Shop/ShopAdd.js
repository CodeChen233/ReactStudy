import React, {Component} from 'react';


class Route_moduler1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是一个商户添加组件"
         };
    }
    render() {
        return (
            <div style={{"margin":"20% 25%","textAlign":"center"}}>
                我是商户添加
            </div>
        );
    }
}

export default Route_moduler1;