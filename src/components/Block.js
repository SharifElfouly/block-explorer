//import React from "react";
import React, { Component } from "react";
import "../styles/block.css";
import { Link } from "react-router-dom";

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [],
      miner: "0x0",
    };
  }
  render() {
    return (
      <div>
        <div class="row">
          <div class="block">
            <div class="block-text">BK</div>
          </div>
          <div class="col-bk-1">
            <h4 class="block-number">
              <a>{this.props.number}</a>
            </h4>
            <h4 class="block-time">2 min ago</h4>
          </div>
          <div class="col-bk-2">
            <h4 class="block-miner">
              <small>Hash </small>
              <Link to={"/blocks/" + this.props.hash} class="block-hash">
                {String(this.props.hash).substring(0, 14) + "..."}
              </Link>
            </h4>
            <h4 class="block-txs">
              {this.props.nTxs}
              <small> txs</small>
            </h4>
          </div>
          <div class="block-volume">
            {this.props.volume} ether
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Block;
