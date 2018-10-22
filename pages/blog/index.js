import React from "react";
import BasicLayout from "../../layout/BasicLayout";

// mock数据
const data = {
  pagination: {
    page: 1,
    pageNum: 28
  },
  list: [
    {
      STATUS: "online",
      article_id: 190,
      create_time: "2018-10-20T16:20:00.000Z",
      descript:
        "看到一篇文章里面有这个知识点，刚才看了下感觉有点东西，记录下，顺便将文章的链接保存哈，后面复习可以在看下",
      read_num: 17,
      title: "为什么react类组件中需要为事件处理函数绑定this？",
      update_time: "2018-10-21T12:32:00.000Z"
    },
    {
      STATUS: "online",
      article_id: 190,
      create_time: "2018-10-20T16:20:00.000Z",
      descript:
        "看到一篇文章里面有这个知识点，刚才看了下感觉有点东西，记录下，顺便将文章的链接保存哈，后面复习可以在看下",
      read_num: 17,
      title: "为什么react类组件中需要为事件处理函数绑定this？",
      update_time: "2018-10-21T12:32:00.000Z"
    }
  ]
};
export default class BlogPage extends React.Component {
  render() {
    return (
      <>
        <BasicLayout title="博客" data={data}/>
      </>
    );
  }
}
