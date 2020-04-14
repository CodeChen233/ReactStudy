import React, {Component} from 'react';

import '../assets/css/index.css';

class DataDoubleBind extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"Alex",
         };
    }

    inputChange=(e)=>{
        this.setState({
            username:e.target.value,
        })
    }

    setUsername=()=>{
        this.setState({
            username:"Andy"
        })
    }
    render() {
        return (
            <div>
                <h2>数据双向绑定</h2>
                {/* Model改变影响View,View改变反过来影响Model */}
                {/* value必须和onChange一起用，单独使用时用defaultValue */}
                <input value={this.state.username} onChange={this.inputChange} />
        <button style={{"width":"50px","height":"22px"}} 
        onClick={this.setUsername}>{this.state.username}</button>
            </div>
        );
    }
}

export default DataDoubleBind;