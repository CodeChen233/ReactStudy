import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';


//引入子组件
import Home from './components/Home';
// import Test from './components/Test';
// import Picture from './components/Picture';
// import Arrays from './components/Arrays';
// import Function from './components/Function';
// import Event from './components/Event';
// import DataDoubleBind from './components/DataDoubleBind';
// import ReactForm from './components/ReactForm';
// import Axios from './components/Axios'
// import FetchJsonp from './components/Fetchjsonp'
// import Lifecycle from './components/Lifecycle'


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Function /> */}
        <Home />
        {/* <Test />
        <Picture />
        <Arrays /> */}
        {/* <Event /> */}
        {/* <DataDoubleBind /> */}
        {/* <ReactForm /> */}
        {/* <Axios /> */}
        {/* <FetchJsonp /> */}
        {/* <Lifecycle /> */}
        
      </header>
    </div>
  );
}

export default App;
