import React from "react";
import App, { Container } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faGhost,
  faHeart,
  faPhone,
  faHome,
  faEnvelope,
  faIdCard,
  faCopyright,
  faImage,
  faStickyNote
} from "@fortawesome/free-solid-svg-icons";
// 监听router的变化，进度加载条
Router.events.on("routeChangeStart", url => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// 页面初始化引入图标
library.add(fab, faGhost, faHeart, faPhone, faHome, faEnvelope, faIdCard, faCopyright, faImage, faStickyNote);

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}