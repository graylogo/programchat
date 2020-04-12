import React from "react"
import { Skeleton, List} from 'antd';
import LoginButton from "../LoginButton/LoginButton";
import "./recommand.css"
import axios from "axios";
import {Link} from "react-router-dom";
class Recommand extends React.Component{
    state ={
        listData:null
    };
    componentDidMount() {
        axios.get("https://www.vue-js.com/api/v1/topics?tab=good").then(res=>{
            const newData= res.data.data.filter(item=>item.title.length<28);
            this.setState({
                listData:newData
            })
        })

    }
    render() {
        const {listData}= this.state;
        return (
            <div className = "recommand">
                <LoginButton/>
                {/*<Card title="今日推荐" style={{ width: 200 ,border: "1px solid #ECECEC"}}>*/}
                   { listData?<>
                       {/*<Divider >今日推荐</Divider>*/}
                       <List
                           size="small"
                           style={{ width: 200 ,backgroundColor:"#FFFFFF"}}
                           header={<h2 style={{textalign:"center"}}>今日推荐</h2>}
                           // footer={<div>Footer</div>}
                           bordered={true}
                           dataSource={listData}
                           renderItem={item => <List.Item><Link to={`/topic/${item.id}`}>{item.title}</Link></List.Item>}
                       />
                       </>:<Skeleton active />}
                {/*</Card>*/}
            </div>
        );
    }
}
export default Recommand;
