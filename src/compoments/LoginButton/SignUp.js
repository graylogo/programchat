import React from 'react';
import "./signup.css"
import {
    Form,
    Input,
    Tooltip,
    Checkbox,
    Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const SignUp =(props)=>{
    return(
        <div className = "signUp">
            <RegistrationForm />
        </div>
    )
};
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                prefix: '86',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="nickname"
                label={
                    <span>用户名&nbsp;
                        <Tooltip title="给自己起一个独一无二的用户名吧！">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
                }
                rules={[
                    {
                        required: true,
                        message: '请输入你的用户名!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="邮件"
                rules={[
                    {
                        type: 'email',
                        message: '邮箱格式错误!',
                    },
                    {
                        required: true,
                        message: '请输入你的邮箱!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="密码"
                rules={[
                    {
                        required: true,
                        message: '请输入你的密码!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="确认密码"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: '请确认你的密码!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('两次输入的密码不匹配!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>




            <Form.Item
                name="phone"
                label="手机号码"
                rules={[
                    {
                        required: true,
                        message: '请输入你的手机号码!',
                    },
                ]}
            >
                <Input
                    // addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>



            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    我已经阅读并同意 <a href="#">《ProgramChat用户协议》</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                        注册
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignUp;
