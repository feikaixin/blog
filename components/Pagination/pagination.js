/*
 * @Author: FeiKaiXin 
 * @Date: 2018-10-16 16:42:08 
 * @Last Modified by: FeiKaiXin
 * @Last Modified time: 2018-10-16 17:03:55
 */

import React from "react";
import WithLink from "../withLink";

/**
 * @class Pagination
 * @extends Component
 * @param pagination {page,pagNum}
 * @param domain 实际跳转地址
 * @param paramName 跳转上会将页码赋值给此参数的值，并与paramData进行拼合
 * @param paramData 跳转时候带上的参数
 * @param isAS 开启跳转到跳转地址到实际网站的转化
 * @param asDomain 浏览器中显示的实际网址
 * @param onPageChange 点击跳转触发的函数
 */
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  createPage = ({text, value=1, isDisabled=false, name='', toValue=value}) => ({
    text, // 显示的值
    toValue, // 跳转的值
    isDisabled, // 是否禁止点击
    name, // 
  })

  renderLi = () => {
    const { paramData, pagination } = this.props;
    let currentIndex = pagination ? parseInt(pagination.page) : 1;
    let pageSum = Math.ceil((pagination ? parseInt(pagination.pageSum) : 1)/10);
    let nextMax = currentIndex + 2;
    let lastMin = currentIndex - 2;
    // 生成页码对象
    const page = this.createPage;
    let lis = [];

  };

  render() {
    return (
      <div>
        <ul>{this.renderLi()}</ul>
        <style jsx="true">{``}</style>
      </div>
    );
  }
}
