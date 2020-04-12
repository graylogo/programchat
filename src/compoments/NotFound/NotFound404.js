import React from "react";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";
const NotFound404 =(props)=>{
    return(
        <div className = "notFound404">
            <Result
                status="404"
                title="404"
                subTitle="抱歉，该页面不存在！(＞﹏＜)"
                extra={<Link to="/"><Button type="primary">返回首页</Button></Link>}
            />
        </div>
    )
};
export default NotFound404;
