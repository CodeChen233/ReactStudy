import React, {Component} from 'react';
import  {Link} from 'react-router-dom'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:"1",
                    title:"我是商品1",
                },
                {
                    aid:"2",
                    title:"我是商品2",
                },
                {
                    aid:"3",
                    title:"我是商品3",
                },
                {
                    aid:"4",
                    title:"我是商品4",
                },
                {
                    aid:"5",
                    title:"我是商品5",
                },
            ]
         };
    }
    render() {
        return (
            <div>
                我是Product组件

                <ul>
                    {
                        this.state.list.map((value,key)=>{
                        return(<li key={key}>
                            {/* `string${动态值}` es6的模板字符串表示字符串和动态值拼接 */}
                            <Link to={`/productcontent?aid=${value.aid}`}>
                                {value.title}
                            </Link>
                            
                            </li>)
                        })
                    }
                </ul>
            </div>

           
        );
    }
}

export default Product;