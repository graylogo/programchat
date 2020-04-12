import React from "react";
import {Carousel} from "antd";
import "./myslider.css"
//轮播图模块
const MySlider =(props)=>{
    return(
        <div className = "slider">
            <Carousel autoplay>
                <div>
                    <img src="http://gray.oss-cn-beijing.aliyuncs.com/2020-04-12%2F4.png" alt="a" style={{width:"100%"}}/>
                </div>
                <div>
                    <img src="http://gray.oss-cn-beijing.aliyuncs.com/2020-04-12%2F1.png" alt="a" style={{width:"100%"}}/>
                </div>
                <div>
                    <img src="http://gray.oss-cn-beijing.aliyuncs.com/2020-04-12%2F3.png" alt="a" style={{width:"100%"}}/>
                </div>
            </Carousel>
        </div>
    )
};
export default MySlider;
