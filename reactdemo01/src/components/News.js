import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:"1",
                    title:"我是新闻1",
                },
                {
                    aid:"2",
                    title:"我是新闻2",
                },
                {
                    aid:"3",
                    title:"我是新闻3",
                },
                {
                    aid:"4",
                    title:"我是新闻4",
                },
                {
                    aid:"5",
                    title:"我是新闻5",
                },
            ]
         };
    }
    render() {
        return (
            <div>
                我是News组件

                <ul>
                    {
                        this.state.list.map((value,key)=>{
                        return(<li key={key}>
                            {/* `string${动态值}` es6的模板字符串表示字符串和动态值拼接 */}
                            <Link to={`/newscontent/${value.aid}`}>
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

export default News;