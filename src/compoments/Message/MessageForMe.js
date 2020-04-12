import React from "react"
import Axios from "axios";
import {Empty, Skeleton} from "antd";
class MessageForMe extends React.Component{
    state ={
        data:null
    };

    componentDidMount() {
        const token = localStorage.getItem("token");
        Axios.get(`https://www.vue-js.com/api/v1/messages?accesstoken=${token}`).then(res=>{
            this.setState({
                data:res.data.data
            })
        })
    }

    render() {
        const {data}= this.state;
        console.log(data)
        return (
            data?
            <div className = "messageForMe">
               <Empty description={"没有测试，所以没写数据展示"}/>
            </div>:<Skeleton active/>
        );
    }
}
export default MessageForMe;
