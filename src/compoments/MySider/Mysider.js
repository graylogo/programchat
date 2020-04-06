import React from "react"
import './mysider.css'
import {Layout, Menu} from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
//侧边导航栏模块
const { SubMenu } = Menu;
const {Sider} = Layout;
class Mysider extends React.Component{
    state ={};

    render() {
        return (
            <div className = "mysider">
                <Sider className="site-layout-background" width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['0']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="0"> <LaptopOutlined /><Link to="/tab/all">全部</Link></Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                  <UserOutlined />
                  前端
                </span>
                            }
                        >
                            <Menu.Item key="1"><Link to="/tab/good">精华</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/tab/weex">week</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/tab/share">分享</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/tab/ask">问答</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/tab/job">招聘</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                  <LaptopOutlined />
                  后端
                </span>
                            }
                        >
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                  <NotificationOutlined />
                  编程语言
                </span>
                            }
                        >
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </div>
        );
    }
}
export default Mysider;
