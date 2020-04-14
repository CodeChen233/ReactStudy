import React, {Component} from 'react';

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'React表单',
            name:'',
            gender:'1',
            city:'北京',
            citys:[
                '北京','上海','深圳'
            ],
            hobby:[
                {
                    title:"sleep",
                    checked:true,
                },
                {
                    title:'eat',
                    checked:false,
                },
                {
                    title:'coding',
                    checked:true,
                }
            ],
            info:'',
         };
    }

    handelSubmit=(e)=>{
        
        e.preventDefault();  //阻止submit的提交事件
        // alert("您已提交");
        console.log(this.state.name,this.state.gender,this.state.city,this.state.hobby,this.state.info);
    }

    handelName=(e)=>{
        this.setState({
            name:e.target.value,
        })
    }
    
    handelGender=(e)=>{
        this.setState({
            gender:e.target.value
        })
    }

    handelCity=(e)=>{
        this.setState({
            city:e.target.value
        })
    }

    handelHobby=(key)=>{
        var hobby=this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }

    handelInfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <form onSubmit={this.handelSubmit}>
                    {/* {this.state.name} */}
                    用户名：<input type='text' value={this.state.name} onChange={this.handelName} /><br /><br />
                    {/* checked的作用是选默认 */}
                    性别：<input type='radio' value='1' checked={this.state.gender==='1'} onChange={this.handelGender} />男
                         <input type='radio' value='2' checked={this.state.gender==='2'} onChange={this.handelGender} />女<br /><br />
                    居住城市：<select  value={this.state.city} onChange={this.handelCity}>
                            {
                                this.state.citys.map(function(value,key){
                                    return <option key={key}>{value}</option>
                                })
                            }
                        </select><br /><br />
                    爱好：{
                        // 注意this指向
                        this.state.hobby.map((value,key)=>{
                            
                            return (
                                <span key={key}>
                                    {/* 重点复习，稍微有点难理解 */}
                                    <input type='checkbox' checked={value.checked} onChange={this.handelHobby.bind(this,key)} />
                                    {value.title}
                                </span>
                                )
                        })
                    }
                    <br /><br />
                    备注：<textarea value={this.state.info} onChange={this.handelInfo} />
                    <br /><br />
                    <input type='submit' defaultValue='提交' />
                </form>
            </div>
        );
    }
}

export default ReactForm;