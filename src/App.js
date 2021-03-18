import { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import { Layout, Menu, Breadcrumb, Card, List } from 'antd';
import { ShoppingCartOutlined, NotificationOutlined, SkinTwoTone } from '@ant-design/icons';
import data from './App.json';

function App() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const [num, setNum] = useState(0);
  const incNum = () => {
   if (num < 30) {
      setNum(num + 1);
    }
  }
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);

    }
  }

return (
    <div className="App">
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Dresses</Menu.Item>
            <Menu.Item key="2">Fruits &amp; Vegatables</Menu.Item>
            <Menu.Item key="3">Cakes</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >

              <SubMenu key="sub1" icon={<ShoppingCartOutlined />} title="Category">
                <Menu.Item key="1">Kurtas &amp; kurtis</Menu.Item>
                <Menu.Item key="2">Tops,tees &amp; shirts</Menu.Item>
                <Menu.Item key="3">Palazoos &amp; jeans</Menu.Item>
                <Menu.Item key="4">Leggings &amp; salwars</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<SkinTwoTone />} title="fruits &amp; vegetables">
                <Menu.Item key="5">Pomegrante</Menu.Item>
                <Menu.Item key="6">Grapes</Menu.Item>
                <Menu.Item key="7">Orange</Menu.Item>
                <Menu.Item key="8">Pineapple</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={< NotificationOutlined />} title="cakes">
                <Menu.Item key="9">plum</Menu.Item>
                <Menu.Item key="10">bluberry</Menu.Item>
                <Menu.Item key="11">blackcurrant</Menu.Item>
                <Menu.Item key="12">Apple pie</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}

            >
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 4,
                  xxl: 3,
                }}
                dataSource={data.Array}
                renderItem={item => (


                  <List.Item>

                    <Card

                      title={item.title}>
                      <img src={item.image} className="image-container" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <div>
                        <button onClick={()=>incNum(item.id)}>+</button>
                        {num}
                        <button onClick={decNum}>-</button>

                      </div>

                    </Card>
                  </List.Item>

                )}
              />,
  </Content>
          </Layout>
        </Layout>
      </Layout>

    </div>
  );
}

export default App;
