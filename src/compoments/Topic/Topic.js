import React from "react"
import axios from "axios"
import "./topic.css"
import {Button, Skeleton} from "antd";
import moment from "moment";
import CommentBox from "../Comment/CommentBox";
import {withRouter} from "react-router-dom";
class Topic extends React.Component {
    state = {
        text: null,
        isCollect: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {topicId} = this.props;
        if(prevProps.topicId!==this.props.match.params.id){
            axios.get(`https://www.vue-js.com/api/v1/topic/${topicId}`).then(res => {
                this.setState({
                    text: res.data.data
                });
            })
        }
    }

    componentDidMount() {
        const {topicId} = this.props;
        axios.get(`https://www.vue-js.com/api/v1/topic/${topicId}`).then(res => {
            this.setState({
                text: res.data.data
            });
            //直接执行的话相当于收藏了
            // this.toCollect();
        })
    }

    render() {
        const {topicId} = this.props;
        const {text, isCollect} = this.state;
        return (
            text ? (
                <div className="topic">
                    <div className="topic_header">
                        <span className="topic_title">{text.title}</span>
                        <Button type={isCollect ? "default" : "primary"}
                                onClick={this.toCollect}>{isCollect ? "取消收藏" : "加入收藏"}</Button>
                        <div className="topic_info">
                            <span>{`发布于${moment(text.create_at).fromNow()}`}</span>
                            <span>{`作者${text.tab}`}</span>
                            <span>{`${text.visit_count}次浏览`}</span>
                            <span>{`来自 ${text.tab}`}</span>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: text.content}}/>
                    <CommentBox replies={text.replies} topicId={topicId}/>
                </div>

            ) : <Skeleton active/>
        );
    }

    toCollect = () => {
        const {text, isCollect} = this.state;
        const token = localStorage.getItem("token");
        if(isCollect){
            axios.post("https://vue-js.com/api/v1/topic/de_collect",{accesstoken:token,topic_id:text.id}).then((res)=>{
                this.setState({
                    isCollect: !res.data.success
                })
            })
        }else{
            axios.post("https://vue-js.com/api/v1/topic/collect",{accesstoken:token,topic_id:text.id}).then((res)=>{
                this.setState({
                    isCollect: res.data.success
                })
            })
        }
    }
}
export default withRouter(Topic);
