import React from "react"
import Mysider from "../MySider/Mysider";
import MySlider from "../MySlider/MySlider";
import MyList from "../MyList/MyList";
import Recommand from "../Recommand/Recommend";
import {Layout} from "antd";
import Topic from "../Topic/Topic";
const {Content} = Layout;
class MainContent extends React.Component{
    state ={};

    render() {
        const isTopic = this.props.match.url.includes('topic');
        return (
            <div className = "mainContent">
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Mysider/>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {isTopic?<Topic topicId={this.props.match.params.id}/>:<div>
                            <MySlider/>
                            <MyList/>
                        </div>}
                    </Content>
                    <Recommand/>
                </Layout>
            </div>
        );
    }
}
export default MainContent;
