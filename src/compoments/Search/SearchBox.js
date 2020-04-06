import React from "react"
import "./search.css"
import { Input } from 'antd';
const { Search } = Input;
//搜索框
class SearchBox extends React.Component{
    state ={};

    render() {
        return (
            <div className = "searchBox">
                <Search
                    placeholder="在这里搜索"
                    enterButton="搜索"
                    size="middle"
                    style={{ width: 300 }}
                    onSearch={value => console.log(value)}
                />
            </div>
        );
    }
}
export default SearchBox;
