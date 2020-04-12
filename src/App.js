import React from 'react';
import './App.css';
import {Layout, Menu,message} from 'antd';
import {HashRouter as Router, Link} from "react-router-dom"
import SearchBox from "./compoments/Search/SearchBox";
import MyRoute from "./compoments/Route/MyRoute";
import moment from "moment";
import "moment/locale/zh-cn"
moment.locale("zh-cn");
message.config({
    top: 70,
    duration: 2,
    maxCount: 2,
});
const { Header, Content, Footer } = Layout;
function App() {
    return (
      <Router>
    <div className="App">
        <Layout>
            {/*页头*/}
            <Header className="header" style={{padding:"0 15%"}}>
                {/*<div className="logo" />*/}
                    <Link to="/" className="logo">
                    </Link>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/hot_topic">热门话题</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/followed">关注的人</Link> </Menu.Item>
                </Menu>
                <SearchBox/>
                 {/*<LoginButton/>*/}
            </Header>
            {/*主体内容*/}
            <Content style={{ padding: '64px 10% 0 10%' }}>
                {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <MyRoute/>
            </Content>
            {/*页脚*/}
            <Footer style={{ textAlign: 'center' }}>Program Chat ©2020 Created by Gray
            <br/>
                <a href="http://www.beian.miit.gov.cn/"><img src="http://gray.oss-cn-beijing.aliyuncs.com/2020-04-10%2Ficon.png" alt=""/> 冀ICP备 18030798号-3</a>
            </Footer>
        </Layout>
    </div>
      </Router>
  );
}

export default App;
