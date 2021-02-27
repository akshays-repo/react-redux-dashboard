import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './style.scss';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const MainLayout = ({ content }) => {
  return (
    <div>
      <Layout className="layout">
        <Header style={{backgroundColor:"#fffff"}}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Profile</Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/chartone">Chart 1</Link>
              </Menu.Item>
            <Menu.Item key="3">   <Link to="/chartwo">Chart 2</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/card">Card</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">{content}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}> Akshays Machine Test </Footer>
      </Layout>
    </div>
  );
};

export default MainLayout;
