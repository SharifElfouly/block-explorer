//import React from "react";
import React, { Component } from "react";
import question from "../svgs/question.svg";
import ok from "../svgs/checkOk.svg";
import "../styles/txdetails.css";

class TXDetails extends Component {
  render() {
    return (
      <div class="main">
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="label">Transactions Hash:</h5>
        </div>
        <div class="hash">0x46283ad39b146236146236146236</div>
        <div class="hl"></div>
        <div class="txd-row status-row">
          <img class="question" src={question} />
          <h5 class="label">Status:</h5>
          <img class="ok" src={ok} />
          <div class="status">Success</div>
        </div>
        <div class="hl"></div>
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="label">Block:</h5>
        </div>
        <h5 class="block-number">122234</h5>
        <div class="hl"></div>
        <div class="txd-row time-row">
          <img class="question" src={question} />
          <h5 class="label">Timestamp:</h5>
        </div>
        <div class="time">1 min ago (Apr-01-2021 08:12:27 PM +UTC)</div>
        <div class="hl"></div>
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="label">From:</h5>
        </div>
        <div class="from">0x115706519648957ae137498991345</div>
        <div class="hl"></div>
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="label">To:</h5>
        </div>
        <div class="from">0x1234007124805619264394639469f</div>

        <div class="hl"></div>
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="value">Value:</h5>
        </div>
        <div class="from">12 Ether</div>

        <div class="hl"></div>
        <div class="txd-row">
          <img class="question" src={question} />
          <h5 class="value">Volume:</h5>
        </div>
        <div class="from">4096 Ether</div>
      </div>
    );
  }
}

export default TXDetails;
