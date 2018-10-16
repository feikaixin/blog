import React from "react";
import Icon from "../Icon";

const Style = () => (
  <style jsx="true">{`
    div.wraper {
      cursor: pointer;
      transition: 300ms all ease;
      position: fixed;
      right: 30px;
      bottom: 30px;
      opacity: 0;
      transition: all .3s;
    }
    div.toTop {
      width: 40px;
      height: 40px;
      background-color: #663300;
      border-radius:50%;
      color: #fff;
      text-align: center;
      line-height: 40px;
      transition: all .3s;
      font-size: 0;
    }
    div.display{
      opacity: 1;
    }
    div.toTop i{
      vertical-align: middle;
      font-size: 14px;
    }
    div.toTop:hover{
      background-color: #ff6633;
    }
  `}</style>
);
export default class ToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display:false
    }
  }
  handleTop = () => {
    let timer = null;
    timer = setInterval(()=>{
      // 获取顶部距离
      const osTop = parseInt(document.documentElement.scrollTop || document.body.scrollTop, 10);
      const ispeed = 4;
      const scrollDistance = Math.floor(-osTop / ispeed);
      const nowDistance = osTop + scrollDistance;
      document.documentElement.scrollTop = document.body.scrollTop = nowDistance;
      // 清除定时器
      if(scrollDistance + scrollDistance === 0) clearInterval(timer)
    },30)
  }

  componentWillMount() {

  }
  
  componentDidMount() {
    const _this = this;
    window.addEventListener('scroll',function(e){
      const osTop = parseInt(document.documentElement.scrollTop || document.body.scrollTop, 10);
      _this.setState((prevState) => {
        const display = osTop === 0 ? false : true;
        return {
          display,
        } 
      });
    })  
  }

  render() {
    const { display } = this.state;
    return (
      <div
        className={display?'wraper display':'wraper'}
        onClick={this.handleTop}
      >
        <div className="toTop">
          <i><Icon icon="chevron-up" /></i>
        </div>
        <Style />
      </div>
    );
  }
}
