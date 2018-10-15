import React from "react";

const Style = () => (
	<style jsx="true">{`
    .nav {
      width: 100vw;
      height: 10vh;
      background: red;
    }
  `}</style>
);
export default class Nav extends React.Component {
	render() {
		return (
      <>
        <div className="nav">导航</div>
        <Style />
      </>
		);
	}
}
