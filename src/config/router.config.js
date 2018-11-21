import React from 'react';
import { Menu, Icon, Button, Layout } from 'antd';
import {Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';

import Nav from '../base/menu/nav';
import LeftMenu from '../base/menu/leftMenu';
import App from '../base/App';
import Login from '../base/login';
import history from '../base/history.js';

import * as routePages from '../pages/index';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Config extends React.Component {

  render() {
    return (
      <Router history={history}>
        <div>
          {/*<Route exact path="/" component={App} />*/}
          <Route path="/login" component={Login}/>
          <Route path="/table" component={routePages.TablePage}/>
          <Route path="/form" component={routePages.FormPage}/>
          <Route path="/editor" component={routePages.EditorPage}/>
          <Route path="/echarts" component={routePages.EchartsPage}/> 
        </div>
      </Router>
    );
  }
}

export default Config;
