import React, {Component} from 'react';

import PropTypes from 'prop-types';

/*
父子组件传值（通信）
    1、父组件给子组件传值(父==>子)
        Ⅰ、在调用子组件时定义一个属性，<Components msg='组件'></Components>
        Ⅱ、子组件里面 this.props.msg

        说明：父组件不仅可以给子组件传值，还可以给子组件传递方法，以及把整个父组件传给子组件，可以让子组件给父组件传回值

    2、父组件主动获取子组件的数据(子==>父)
        Ⅰ、调用子组件的时候指定ref的值，<Components ref='header'></Components>
        Ⅱ、通过this.refs.header 获取整个子组件的实例(dom(组件)加载完成后获取)
*/

/*
父组件给子组件传值 defaultProps与propTypes
    Ⅰ、defaultProps:父子组件传值中，如果父组件调用子组件的时候不给子组件传值，则可以在子组件中使用defaultProps定义的默认值
    Ⅱ、propTypes:验证父组件传值类型的合法性
    （都是定义在子组件里）
*/

//与Home.js组件通信
class Components extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'这是一个头部组件',
            
         };
    }

    sonData=()=>{
        alert("我是子组件的方法")
    }
    render() {
        return (
            <div >
                {/* 父组件给子组件传值 */}
                <h2>{this.props.title}</h2>
                <h3>{this.props.num}</h3>
                {/* 父组件给子组件传递方法 */}
                <button onClick={this.props.run}>我在子组件里调用父组件的方法</button>
                <br />
                {/* 把整个父组件传给子组件 */}
                <button onClick={this.props.whole.getData}>获取整个组件实例</button>
                <br />
                {/* 子组件给父组件传回值 */}
                <button onClick={this.props.whole.getReturn.bind(this,"我是子组件传回的数据")}>子组件向父组件传回值</button>
                
            </div>
        );
    }
}

Components.defaultProps={
    title:"defaultProps默认值"
}

//注意这里propTypes的P是小写，而引入包时是大写
//通过propTypes定义父组件给子组件传值的类型
Components.propTypes={
    num:PropTypes.number
}

export default Components;