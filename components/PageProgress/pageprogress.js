import React from "react";

export default class Pageprogress extends React.Component {
  constructor(props) {
    super(props);
    this.progressBar = React.createRef();
    this.state = {
      barWidth: 0
    };
  }

  reCalcBarW = async () => {
    const progressBar = this.progressBar.current;
    const { innerHeight } = window; // 窗口高度
    const { offsetHeight, clientWidth } = document.body; // 窗口高度和窗口宽度
    let totalHeight = offsetHeight - innerHeight; // 参与计算的总高度
    const barWidth = (clientWidth * window.scrollY) / totalHeight;
    progressBar.style.width = barWidth + "px";
  };
  componentDidMount() {
    this.reCalcBarW();

    const progressBar = this.progressBar.current;
    const { color } = this.props;
    const COLOR = color || "#0099ff";
    progressBar.style.cssText +=
      `;position:fixed;top:0;left:0;height:2px;background:${COLOR};z-index:10002;transition:all .2s`;
    /**
     * 滚动时实时显示进度
     */
    window.addEventListener("scroll", this.reCalcBarW);
    /**
     * 页面大小变化重新计算
     */
    window.addEventListener('resize',this.reCalcBarW);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.reCalcBarW);
    window.removeEventListener('resize',this.reCalcBarW);
  }

  render() {
    return <div ref={this.progressBar} />;
  }
}
