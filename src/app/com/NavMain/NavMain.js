import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Menu, Col } from 'antd';
import { signOut } from '~/utils/user-utils';
import './NavMain.scss';

const NavMain = () => (
  <div className="nav-main">
    <div className="nav-wrapper">
      <Row type="flex" justify="space-between">
        <Col span={8}>
          <div className="logo" />
        </Col>
        <Col span={12}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            selectedKeys={[window.location.pathname]}
            style={{ background: 'transparent' }}
            className="menu-items"
          >
            <Menu.Item key="/">
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item onClick={() => signOut()} key="/logout">
              <div className="sign-out">Sign out</div>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  </div>
);

export default NavMain;
