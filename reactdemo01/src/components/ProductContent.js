import React, {Component} from 'react';
import url from 'url';

class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    //生命周期函数，加载完成时触发
    componentDidMount(){
        //获取动态路由传值
        console.log(this.props.location.search);
        console.log(url.parse(this.props.location.search,true));
        var query=url.parse(this.props.location.search,true).query;
        console.log(query)
        }
    render() {
        return (
            <div>
                我是商品详情组件
            
            </div>
        );
    }
}

export default ProductContent;