import React from 'react';
import Components from '../components/Components';
import '../assets/css/index.css';
import Lifecycle from './Lifecycle';

class Home extends React.Component{       //JSX语法

    constructor(props){  //props用于父子组件传值

        super(props);  //表示继承Component，一定要加

        //定义react数据

        this.state={

            num:123,
            // num:"aaa",
            title:100,
            name:'sufei',
            age:24,
            userinfo:{
                gender:'male',
                hobby:'basketball'
            },
            style:{
                className:'sheet',
                title:'我是用于属性绑定的',
                color:'green',
                fontSize:'40px',

                /*
                react绑定属性注意：
                1、class要变成className
                2、for要变成htmlFor
                3、行内样式 格式如：style={{'color':'blue'}}
                */
            }
        }
    }

    run=()=>{
        alert("我是Home组件的一个run方法")
    }

    getData=()=>{
        alert(this.state.userinfo.hobby)
    }

    getReturn=(re)=>{
        alert(re)
    }

    getSonData=()=>{  //父组件主动获取子组件实例数据、方法
        // alert(this.refs.demo.state.msg);
        this.refs.demo.sonData()
    }

    changeTitle=()=>{
        this.setState({
            title:this.state.title+2
        })
    }
    render(){
        return(

            <div>
                <Lifecycle title={this.state.title} />
                <hr />
                <button onClick={this.changeTitle}>改变父组件title值</button>
                <hr />
                {/* 头部组件 */}
                {/* 调用子组件的时候指定ref的值 */}
                <Components title={this.state.title} run={this.run} whole={this} ref="demo" num={this.state.num} />

                <button onClick={this.getSonData}>在父组件中调用子组件方法</button>

                <p className={this.state.style.className}>hello,My name is {this.state.name}</p>
                <p style={this.state.style} title={this.state.style.title}>I'm  {this.state.age}</p>
                <p style={{'color':'blue'}}>and I like {this.state.userinfo.hobby}</p>
                <label htmlFor='name'>姓名</label>
                <input id='name' />
                
                {/* react绑定属性注意：
                1、class要变成className
                2、for要变成htmlFor
                3、行内样式 格式如：style={{'color':'blue'}}
                */}
                
            </div>
        )
    }
}
  
export default Home;