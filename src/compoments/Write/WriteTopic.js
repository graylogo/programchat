import React from "react"
import {Button, Input, message, Select} from 'antd';
import Editor from "for-editor-herb";
import axios from "axios";
import {withRouter} from 'react-router-dom'

const { Option, OptGroup } = Select;
class WriteTopic extends React.Component{
    state ={
        selectVal:'share',
        writeVal:"",
        titleVal:""
    };

    render() {
        const {selectVal,writeVal,titleVal} = this.state;
        return (
            <div className = "writeTopic">
                <Select  value={selectVal} style={{ width: 200 }} onChange={e=>this.handleChange("selectVal",e)}>
                    <OptGroup label="前端">
                        {/*<Option value="weex">weex</Option>*/}
                        <Option value="share">分享</Option>
                        <Option value="ask">问答</Option>
                        <Option value="job">招聘</Option>
                    </OptGroup>
                    <OptGroup label="后端">
                        {/*<Option value="job">暂时不要选择这个</Option>*/}
                    </OptGroup>
                </Select>
                <Button type="primary" style={{float:"right"}} onClick={this.clickPush}>发布</Button>
                <Input placeholder ="标题字数10字以上" value={titleVal} onChange={e=>this.handleChange("titleVal",e.target.value)} />
                <Editor
                    ref={this.$vm}
                    value={writeVal}
                    language={"zh-CN"}
                    lineNum ={false}
                    toolbar={{
                        h1: true, // h1
                        h2: true, // h2
                        h3: true, // h3
                        h4: true, // h4
                        img: false, // 图片
                        link: true, // 链接
                        code: true, // 代码块
                        preview: true, // 预览
                        expand: true, // 全屏
                        para: true,       // 段落
                        table: true,      // 表格
                        quote: true,      // 引用
                        inlinecode: true,  // 行内代码
                        collapse: true,   // 折叠
                        /* v0.0.9 */
                        undo: false, // 撤销
                        redo: false, // 重做
                        save: false, // 保存
                        /* v0.2.3 */
                        subfield: true, // 单双栏模式
                    }}
                    placeholder = {'文章的内容'}
                    style = {{height:"600px"}}
                    onChange={(e)=>this.handleChange("writeVal",e)}
                    // addImg={($file) => this.addImg($file)}
                />
            </div>
        );
    }
    handleChange =(type,value)=>{
        this.setState({
            [type]: value
        });
    };
    clickPush =()=>{
        const {selectVal,writeVal,titleVal} = this.state;
        const token = localStorage.getItem("token");
        if(titleVal.length<10){
            message.error("标题字数小于10")
        }else if(writeVal.length<20){
            message.info("文章内容太少，再多加点吧！")
        }else{
            axios.post(`https://www.vue-js.com/api/v1/topics/`,{title:titleVal,tab:selectVal,content:writeVal,accesstoken:token}).then(res=>{
                this.props.history.push(`/topic/${res.data.topic_id}`);
                message.success("发布成功！");
            })

        }
    }
}
export default withRouter(WriteTopic);
