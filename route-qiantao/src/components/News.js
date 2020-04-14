import React, {Component} from 'react';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是一个新闻组件"
         };
    }
    render() {
        return (
            <div style={{"margin":"20% 25%","textAlign":"center"}}>
                我是新闻
            </div>
        );
    }
}

export default News;