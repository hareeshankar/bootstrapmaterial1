import React from "react";
import PropTypes from "prop-types";
import Events from "./Events.js";
import { Link } from "react-router-dom";

class Home extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.logout();
  };

  render() {
    return (
        <Events />
    );
  }
}

export default withContext(Home);
