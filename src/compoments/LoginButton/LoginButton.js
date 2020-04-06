import React from "react"
import './loginButton.css'
import {Avatar, Button, Card} from "antd";
import Axios from "axios";
const { Meta } = Card;
class LoginButton extends React.Component{
    state ={
        userInfo:null,
    };

    componentDidMount() {
        const token = localStorage.getItem("token")
        if(token){
            Axios.post("https://vue-js.com/api/v1/accesstoken",{accesstoken:token}).then((res)=>{
                localStorage.setItem("token",token);
                this.setState({
                    userInfo:res.data
                })
            })
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const token = localStorage.getItem("token")
        if(token){
            console.log("cdu执行了")
        }else {
            console.log("111")
        }
    }

    render() {
        const {userInfo} =this.state;
        return (
            <div className = "LoginButton">
                {userInfo?<>
                    <Card size={"small"} style={{maxHeight:64,backgroundColor:"#041528"}} bordered={null}>
                        <Meta
                            avatar={
                                <Avatar src={userInfo.avatar_url} />
                            }
                            title={userInfo.loginname}
                            // description="This is the description"
                        />
                        <Button type="primary" href="#" size={"small"} onClick={this.clickOut}>退出</Button>
                    </Card>

                </>:<Button type="primary" href="/login">登录/注册</Button>}
            </div>
        );
    }
    clickOut =()=>{
        localStorage.removeItem("token");
        this.setState({
            userInfo:null
        })
    }
}
export default LoginButton;
