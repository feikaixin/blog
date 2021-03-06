/*
 * @Author: FeiKaiXin
 * @Date: 2018-10-16 13:30:04
 * @Last Modified by: 费凯鑫
 * @Last Modified time: 2019-02-20 11:00:42
 */

import React from "react";
import Icon from "../Icon";
const Style = () => (
  <style jsx="true">{`
    .search {
      width: 70%;
      height: 70px;
      line-height: 70px;
      margin: 0 auto;
      text-align: center;
      font-size: 16px;
    }
    .search input {
      width: 90%;
      padding-left: 8px;
      margin-left: 10px;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      transition: all 0.3s;
    }
    .search input:focus {
      border-bottom: 1px solid #666;
    }
  `}</style>
);
export default class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  // 防抖还没做
  handleChange = e => {
    const { onChange } = this.props;
    const value = e.target.value;
    this.setState({
      value
    });
    onChange && onChange(value);
  }

  handleKeydown = e => {
    const { onKeyDown } = this.props;
    const { value } = this.state;
    onKeyDown && onKeyDown(value, e);
  }
  render() {
    const { value } = this.state;
    return (
      <div className="search">
        <Icon icon="search" />
        <input
          type="text"
          name="search"
          placeholder="搜索..."
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeydown}
        />
        <Style />
      </div>
    );
  }
}
