import React, { Component } from "react";
import { logout } from "../../../services/auth";

export default class Logout extends Component {
  componentDidMount() {
    logout();
    window.location.href = "/login";
  }
  render() {
    return <div></div>;
  }
}
