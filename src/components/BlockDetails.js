//import React from "react";
import React, { Component } from "react";
import question from "../svgs/question.svg";
import "../styles/blockdetails.css";

class BlockDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/block/" + this.props.match.params.hash)
      .then((response) => response.json())
      .then((block) => {
        this.setState({ block: block });
      });
  }
  render() {
    console.log(this.state.block);
    return (
      <div class="bd">
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Block Height:</div>
          </div>
          <div class="bd-row-content" id="bd-row-content-height">
            {this.state.block.number}
          </div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Timestamp:</div>
          </div>
          <div class="bd-row-content">{this.state.block.time} </div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Transactions:</div>
          </div>
          <div class="bd-row-content">
            {this.state.block.n_txs} transactions
          </div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Mined by:</div>
          </div>
          <div class="bd-row-content" id="bd-row-content-hash">
            false
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
          <div class="bd-row-content">{this.state.block.sz} Bytes</div>
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
            {this.state.block.hash}
          </div>
        </div>
        <div class="bd-row-divider"></div>
        <div class="bd-row">
          <div class="bd-row-title">
            <img class="bd-row-title-question" src={question} />
            <div class="bd-row-title-label">Tx Root:</div>
          </div>
          <div class="bd-row-content" id="bd-row-content-hash">
            {this.state.block.root}
          </div>
        </div>
      </div>
    );
  }
}

export default BlockDetails;
