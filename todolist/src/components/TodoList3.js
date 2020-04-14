import React, {Component} from 'react';
//引入自定义模块
import storage from '../module/storage';

class TodoList3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            appName:'TodoList',
            // list:JSON.parse(localStorage.getItem("todoList")),
            list:[],
            // list2:[]
         };
    }

    addData=()=>{
        // var regu='^[]+$';
        // var re=new RegExp(regu)   //写正则表达式去除空格

        if(this.refs.title.value===''){
            alert('不允许为空！')
        }
        // else if(re.test(this.refs.title.value)){
        //     alert('不允许为空！')
        // }
        else{
            var tempList=this.state.list;
            var dic={
                title:this.refs.title.value,
                checked:false
            }
            tempList.push(dic)   //返回的是一个索引值
            // console.log(tempList.value,tempList.checked)
            this.refs.title.value=''
            this.setState({
                list:tempList
            })
            //执行数据缓存保存到本地
            // localStorage.setItem('todoList',JSON.stringify(tempList));
            storage.set("todoList",tempList)
        }
    }

    removeData=(key)=>{
        var tempList=this.state.list;
        tempList.splice(key,1)   //返回的是一个索引值
        // console.log(tempList.value,tempList.checked)
        this.setState({
            list:tempList
        })
        //执行数据缓存保存到本地
        // localStorage.setItem('todoList',JSON.stringify(tempList));
        storage.set("todoList",tempList)
    }

    handelAddData=(e)=>{
        // console.log(e.keyCode)
        if(e.keyCode===13){
            this.addData()
        }
       
    }

    handelChange=(key,e)=>{   //双向绑定
        var tempList=this.state.list;   
        tempList[key].title=e.target.value
        this.setState({
            list:tempList
        })
        //执行数据缓存保存到本地
        // localStorage.setItem('todoList',JSON.stringify(tempList));
        storage.set("todoList",tempList)
    }

    handelCheck=(key)=>{
        var tempList=this.state.list;
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            list:tempList
        })
        //执行数据缓存保存到本地
        // localStorage.setItem('todoList',JSON.stringify(tempList));
        storage.set("todoList",tempList)
    }

    //生命周期函数，页面加载时会触发
    componentDidMount(){
        // var todolist=JSON.parse(localStorage.getItem("todoList"));
        var todolist=storage.get("todoList");
        // console.log(todolist)
        if(todolist){
            this.setState({
                list:todolist
            })
        }
    }

    render() {
        return (
            <div>
                <header className="title">
                <h2>React TodoList案例</h2>
                {this.state.appName} &nbsp;&nbsp;

                {/* 添加待办事项 */}
                <input  ref='title' onKeyUp={this.handelAddData} placeholder='添加TodoList' title='这是必填字段' />
                <button onClick={this.addData}>+</button>
                </header>
                <hr />
                
                {/* 待办事项 */}
                <span style={{"textAlign":"center","color":'red'}}>待办事项</span>
                {/* <input value={this.state.list} onChange={this.handelList} />
                <button onClick={this.removeData}>-</button> */}
                {
                    this.state.list.map((value,key)=>{
                        // if(value.checked===false)
                        if(!value.checked){
                            return(
                                <div  key={key}>
                                    {/* <input value={this.state.list[key]} onChange={this.handelChange.bind(this,key)} /> */}
                                    <input type="checkbox" checked={value.checked} onChange={this.handelCheck.bind(this,key)} />
                                    <input value={value.title} onChange={this.handelChange.bind(this,key)} />
                                    <button onClick={this.removeData.bind(this,key)}>-</button>
                                </div>
                            )
                        }
                    })
                }
                <hr />

                 {/* 已完成事项 */}
                 <span style={{"textAlign":"center","color":'grey'}}>已完成事项</span>
               
                {
                    this.state.list.map((value,key)=>{
                        // if(value.checked===true)
                        if(value.checked){
                            return(
                                <div key={key}>
                                    
                                    <input type="checkbox" checked={value.checked} onChange={this.handelCheck.bind(this,key)} />
                                    <input value={value.title} onChange={this.handelChange.bind(this,key)} />
                                    <button onClick={this.removeData.bind(this,key)}>-</button>
                                </div>
                            )
                        }
                        
                    })
                }
            </div>
        );
    }
}

export default TodoList3;