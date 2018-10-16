import React from "react";
import BasicLayout from "../../layout/BasicLayout";
const Style = () => (
  <style jsx="true">{`
    body {
      height: 1000px;
    }
  `}</style>
);
export default class BlogPage extends React.Component {
  render() {
    return (
      <>
        <BasicLayout title="博客" />
        <Style />
      </>
    );
  }
}
