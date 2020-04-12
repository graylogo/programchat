import React from "react";
import {Empty} from "antd";
const Followed =(props)=>{
    return(
        <div className = "followed" style={{minHeight:"80vh"}}>
                <Empty description={"不好意思，后端还没开发接口"}/>
        </div>
    )
};
export default Followed;
