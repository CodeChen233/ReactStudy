import React from 'react';
import ReactDOM from 'react-dom';

// import './assets/css/index.css';              //样式表可以在组件里引用，这里可以算是全局样式

//引入App.js这个组件
import App from './App';

//不用管  这是加快react运行速度的一个js文件
import * as serviceWorker from './serviceWorker';

//把APP.js根组件渲染到id=root的标签里
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
