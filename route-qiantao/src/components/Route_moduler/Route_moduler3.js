import React, {Component} from 'react';


class Route_moduler3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是一个路由模块3组件"
         };
    }
    render() {
        return (
            <div style={{"margin":"20% 25%","textAlign":"center"}}>
                我是路由模块化3
            </div>
        );
    }
}

export default Route_moduler3;