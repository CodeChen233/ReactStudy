import React, {Component} from 'react';

class NewsContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    //生命周期函数，加载完成时触发
    componentDidMount(){
        //获取动态路由传值
        console.log(this.props.match.params.aid)
        }
    render() {
        return (
            <div>
                我是新闻详情组件
            
            </div>
        );
    }
}

export default NewsContent;