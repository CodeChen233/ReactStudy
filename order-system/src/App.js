import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';




//引入组件
import Home from './components/Home';
import ProductContent from './components/ProductContent';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return(
          <Router>
            <div>
              <Route exact path='/login' component={Login} />
              <Route exact path='/' component={Home} />
              <Route exact path='/productContent/:id' component={ProductContent} />
            </div>
          </Router>


    );
  }
}

export default App;
