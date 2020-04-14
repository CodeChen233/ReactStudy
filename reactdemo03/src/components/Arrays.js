import React from 'react';

import '../assets/css/index.css';

class Arrays extends React.Component{

    constructor(props){

        super(props);

        this.state={

            list1:[11111,22222,33333],
            list2:[<h2 key="2">我是一个h2标签</h2>,
            <h3 key="3">我是一个h3标签</h3>],
            list3:[
                
                    {title:"444"},
                    {title:"555"},
                    {title:"666"}
        
            ]
            
        }

    
    }
    
    render(){

        let listResult=this.state.list1.map(function(value,key){
        return <li key={key}>{value}</li>
        })

            return(
                <div>
                    { this.state.list2 }
                    <ul>
                        { listResult }
                    </ul>

                   
                    <ul>
                        {
                        this.state.list3.map(function(value,key){
                        // console.log(value.title)
                        return (<li key={key}>{value.title}</li>)
                        })
                        }
                    </ul>
                </div>
            )
        }
}
export default Arrays;