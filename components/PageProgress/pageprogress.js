import React from "react";

export default class Pageprogress extends React.Component {
  constructor(props) {
    super(props);
    this.progressBar = React.createRef();
    this.state = {
      barWidth: 0
    };
  }

  reCalcBarW = () => {
    const progressBar = this.progressBar.current;
    const { innerHeight } = window; // 窗口高度
    const { offsetHeight, clientWidth } = document.body; // 窗口高度和窗口宽度
    let { barWidth } = this.state;
    let totalHeight = offsetHeight - innerHeight; // 参与计算的总高度
    this.setState({
      barWidth: (clientWidth * window.scrollY) / totalHeight
    });
    progressBar.style.width = barWidth + "px";
  };
  componentDidMount() {
    this.reCalcBarW();
    const _this = this;
    const progressBar = this.progressBar.current;
    const { color } = this.props;
    const START_COLOR = color || "#0099ff", //渐变背景颜色的起始颜色
      END_COLOR = color || "#0099ff"; //终点颜色
    progressBar.style.cssText +=
      ";position:fixed;top:0;left:0;height:2px;background:linear-gradient(to right, " +
      START_COLOR +
      ", " +
      END_COLOR +
      ");z-index:10002;";
    /**
     * 滚动时实时显示进度
     */
    window.addEventListener("scroll", function(e) {
      _this.reCalcBarW();
    });
    /**
     * 页面大小变化重新计算
     */
    window.addEventListener('resize',function(e){
      _this.reCalcBarW();
    })
    /**
     * 监听页面刷新重新计算
     */
  }
  render() {
    return <div ref={this.progressBar} />;
  }
}
