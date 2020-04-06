import React from "react"
import './MyList.css'
import {List, Avatar, Skeleton} from 'antd';
import {
    MessageOutlined,
    EyeOutlined,
    FieldTimeOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
import axios from "axios";
import moment from "moment";
import {Link, withRouter} from 'react-router-dom'
//显示模块
const IconText = ({ icon, text }) => (
    <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
  </span>
);
class MyList extends React.Component{
    state ={
        listData:null,
        currentPage:1,
        tab:"all"
    };

    componentDidMount() {
        axios.get("https://www.vue-js.com/api/v1/topics?tab=all").then(res=>{
            this.setState({
                listData:res.data.data
            })
        })

    }
    componentDidUpdate(prevProps, prevState) {
        const pathname =this.props.location.pathname.replace('/tab/','');
        const {currentPage} = this.state;
       if(prevProps!==this.props || prevState.currentPage!==this.state.currentPage){
           axios.get(`https://www.vue-js.com/api/v1/topics?tab=${pathname==="/"?"all":pathname}&page=${currentPage}`).then(res=>{
               this.setState({
                   listData:res.data.data
               })
           })
       }
    }

    render() {
        const {listData}= this.state;
        return (
           listData?
              ( <div className = "myList">
               <List
                   itemLayout="vertical"
                   size="large"
                   pagination={{
                       onChange: page => {
                          this.setState({
                              currentPage:page
                          })
                       },
                       showSizeChanger:false,
                       total:99,
                       pageSize: 20,
                   }}
                   dataSource={listData}
                   footer={
                       <div>
                           <b>ant design</b> footer part
                       </div>
                   }
                   renderItem={item => (
                       <List.Item
                           key={item.title}
                           actions={[
                               <IconText icon={EyeOutlined} text={item.visit_count} key="list-vertical-star-o" />,
                               <IconText icon={MessageOutlined} text={item.reply_count} key="list-vertical-message" />,
                               <IconText icon={FieldTimeOutlined} text={`创建于 ${moment(item.create_at).format('YYYY年 MMM Do') }`} key="list-vertical-like-o" />,
                           ]}
                           extra={
                               <IconText icon={ClockCircleOutlined} text={`最后回复：${moment(item.last_reply_at).fromNow() }`} key="list-vertical-like-o" />
                           }
                       >
                           <List.Item.Meta
                               avatar={<Avatar src={item.author.avatar_url} />}
                               // title={<a href={item.href}>{item.title}</a>}
                               title={<Link to={`/topic/${item.id}`}>{item.title}</Link>}
                               // description={item.content}
                           />
                           {/*{item.content}*/}
                       </List.Item>
                   )}
               />
           </div>):<Skeleton active />
        );
    }
}
export default withRouter(MyList);
