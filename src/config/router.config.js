import React from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';

import Login from '../base/login';
import * as routePages from '../pages/index';

class Config extends React.Component {

  render() {
    return (
      <Router>
        <div>
          {/*<Route exact path="/" component={App} />*/}
          <Route path="/login" component={Login}/>
          <Route path="/table" component={routePages.TablePage}/>
          <Route path="/form" component={routePages.FormPage}/>
          <Route path="/editor" component={routePages.EditorPage}/>
          <Route path="/echarts" component={routePages.EchartsPage}/> 
          <Route path="/antdForm" component={routePages.AntdForm}/> 
        </div>
      </Router>
    );
  }
}

export default Config;
