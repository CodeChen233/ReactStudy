import React, {Component} from 'react';


class Route_moduler2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是一个路由模块2组件"
         };
    }
    render() {
        return (
            <div style={{"margin":"20% 25%","textAlign":"center"}}>
                我是路由模块化2
            </div>
        );
    }
}

export default Route_moduler2;