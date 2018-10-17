import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default class Icon extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		const { icon,className } = this.props;
		return (
      <FontAwesomeIcon icon={icon} className={className}></FontAwesomeIcon>
		);
	}
}
