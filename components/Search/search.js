/*
 * @Author: FeiKaiXin 
 * @Date: 2018-10-16 13:30:04 
 * @Last Modified by: FeiKaiXin
 * @Last Modified time: 2018-10-16 13:40:53
 */


import React from "react";
import Icon from "../Icon";

const Style = () => (
  <style jsx="true">{`
    body {
      margin:0;
      padding:0;
    }
    .search {
      width: 70%;
      height: 70px;
      line-height: 70px;
      margin: 0 auto;
      text-align: center;
      font-size: 16px;
    }
    .search input{
      width: 90%;
      padding-left: 8px;
      margin-left: 10px;
      background:none;  
      outline:none; 
      border:0px;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      transition: all .3s;
    }
    .search input:focus{
      border-bottom: 1px solid #666;
    }
  `}</style>
);
export default class Search extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }
  // 防抖还没做
  handleChange = (e) => {
    const { onChange } = this.props;
    const value = e.target.value;
    this.setState({
      value,
    });
    onChange && onChange(value);
  }
  render() {
    const { value } = this.state;
    return (
      <div className="search">
        <Icon icon="search" />
        <input type="text" name="search" placeholder='搜索...' value={value} onChange={this.handleChange}/>
        <Style />
      </div>
    );
  }
}
