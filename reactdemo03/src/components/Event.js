import React from 'react';

import '../assets/css/index.css';

class Event extends React.Component{

    constructor(props){

        super(props);

        this.state={
            msg:"我是一个Event组件",
            username:'',
        }
    }

    run=(event)=>{
        // 获取执行事件的DOM节点
        console.log(event.target)
        event.target.style.background="red";
        // 获取DOM的属性
        console.log(event.target.getAttribute("class"));
    }

    inputChange=(e)=>{
        console.log(e.target.value);
       this.setState({
           username:e.target.value
       })
    }

    getInput=()=>{
        alert(this.state.username)
    }

    inputRef=()=>{
        // 获取dom节点
        //     1、给元素定义ref属性
        //     <input ref="username"  />
        //     2、通过this.refs.属性名.value获取dom节点值
        let value=this.refs.username.value;
        // let value=document.getElementById("username").value;
       this.setState({
           username:value
       })
    }

    getRef=()=>{
        alert(this.state.username)
    }
    //键盘事件
    inputKeyUp=(e)=>{
        // console.log(e.keyCode);
        if(e.keyCode===13){
            alert(e.target.value)
        }
    }

    render(){

        return(

            <div>
                {this.state.msg}
                {/* 事件对象 */}
                <button className="24" onClick={this.run}>事件对象</button>
                <br /><br />

                {/* 表单事件 */}
                {/* 获取表单的值
                1、监听表单的改变事件
                2、在改变事件里面获取表单输入值
                3、把表单输入的值赋值给username
                4、点击按钮的时候获取state里面的username的值 */}
                <input onChange={this.inputChange} /><button onClick={this.getInput}>点击获取input值</button>

                 {/* 通过ref获取表单的值
                1、监听表单的改变事件
                2、在改变事件里面获取表单输入值
                3、把表单输入的值赋值给username
                4、点击按钮的时候获取state里面的username的值 */}
                <input ref="username" id="username" onChange={this.inputRef} />
                <button onClick={this.getRef}>点击获取input值</button>
                <br /><br />

                {/* 键盘事件 */}
                <input onKeyUp={this.inputKeyUp} />
            </div>
        )
    }
}
export default Event;