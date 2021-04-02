//import React from "react";
import React, { Component } from "react";
import question from "../svgs/question.svg";
import "../styles/blockdetails.css";

class BlockDetails extends Component {
  render() {
    return (
      <div class="bd">
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Block Height:</div>
          </div>
          <div class="bd-row-content" id="bd-row-content-height">
            12159608
          </div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Timestamp:</div>
          </div>
          <div class="bd-row-content">
            1 min ago (Apr-02-2021 10:45:11 AM +UTC){" "}
          </div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Transactions:</div>
          </div>
          <div class="bd-row-content">348 transactions</div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Mined by:</div>
          </div>
          <div class="bd-row-content" id="bd-row-content-hash">
            0xea674fdde714fd979de3edf0f56aa9716b898ec8
          </div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Block Reward:</div>
          </div>
          <div class="bd-row-content">3.92947386687227019 Ether</div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Size:</div>
          </div>
          <div class="bd-row-content">501234 Bytes</div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Difficulty:</div>
          </div>
          <div class="bd-row-content" id="bd-row-content-hash">
            2
          </div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Hash:</div>
          </div>
          <div class="bd-row-content" id="bd-row-content-hash">
            0xea674fdde714fd979de3edf0f56aa9716b898ec8
          </div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Tx Root:</div>
          </div>
          <div class="bd-row-content" id="bd-row-content-hash">
            0xea674fdde714fd979de3edf0f56aa9716b898ec8
          </div>
        </div>
      </div>
    );
  }
}

export default BlockDetails;
