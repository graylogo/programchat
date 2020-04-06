import React from "react";
import { Table, Tag } from 'antd';
import {Link} from "react-router-dom";
const columns = [
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        // render: text => <a>{text}</a>,
        render: text => <Link to="#">{text}</Link>,
    },
    {
        title: '时间',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '文章标题',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '分类',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
        {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
        ),
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
        {/*<a style={{ marginRight: 16 }}>通过审核</a>*/}
         <Link to="#">通过审核</Link>
         <Link to="#">删除</Link>
      </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: ' ab8512 ',
        age: "一分钟前",
        address: '推荐一个优秀的语音答题社区',
        tags: ['前端', '面试'],
    },
    {
        key: '2',
        name: ' ab8512 ',
        age: "十分钟前",
        address: 'JS每日一题',
        tags: ['前端', 'JavaScript'],
    },
    {
        key: '3',
        name: '  phonegap100  ',
        age: "一小时前",
        address: '更新TypeScript入门实战教程',
        tags: ['typescript', '前端',"教程"],
    },
    {
        key: '4',
        name: ' ab8512 ',
        age: "一分钟前",
        address: '推荐一个优秀的语音答题社区',
        tags: ['前端'],
    },
    {
        key: '5',
        name: ' ab8512 ',
        age: "一分钟前",
        address: '推荐一个优秀的语音答题社区',
        tags: ['前端', '其他'],
    },
];
const MyTable =(props)=>{
    return(
        <Table columns={columns} dataSource={data} />
    )
};
export default MyTable;
