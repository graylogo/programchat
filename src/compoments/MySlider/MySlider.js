import React from "react";
import {Carousel} from "antd";
import "./myslider.css"
//轮播图模块
const MySlider =(props)=>{
    return(
        <div className = "slider">
            <Carousel autoplay>
                <div>
                    <h3>公告信息栏</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        </div>
    )
};
export default MySlider;
