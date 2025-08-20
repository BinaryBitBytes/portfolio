import React from "react";
import { default as ReactRevealText } from "react-reveal-text/lib/ReactRevealText.js";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2200);
  }

  render() {
    return (
      <div
        style={{
          fontFamily: "fantasy",
          border: "5px double indigo",
          padding: "38 px",
          textAlign: "center",
          color: "tomato",
          fontSize: "32px",
          lineHeight: "36px",
        }}
      >
        <h1>
          <ReactRevealText show={this.state.show}>Miles Colòn</ReactRevealText>
        </h1>
      </div>
    );
  }
}
export default Name;
