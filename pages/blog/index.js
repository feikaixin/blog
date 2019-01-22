import React from "react";
import BasicLayout from "../../layout/BasicLayout";
import request from "../../utils/request";
export default class BlogPage extends React.Component {
  static async getInitialProps({ query }) {
    const { page = 1 } = query;
    const articleList = request("/api/article/list", {
      body: JSON.stringify({
        page
      })
    });
    const [
      {
        data: { pagination, list }
      }
    ] = await Promise.all([articleList]);
    return { pagination, list };
  }
  componentDidMount() {
    let imageArr = Array.prototype.slice.call(
      document.querySelectorAll(".bg_img")
    );
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          // 如果元素可见
          if (entry.isIntersecting) {
            let Image = entry.target;
            Image.src = Image.dataset.src;
            Image.classList.remove(".bg_img");
            lazyImageObserver.unobserve(Image);
          }
        });
      });
      imageArr.forEach(item => {
        lazyImageObserver.observe(item);
      });
    } else {
      this.inViewShow();
      this._throttleFn = this.throttle(this.inViewShow);
      document.addEventListener("scroll", this._throttleFn);
    }
  }
  throttle(fn, delay = 15, mustRun = 30) {
    let t_start = null;
    let timer = null;
    let context = this;
    return function() {
      let t_current = +new Date();
      let args = Array.prototype.slice.call(arguments);
      clearTimeout(timer);
      if (!t_start) {
        t_start = t_current;
      }
      if (t_current - t_start > mustRun) {
        fn.apply(context, args);
        t_start = t_current;
      } else {
        timer = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      }
    };
  }

  inViewShow() {
    const imageArr = Array.prototype.slice.call(
      document.querySelectorAll(".bg_img")
    );
    let len = imageArr.length;
    for (let i = 0; i < len; i++) {
      let currentImage = imageArr[i];
      const rect = currentImage.getBoundingClientRect();
      // 出现在视野的时候加载图片
      if (rect.top < document.documentElement.clientHeight) {
        currentImage.src = currentImage.dataset.src;
        // 移除掉已经显示的
        imageArr.splice(i, 1);
        len--;
        i--;
        if (imageArr.length === 0) {
          // 全部加载完，移除滚动事件监听
          document.removeEventListener("scroll", this._throttleFn);
        }
      }
    }
  }
  render() {
    const data = this.props;
    return (
      <>
        <BasicLayout title="博客" data={data} />
      </>
    );
  }
}
