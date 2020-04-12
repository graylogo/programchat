import React from "react"
import './MyList.css'
import {List, Avatar, Skeleton, Tag} from 'antd';
import {
    MessageOutlined,
    EyeOutlined,
    FieldTimeOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
import axios from "axios";
import moment from "moment";
import {Link, withRouter} from 'react-router-dom'
// import list from "less/lib/less/functions/list";
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
        tab:"all",
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
        const pathname =this.props.location.pathname.replace('/tab/','');
        const pageNum=[
            {tab:"/",num:1015},
            {tab:"all",num:1015},
            {tab:"good",num:15},
            {tab:"share",num:350},
            {tab:"weex",num:3},
            {tab:"job",num:39},
            {tab:"ask",num:623},
        ];
        return (
           listData?
              ( <div className = "myList" style={{minWidth:"570px"}}>
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
                       total:pageNum.find(item=>item.tab===pathname).num,
                       pageSize: 20,
                   }}
                   dataSource={listData}
                   footer={
                       <div>
                           <b>每一页20条</b>
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
                               avatar={<Link to={`/user/${item.author.loginname}`}><Avatar src={item.author.avatar_url} /></Link>}
                               // title={<a href={item.href}>{item.title}</a>}
                               title={<>
                                   {   item.top?<Tag color="green">置顶</Tag>:
                                       item.good?<Tag color="gold">精华</Tag>:
                                       item.tab==="share"?<Tag color="blue">分享</Tag>
                                       :item.tab==="ask"?<Tag color="purple">问答</Tag>
                                           :""}
                                   <Link to={`/topic/${item.id}`}>{item.title}</Link></>}
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
