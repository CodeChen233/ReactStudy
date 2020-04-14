import React from 'react';

import '../assets/css/index.css';

class Function extends React.Component{

    constructor(props){

        super(props);

        this.state={

            num:24,
            msg1:"hello world1",
            msg2:"hello world2",
            msg3:"hello world3",
            name:"admin",
        }

        this.getData2=this.getData2.bind(this);
    }
    //编写方法
    singleClick(){
        alert("您刚刚点击了我")
    }

    getData1(){
        alert(this.state.msg1);
    }

    getData2(){
        alert(this.state.msg2);
    }

    getData3=()=>{
        alert(this.state.msg3);
    }

    setData=()=>{

        //改变state里面的值
        this.setState({

            msg1:"这是改变后的值"
        })

        alert("msg1的值已经改变")
    }

    setNum=(data)=>{

        //改变state里面的值
        this.setState({

            num:data
        })

        alert("num的值已经改变")
    }

    setName=()=>{

        //改变state里面的值
        var name = document.getElementById("name").value;

        this.setState({

            name:name
        })
    }

    render(){
        return(
            <div>
                {this.state.name}
                {/* 单击事件触发singleClick方法 */}
                <button onClick={this.singleClick}>clik me</button>
                {/* 获取数据的三种方式，改变this指向 */}
                <button onClick={this.getData1.bind(this)}>获取数据方式1</button>
                <button onClick={this.getData2}>获取数据方式2</button>
                <button onClick={this.getData3}>获取数据方式3</button>
                <button onClick={this.setData}>改变state里面的值</button>
                <button onClick={this.setNum.bind(this,100)}>执行方法传值改变state里面num的值</button>
                <br />
                
                <input id="name" type="text" placeholder="请输入名字" />
                <button type="submit" onClick={this.setName}>提交</button>
            </div>
        )
    }
}
export default Function;