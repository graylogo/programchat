import React from "react"
import {Comment, Tooltip, List, Empty,Form,Button,Input} from 'antd';
import axios from "axios";
import moment from "moment";
import { LikeOutlined, LikeFilled } from '@ant-design/icons';
const {TextArea}=Input;
class CommentBox extends React.Component{
    state ={
        replies:null,
        isLike:"up",
        commentVal:""
    };

    componentDidMount() {
        this.setState({
            replies:this.props.replies
        })
    }


    render() {
        const {replies,isLike,commentVal} = this.state;
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
                                    <span key="comment-basic-like" onClick={this.clickLike}>
                                        {item.ups.length}
                                        {isLike==="up"?<LikeFilled/>: <LikeOutlined/>}

                                    </span>]}
                                author={item.author.loginname}
                                avatar={item.author.avatar_url}
                                content={<div dangerouslySetInnerHTML={{__html:item.content}}></div>}
                                datetime={`${index+1}楼-${moment(item.create_at).fromNow()}`}

                            />
                        </li>
                    )}
                /> :<Empty description={"暂无评论"}/>}
                <Comment
                    // avatar={
                    //     <avatar src={} alt={}/>
                    // }
                    content={
                        <div>
                            <Form.Item>
                                <TextArea rows={4} onChange={this.handleChange} value={commentVal} />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit"  onClick={this.clickSub} type="primary">
                                    添加评论
                                </Button>
                            </Form.Item>
                        </div>
                    }
                />
            </div>
        );
    }
    handleChange=(event)=>{
        this.setState({
            commentVal:event.target.value
        })
    };
    clickSub =()=>{
        const {commentVal}=this.state;
        console.log(commentVal)
    };
    clickLike =()=>{
        this.setState({
            isLike:"down"
        })
    }

}
export default CommentBox;
