import React from "react"
import axios from "axios";
import {Avatar, List, Skeleton} from "antd";
import moment from "moment";

class UserInfoPage extends React.Component{
    state ={
        userInformation:null
    };

    componentDidMount() {
        const {userName}= this.props;
        axios.get(`https://www.vue-js.com/api/v1/user/${userName}`).then(res=>{
            this.setState({
                userInformation:[res.data.data]
            })
        })
    }

    render() {
        const {userInformation} =this.state;
        return (
            userInformation?<div className = "userInfoPage">
                <List
                    itemLayout="horizontal"
                    dataSource={userInformation}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar_url} />}
                                title={item.loginname}
                                description={<div>{item.score}积分<br/>创建于{moment(item.create_at).fromNow()}</div>}
                            />
                        </List.Item>
                    )}
                />
                </div>:<Skeleton active />
        );
    }
}
export default UserInfoPage;
