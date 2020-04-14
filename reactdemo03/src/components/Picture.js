import React from 'react';

//引入图片
import emoji from '../assets/images/1 (1).jpg';
import '../assets/css/index.css'

class Picture extends React.Component{

    constructor(props){

        super(props);

        this.state={


        }
    }

    render(){

        return(

            <div className="emoji">
            {/* import 引入 */}
            <img src={emoji} alt="" />
            {/* 引入本地图片 */}
            <img src={require("../assets/images/1 (2).jpg")} alt="" />
            {/* 外部链接引入 */}
            <img src="http://www.baidu.com/img/bd_logo1.png?where=super" alt="" />
            </div>
        )
    }
}
export default Picture;