import React, { Component } from 'react';

class Test extends Component{  
    //继承的第二种写法：class Test extends React.Component,那么上面就不需引用Component
    constructor(props){   //构造函数

        super(props);    //props用于父子组件传值

        //定义数据

        this.state={
            name:'kk',
            age:24,
            gender:'male'
        }
    }

    render(){

        return(
            <div>
                hello,我是Test子组件,By {this.state.name}
            </div>
        )
    }
}
export default Test;