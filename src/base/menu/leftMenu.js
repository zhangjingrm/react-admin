import React from 'react';
import { Menu, Icon, Button } from 'antd';
import { withRouter, BrowserRouter as Link } from "react-router-dom";
import history from '../history';
import './leftMenu.scss';

const SubMenu = Menu.SubMenu;

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  render() {
    return (
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={this.state.collapsed}
        onClick={this.handleItemClick.bind(this)}
      >
        <SubMenu key="sub1" title={<span><Icon type="qrcode" /><span>功能页面</span></span>}>
          <Menu.Item key="table">table</Menu.Item>
          <Menu.Item key="form">form</Menu.Item>
          <Menu.Item key="editor">editor</Menu.Item>
          <Menu.Item key="echarts">echarts</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>通用组件</span></span>}>
          <SubMenu key="sub2-1" title="form">
            <Menu.Item key="sub2-1-1">Input</Menu.Item>
            <Menu.Item key="sub2-1-2">Select</Menu.Item>
            <Menu.Item key="sub2-1-3">Radio</Menu.Item>
            <Menu.Item key="sub2-1-4">Checkbox</Menu.Item>
            <Menu.Item key="sub2-1-5">date</Menu.Item>
          </SubMenu>
          <Menu.Item key="sub2-2">tree</Menu.Item>
          <Menu.Item key="sub2-3">Modal</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }

  handleItemClick(item, key, keyPath) {
    history.push(`/${item.key}`)
    // this.props.history.push(`/${item.key}`)
  }
}

export default withRouter(LeftMenu);