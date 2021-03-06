import React from "react"
import './loginButton.css'
import {Avatar, Badge, Button, Card} from "antd";
import Axios from "axios";
import {Link} from "react-router-dom";
const { Meta } = Card;
class LoginButton extends React.Component{
    state ={
        userInfo:null,
        message:''
    };

    componentDidMount() {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("yourId");
        if(token){
            Axios.post("https://vue-js.com/api/v1/accesstoken",{accesstoken:token}).then((res)=>{
                localStorage.setItem("token",token);
                this.setState({
                    userInfo:res.data,
                    userId:userId
                })
            })
            Axios.get(`https://www.vue-js.com/api/v1/message/count?accesstoken=${token}`).then(res=>{
                this.setState({
                    message:res.data.data
                })
            })
        }
    }

    render() {
        const {userInfo,message} =this.state;
        return (
            <div className = "LoginButton">
                    <Card size={"small"} style={{width: 200,maxHeight:170}}>
                        {userInfo?<>
                            <span>个人信息</span>
                            <Meta
                            avatar={
                                <Link to={`/user/${userInfo.loginname}`}><Avatar src={userInfo.avatar_url} /></Link>
                            }

                            title={<Link to="/my/messages">{`${userInfo.loginname} `}<Badge count={message}/></Link> }
                            description={<Button type="primary" href="#" size={"small"} onClick={this.clickOut}>退出</Button>
                            }
                        />
                            <br/>
                        <Button type="primary" href="/#/create" size={"small"} block={true}>发布话题</Button>
                            <br/>
                        </>:<Button type="primary" href="/#/login" style={{marginLeft:"23%"}}>登录/注册</Button>}
                    </Card>

            </div>
        );
    }
    clickOut =()=>{
        localStorage.clear();
        this.setState({
            userInfo:null
        })
    }
}
export default LoginButton;
