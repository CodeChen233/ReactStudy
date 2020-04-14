import React, {Component} from 'react';
import './assets/css/App.css';
import './assets/css/index.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import Product from './components/Product';
import NewsContent from './components/NewsContent';
import ProductContent from './components/ProductContent';

/*
react路由配置
Ⅰ 找文档看
① https://www.cnblogs.com/cckui/p/11490372.html 
② http://react-guide.github.io/react-router-cn/docs/API.html

Ⅱ 安装
$ cnpm install react-router-dom --save

Ⅲ 找到项目根组件，引入react-router-dom
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
      
        <Router>

          <header className='header'>
          <Link to={{
              pathname: '/news',
              search: '?name=cedric',
              hash: '#someHash',
              state: { fromWechat: true }
            }}>
            <span>News</span>
          </Link>
          
          <Link to='/product'>Product</Link>
          
          <Link to='/'>Home</Link>
          </header>
          <hr />
          <div>
            {/* exact表示严格匹配 */}
            <Route exact path='/' component={Home} />
            <Route exact path='/news' component={News} />
            <Route exact path='/product' component={Product} />
            <Route exact path='/newscontent/:aid' component={NewsContent} />
            <Route exact path='/productcontent' component={ProductContent} />
          </div> 

        </Router>
       
      </div>
    );
  }
}

export default App;
