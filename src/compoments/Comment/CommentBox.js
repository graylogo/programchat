import React from "react"
import {Comment, List, Empty, Button, message, Input} from 'antd';
import axios from "axios";
import moment from "moment";
import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import Editor from "for-editor-herb"
// const {TextArea}=Input;
class CommentBox extends React.Component{
    state ={
        replies:null,
        isChange:false,
        commentVal:"",
        userInfo:null,
        // showBar:false,
        reCommentVal:""
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {topicId} = this.props;
        if((prevState.isChange!==this.state.isChange)){
            axios.get(`https://www.vue-js.com/api/v1/topic/${topicId}`).then(res => {
                // console.log("评论组件的CDU执行了一次")
                res.data.data.replies.forEach(e=>e.showBar = false);
                this.setState({
                    replies:res.data.data.replies
                });
            })

        }
    }

    componentDidMount() {
        this.$vm = React.createRef();
        this.props.replies.forEach(e=>e.showBar = false);
        this.setState({
            replies:this.props.replies
        });
        const token = localStorage.getItem("token");
        if(token){
            axios.post("https://vue-js.com/api/v1/accesstoken",{accesstoken:token}).then((res)=>{
                localStorage.setItem("token",token);
                this.setState({
                    userInfo:res.data
                })
            })
        }
    }


    render() {
        const {replies,commentVal,userInfo,reCommentVal} = this.state;
        const yourId = localStorage.getItem("yourId");
        return (
            <div className = "commentBox">
                {replies?<List
                    className="comment-list"
                    header={`${replies.length} 条评论`}
                    itemLayout="horizontal"
                    dataSource={replies}
                    renderItem={(item ,index)=> (
                        <li>
                            <Comment
                                actions={[
                                    <span key="comment-basic-like" onClick={()=>this.clickLike(item.id)}>
                                        {item.ups.includes(yourId)?<LikeFilled/>: <LikeOutlined/>}
                                        {item.ups.length}
                                    </span>,<Button type={"link"} onClick={()=>{
                                        const isShow = [...replies];
                                        isShow.forEach(e=>{
                                            if(e.id === item.id){
                                                e.showBar = !item.showBar
                                            }else{
                                                e.showBar =false
                                            }
                                        });
                                        this.setState({
                                            replies: isShow
                                        })
                                    }}>回复</Button>,<br/>,
                                    ]}
                                author={item.author.loginname}
                                avatar={item.author.avatar_url}
                                content={<div dangerouslySetInnerHTML={{__html:item.content}}></div>}
                                datetime={`${index+1}楼-${moment(item.create_at).fromNow()}`}
                            />
                            {item.showBar?<Input maxLength={"100%"} suffix={
                                <Button type={"primary"}
                                        onClick={()=>{
                                            const {topicId} = this.props;
                                            const token = localStorage.getItem("token");
                                            const val = `@${item.author.loginname} ${reCommentVal}`;
                                            axios.post(`https://vue-js.com/api/v1/topic/${topicId}/replies`,{accesstoken:token,content:val,reply_id:item.id}).then((res)=>{
                                                this.setState({
                                                    isChange:!this.state.isChange,
                                                    reCommentVal: ''
                                                });
                                                message.success("评论成功！")
                                            }).catch(()=>{
                                                message.error("评论失败！")
                                            })
                                        }}
                                >提交</Button>}
                                                 placeholder={`@${item.author.loginname} `} value={reCommentVal}
                                                 onChange={(e)=>{
                                                     this.setState({reCommentVal: e.target.value})
                                                 }}/>:""}
                        </li>
                    )}
                /> :<Empty description={"暂无评论"}/>}
                {userInfo?
                    <><h3>添加评论</h3>
                        <Editor
                        ref={this.$vm}
                        value={commentVal}
                        language={"zh-CN"}
                        lineNum ={false}
                        toolbar={{
                            h1: true, // h1
                            h2: true, // h2
                            h3: true, // h3
                            h4: true, // h4
                            img: false, // 图片
                            link: true, // 链接
                            code: true, // 代码块
                            preview: true, // 预览
                            expand: true, // 全屏
                            para: true,       // 段落
                            table: true,      // 表格
                            quote: true,      // 引用
                            inlinecode: true,  // 行内代码
                            collapse: true,   // 折叠
                            /* v0.0.9 */
                            undo: false, // 撤销
                            redo: false, // 重做
                            save: false, // 保存
                            /* v0.2.3 */
                            subfield: true, // 单双栏模式
                        }}
                        placeholder = {'请留下你的评论'}
                        style = {{height:"300px"}}
                        onChange={this.handleChange}
                        // addImg={($file) => this.addImg($file)}
                    />
                    <Button htmlType="submit"  onClick={this.clickSub} type="primary">
                    添加评论
                    </Button>
                    </>
                    :<span></span>}
            </div>
        );
    }
    //添加图片函数，因为无法获取oss图片而失败
    // addImg($file) {
    //     this.$vm.current.$img2Url($file.name, 'file_url')
    //     console.log($file)
    // }
    handleChange=(value)=>{
        this.setState({
            commentVal:value
        })
    };
    clickSub =()=>{
        const {topicId} = this.props;
        const {commentVal}=this.state;
        const token = localStorage.getItem("token");
        if(commentVal!==''){
            axios.post(`https://vue-js.com/api/v1/topic/${topicId}/replies`,{accesstoken:token,content:commentVal}).then((res)=>{
                this.setState({
                    isChange:!this.state.isChange,
                    commentVal: ""
                });
                message.success("评论成功！")
            }).catch(()=>{
                message.error("评论失败！")
            })
        }
    };
    clickLike =(replyId)=>{
        const token = localStorage.getItem("token");
        if(token){
            axios.post(`https://vue-js.com/api/v1/reply/${replyId}/ups`,{accesstoken:token}).then(res=>{
               this.setState({
                   isChange:!this.state.isChange,
               })
            })
        }else{
            message.error("请先登录！")
        }
    }

}
export default CommentBox;
