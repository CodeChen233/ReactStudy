import React, {Component} from 'react';

/*   
生命周期函数
    组件加载之前，组件加载完成，组件更新数据以及组件销毁触发的一系列方法---这就是组件的生命周期函数

组件加载的时候触发的生命周期函数：

    constructor、UNSAFE_componentWillMount(老版本为componentWillMount，已废弃)、
    render、componentDidMount

组件更新的时候触发的生命周期函数：

    shouldComponentUpdate(有两个参数nextProps,nextState)、 
    UNSAFE_componentWillUpdate(老版本为componentWillUpdate，已废弃)、
    render、componentDidUpdate

你在父组件里面改变props传值的时候触发的：

    componentWillReceiveProps

组件销毁时触发的生命周期函数：

    UNSAFE_componentWillReceiveProps（老版本为componentWillUnmount，已废弃）

*/

//新版本React以rename的生命周期函数
// componentWillMount → UNSAFE_componentWillMount
// componentWillReceiveProps → UNSAFE_componentWillReceiveProps
// componentWillUpdate → UNSAFE_componentWillUpdate


class Lifecycle extends Component {

    //================组件加载的时候触发的生命周期函数====================

    //触发的第一个生命周期函数constructor
    constructor(props) {
        
        console.log('01、constructor构造函数')

        super(props);
        this.state = { 
            msg:1,
         };
    }

    //（组件将要挂载时）触发的第二个生命周期函数 UNSAFE_componentWillMount
    UNSAFE_componentWillMount(){     //老版本名为componentWillMount,已不建议使用
        console.log("02、UNSAFE_componentWillMount 组件将要挂载")
    }

    //（组件挂载完成时）第四个触发的生命周期函数
    componentDidMount(){
        //一般dom操作和数据请求都放在这里面
        console.log("04、componentDidMount 组件挂载完成")
    }

    //==================组件更新时触发的生命周期函数======================

    //数据是否需要执行更新
    shouldComponentUpdate(nextProps,nextState){
        console.log("01、shouldComponentUpdate 是否要更新数据")
        console.log(nextProps) //更新后父组件向子组件传的值
        console.log(nextState) //更新后的数据

        return true  //必须return true才执行更新，返回false就不更新
    }

    //将要更新数据时触发 老版本为componentWillUpdate，已不建议使用
    UNSAFE_componentWillUpdate(){
        console.log("02、UNSAFE_componentWillUpdate 数据将要更新")
    }

    //组件更新数据完成时触发
    componentDidUpdate(){
        console.log("04、componentDidUpdate 数据更新完成")
    }

    //=================组件销毁时触发的生命周期函数========================

    //组件销毁时触发的生命周期函数  用在组件销毁时执行某操作
    componentWillUnmount(){
        console.log("componentWillUnmount 组件销毁了")
    }

    //==================在父组件里面改变props传值的时候触发的==============

    //父子组件传值，父组件改变了props值时触发 老版本名为componentWillReceiveProps，已不建议使用
    UNSAFE_componentWillReceiveProps(){
        console.log("UNSAFE_componentWillReceiveProps 父子组件传值，父组件改变了props值时触发")
    }


    updateMsg=()=>{
        this.setState({
            msg:this.state.msg+1
        })
    }

    //（数据渲染时）第三个触发的生命周期函数
    render() {
        console.log("03、render 数据渲染")
        return (
            <div>
                生命周期函数演示:{this.state.msg}
                <br /><br />
                <button onClick={this.updateMsg}>更新msg数据</button>
                <br /><br />
                {this.props.title}
            </div>
        );
    }
}

export default Lifecycle;