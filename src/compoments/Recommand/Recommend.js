import React from "react"
import { Card} from 'antd';
class Recommand extends React.Component{
    state ={};

    render() {
        return (
            <div className = "recommand">
                <Card title="今日推荐" style={{ width: 200 ,backgroundColor:"#ECECEC"}}>
                    <p>推荐阅读1</p>
                    <p>推荐阅读2</p>
                    <p>推荐阅读3</p>
                    <p>推荐阅读2</p>
                    <p>推荐阅读3</p>
                    <p>推荐阅读2</p>
                    <p>推荐阅读3</p>
                    <p>推荐阅读2</p>
                    <p>推荐阅读3</p>

                </Card>
            </div>
        );
    }
}
export default Recommand;
