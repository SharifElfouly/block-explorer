//import React from "react";
import React, { Component } from "react";
import question from "../svgs/question.svg";
import ok from "../svgs/checkOk.svg";
import "../styles/txdetails.css";

import { BsFillExclamationOctagonFill as FailedIcon } from "react-icons/bs";

class TXDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tx: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/tx/" + this.props.match.params.hash)
      .then((response) => response.json())
      .then((tx) => {
        this.setState({ tx: tx });
      });
  }

  render() {
    var isSigned = this.state.tx.signed;
    isSigned = false;
    return (
      <div class="main">
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="label">Transactions Hash:</h5>
        </div>
        <div class="hash">{this.state.tx.hash}</div>
        <div class="hl"></div>
        <div class="txd-row status-row">
          <img class="question" src={question} />
          <h5 class="label">Signed:</h5>
          {isSigned ? (
            <div class="bd-isSigned-true">
              <img class="ok" src={ok} />
              <div class="status">Yes</div>
            </div>
          ) : (
            <div class="bd-isSigned-false">
              <FailedIcon
                class="bd-isSigned-false-icon"
                style={{ color: "rgb(255, 71, 26)", size: "50px" }}
              />
              <div class="bd-isSigned-false-label">No</div>
            </div>
          )}
        </div>
        <div class="hl"></div>
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="label">Number:</h5>
        </div>
        <h5 class="block-number">122234</h5>
        <div class="hl"></div>
        <div class="txd-row time-row">
          <img class="question" src={question} />
          <h5 class="label">Timestamp:</h5>
        </div>
        <div class="time">{this.state.tx.time}</div>
        <div class="hl"></div>
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="label">From:</h5>
        </div>
        <div class="from">{this.state.tx.fr}</div>
        <div class="hl"></div>
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="label">To:</h5>
        </div>
        <div class="from">{this.state.tx.to}</div>

        <div class="hl"></div>
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="value">Value:</h5>
        </div>
        <div class="from">{this.state.tx.value} ether</div>
      </div>
    );
  }
}

export default TXDetails;
