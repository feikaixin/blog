import React, { Component } from "react";
import Head from "../../components/Head";
import Icon from "../../components/Icon";
import Dividing from "../../components/resume/DividingLine";
import Item from "../../components/resume/Item";
import Descript from "../../components/resume/Descript";
const Style = () => (
  <>
    <style jsx="true" global>{`
      body {
        background-color: rgb(238, 238, 238);
      }
    `}</style>
    <style jsx="true">{`
      @media print {
      }
      @media screen and (max-width: 1024px) {
        div.wraper {
          border-radius: 0px;
          margin: 0;
          width: 100%;
        }
      }
      div.wraper {
        width: 1024px;
        margin: 30px auto 30px;
        box-sizing: border-box;
        color: #333;
        font-family: "PingFang SC", "Hiragino Sans GB", "Heiti SC",
          "Microsoft YaHei", "WenQuanYi Micro Hei";
      }
      div.resume {
        max-width: 1024px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0px 0px 15px rgb(208, 208, 208);
      }
      h1 {
        font-weight: normal;
        color: #fff;
        font-size: 50px;
        position: relative;
      }
      h1 small {
        font-size: 23px;
      }
      header {
        background-color: rgb(0, 179, 138);
        overflow: hidden;
        padding: 40px 55px;
        box-sizing: border-box;
      }
      .left {
        float: left;
      }
      .right {
        float: right;
      }
      .clear {
        overflow: hidden;
      }
      .job {
        font-size: 22px;
        position: absolute;
        right: 0;
        bottom: 0;
      }

      .base-info {
        padding-bottom: 15px;
      }
      .more-info {
        border-top: 2px solid #00a982;
        padding-top: 15px;
      }
      .body {
        padding: 70px 20px 60px;
      }
      .body .item {
        display: inline-block;
        width: 50%;
      }
      ul li {
        text-align: right;
        color: #fff;
        line-height: 1.5;
        font-size: 14px;
        transition: color 0.3s ease;
        font-family: Arial, "Microsoft YaHei";
      }
      ul li span {
        font-size: 13px;
        line-height: 100%;
        margin-left: 3px;
      }
      .tech li {
        text-align: left;
        font-size: 17px;
        line-height: 1.68;
      }
      .influence li:hover {
        color: rgb(218, 218, 218);
        cursor: pointer;
      }
      .influence span {
        width: 13px;
        line-height: 1;
        display: inline-block;
        vertical-align: -3%;
      }
      .influence li a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>
  </>
);
export default class Resume extends Component {
  render() {
    return (
      <div className="wraper">
        <Head title="简历" />
        <div className="resume">
          <header>
            <div className="clear base-info">
              <div className="block-item">
                <p className="base">
                  <h1>
                    费凯鑫 <small>KaiXin</small>
                    <span className="job">web前端开发工程师</span>
                  </h1>
                </p>
              </div>
            </div>
            <div className="clear more-info">
              <ul className="left tech">
                <li>男 / 1998.01</li>
                <li>绩点：2.80 / 4.00</li>
                <li>重庆邮电大学 | 软件工程学院 | 本科 | 2020年毕业</li>
              </ul>
              <ul className="right influence">
                <li>
                  <a href="tel:15123356019">
                    15123356019{" "}
                    <span>
                      <Icon icon="phone" />{" "}
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://feikaixin.com/">
                    feikaixin.xin
                    <span>
                      <Icon icon="home" />{" "}
                    </span>
                  </a>
                </li>

                <li>
                  <a href="https://github.com/feikaixin">
                    github.com/feikaixin
                    <span>
                      <Icon icon={["fab", "github"]} />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:954630886@qq.com">
                    954630886@qq.com
                    <span>
                      <Icon icon="envelope" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div className="body clear">
            <div className="item left">
              <section>
                <Dividing title="实践经历">
                  <Item time="2017.05 ~ 至今" tag="创业团队">
                    勤奋峰 · 前端组
                  </Item>
                  <Descript>
                    <span>团队介绍</span>
                    勤奋蜂团队是一个互联网初创团队，涵盖产品、运营、前端、后台、移动、设计等部门。团队拥有校园说、校招导师、零食峰等多个产品，先后参与比赛并获得多个国家级奖项。其中，校招导师产品运营的工作号超过
                    <span>15k</span>
                    的用户,日平均浏览量达
                    <span>1K</span>
                  </Descript>
                  <Descript>
                    <span>前端组主要成员</span>
                    负责团队项目的开发，维护及其
                    <span>性能优化</span>
                    ,同时参与了团队的建设、日常技术分享和codeReview。期间积攒了各类项目开发经验和
                    <span>团队、部门合作经验</span>
                  </Descript>
                </Dividing>
              </section>
              <section>
                <Dividing title="专业技能">
                  <Descript isItem>
                    掌握web开发基本技能，熟悉
                    <span>W3c标准</span>、<span>页面架构布局</span>、
                    <span>前端语义化</span>
                    ，懂些
                    <span>审美</span>
                    、重视
                    <span>用户体验</span>及<span>代码可维护性</span>
                    ，有近两年的前端开发经验
                  </Descript>
                  <Descript isItem>
                    对现代的框架
                    <span>React及其相关技术栈</span>、<span>Next</span>、
                    <span>Ant Desgin</span>
                    等有着较熟的实践和较深的感悟
                  </Descript>
                  <Descript isItem>
                    有<span>全栈开发</span>
                    项目经验，熟练使用使用
                    <span>Koa</span>、<span>Egg</span>
                    开发web项目，了解常见的后端逻辑，能够和后端高效的定位问题、进行合作开发。
                  </Descript>
                  <Descript isItem>
                    对<span>数据库</span>、<span>数据结构</span>、
                    <span>性能优化</span>、<span>前端工程化</span>、
                    <span>es6</span>、<span>Nodejs</span>
                    等有一定的了解和思考
                  </Descript>
                  <Descript isItem>
                    熟练使用Git进行
                    <span>版本控制</span>、<span>团队合作</span>
                    ，了解
                    <span>Linux</span>、<span>Nginx</span>
                    等环境部署，了解项目开发流程及其开发调试工具的使用。
                  </Descript>
                </Dividing>
              </section>
              <section>
                <Dividing title="奖项证书">
                  <Item time="2016.09" tag="校级">
                    优秀新生奖学金
                  </Item>
                  <Item time="2017.09" tag="校级">
                    二等奖学金
                  </Item>
                  <Item time="2018.09" tag="校级">
                    三等奖学金
                  </Item>
                </Dividing>
              </section>
            </div>
            <div className="right item">
              <section>
                <Dividing title="项目经验">
                  <Item time="2018.08" tag="Link">
                    水上团建项目 · 小程序
                  </Item>
                  <Descript>
                    <span>一期开发</span>
                    <span>页面重构</span>
                    采用原生语法对小程序进行一期开发
                    <span>逻辑层</span>
                    采用组件化开发。此外,用
                    <span>ant-design-pro</span>
                    相关技术对管理端进行一期开发。 主要负责前后端登录和用户管理
                  </Descript>
                  <Item time="2017.12" tag="Link">
                    ABO微信 · 微信H5
                  </Item>
                  <Descript>
                    <span>项目配置</span>、<span>项目负责</span>
                    使用webpack配置项目，使用Ejs、Zeptojs、Sass等实现组件化,并且将整个项目初始配置封装成
                    <span>kaixin-cli</span>
                    脚手架工具,方便后续开发H5项目
                  </Descript>
                  <Item time="2018.02" tag="Link">
                    搭建系统 · 搭建生态
                  </Item>
                  <Descript>
                    <span>成长系统</span>、<span>后端支持</span>
                    大四学长带着做的一套
                    <span>模块化搭建平台</span>
                    系统，实现活动页的
                    <span>可视化</span>
                    操作、预览、发布、修改页面的功能，前期主要使用
                    <span>Egg</span>
                    负责搭建系统核心生态后端的构建和
                    <span>管理端</span>
                    的开发，弄懂整套系统的设计，后期作为系统的
                    <span>负责人</span>
                    ，提出想法，并牵头进行开发，搭建并且维护线上
                    <span>Linux服务器环境</span>
                  </Descript>
                </Dividing>
              </section>
              <section>
                <Dividing title="个人作品">
                  <Item time="2018.09 ~ 至今" tag="Link">
                    个人站点建设
                  </Item>
                  <Descript>
                    <span>全栈开发</span>、<span>个人站点</span>、
                    <span>开源作品</span>
                    个人站点的建设，主要包括
                    <span>博客</span>、<span>简历</span>、<span>介绍</span>
                    等几个主要模块，前端使用
                    <span>Nextjs</span>
                    进行
                    <span>同构处理</span>
                    ，后端使用
                    <span>Koa</span>和<span>mysql</span>
                    技术栈提供后台服务，管理端使用antd-desgin进行搭建，并进行部署上线，使用
                    <span>nginx</span>和<span>node</span>
                    部署，
                    <span>按需加载</span>、<span>预加载</span>
                    等降低首屏渲染时间，为用户提供快速的响应，和优秀的网站体验，并将项目的项目的几个功能点抽离出来上传到npm进行开源，此站点也是自己尝试新技术提升网站性能的实验站点。
                  </Descript>
                </Dividing>
              </section>
            </div>
          </div>
        </div>
        <Style />
      </div>
    );
  }
}
