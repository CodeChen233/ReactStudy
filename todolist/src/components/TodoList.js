import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            appName:'TodoList',
            list:[],
            // lists:[]
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
            tempList.push(this.refs.title.value)   //返回的是一个索引值
            console.log(tempList)
            this.refs.title.value=''
            this.setState({
                list:tempList
            })
        }
    }

    removeData=(key)=>{
        var tempList=this.state.list;
        tempList.splice(key,1)   //返回的是一个索引值
        console.log(tempList)
        this.setState({
            list:tempList
        })
    }

    handelAddData=(e)=>{
        // console.log(e.keyCode)
        if(e.keyCode===13){
            this.addData()
        }
       
    }

    handelChange=(key,e)=>{   //双向绑定
        var list=this.state.list;   
        list[key]=e.target.value
        this.setState({
            list:list
        })
    }

    render() {
        return (
            <div>
                <h2>React TodoList案例演示</h2>
                {this.state.appName}
                <input ref='title' onKeyUp={this.handelAddData} placeholder='添加TodoList' title='这是必填字段' />
                <button onClick={this.addData}>+</button>
                <hr />
                {this.state.list}
                {/* <input value={this.state.list} onChange={this.handelList} />
                <button onClick={this.removeData}>-</button> */}
                {
                    this.state.list.map((value,key)=>{
                        return(
                            <div  key={key}>
                                {/* <input value={this.state.list[key]} onChange={this.handelChange.bind(this,key)} /> */}
                                <input value={value} onChange={this.handelChange.bind(this,key)} />
                                <button onClick={this.removeData.bind(this,key)}>-</button>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default TodoList;