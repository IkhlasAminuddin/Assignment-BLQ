import React from "react";
import { Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default class NotFound extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    localStorage.setItem("akses", "");
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
          <Icon.ExclamationTriangleFill
            style={{
              color: "red",
            }}
            width={400}
            height={400}
          />
          <br></br>
          <h1>404 Error. Check the url path!</h1>
      </div>
    );
  }
}
