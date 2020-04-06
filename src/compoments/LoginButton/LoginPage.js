import React from "react"
import "./loginpage.css"
import { Form, Input, Button, Checkbox,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import Axios from "axios";
class LoginPage extends React.Component{
    state ={
        userName:'',
    };

    render() {
        const {username}=this.state;
        console.log(this.props)
        return (
            <div className = "loginPage">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    // onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的用户名!',
                            },
                        ]}
                    >
                        <Input value={username} onChange={(e)=>{this.setState({userName:e.target.value})}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                //实际使用的时候要求检测，改为true
                                required: false,
                                message: '请输入你的密码!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>
                        <Link to="#" className="login-form-forgot">忘记密码</Link>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.clickOk}>
                           登录
                        </Button>
                       没有账号？
                        <Link to="/sign_up">现在注册!</Link>
                    </Form.Item>
                </Form>
            </div>
        );
    }
    clickOk =()=>{
        const {userName}= this.state;
        Axios.post("https://vue-js.com/api/v1/accesstoken",{accesstoken:userName}).then((res)=>{
            localStorage.setItem("token",userName);
            //这里要考虑登录后跳转到原来的页面
            message.success('登录成功！');
            //如果用户直接访问登录页，应该判断是否有历史页，哪有的话跳转主页
            // window.location.pathname="/"
            this.props.history.push('/',userName)

        }).catch(() => {
            message.error('登录失败！');
            })
    }
}
export default LoginPage;
