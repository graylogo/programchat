import React from "react"
import {Empty} from "antd";
class HotTopic extends React.Component{
    state ={};

    render() {
        return (
            <div className = "HotTopic" style={{minHeight:"80vh"}}>
               <Empty description={"不好意思，后端还没开发"}/>
            </div>
        );
    }
}
export default HotTopic;
