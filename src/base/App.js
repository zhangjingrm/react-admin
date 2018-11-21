import React, { Component } from 'react';
import { Layout } from 'antd';
import Nav from '../base/menu/nav';
import LeftMenu from '../base/menu/leftMenu';
import './App.css';
import '../styles/common.scss';

import Routes from '../config/router.config';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  render() {
    return (
      <div>
        <Layout>
          <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
            <LeftMenu />
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Nav />
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <Routes />
            </Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
