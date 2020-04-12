import React from "react"
import Mysider from "../MySider/Mysider";
import MySlider from "../MySlider/MySlider";
import MyList from "../MyList/MyList";
import Recommand from "../Recommand/Recommend";
import {Layout} from "antd";
import Topic from "../Topic/Topic";
import UserInfoPage from "../UserInfo/UserInfoPage"
import WriteTopic from "../Write/WriteTopic";
// import LoginButton from "../LoginButton/LoginButton";
const {Content} = Layout;
class MainContent extends React.Component{
    state ={};

    render() {
        const isTopic = this.props.match.url.includes('topic');
        const isUser = this.props.match.url.includes('user');
        const isWrite = this.props.match.url.includes('create');
        return (
            <div className = "mainContent" style={{minWidth:"570px",maxWidth:"70%",margin:"0 auto"}}>
                <Layout className="site-layout-background" style={{ padding: '24px 0'}}>
                    {isWrite?<WriteTopic/>:<>
                        <Mysider/>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            {isTopic?<Topic topicId={this.props.match.params.id}/>:isUser?<UserInfoPage userName={this.props.match.params.id}/>:<div>
                                <MySlider/>
                                <MyList/>
                            </div>}
                        </Content>
                        <Recommand/>
                    </>}
                </Layout>
            </div>
        );
    }
}
export default MainContent;
