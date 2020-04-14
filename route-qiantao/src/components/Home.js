import React, {Component} from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是一个首页组件"
         };
    }
    render() {
        return (
            <div style={{"margin":"20% 25%","textAlign":"center"}}>
                我是首页
            </div>
        );
    }
}

export default Home;