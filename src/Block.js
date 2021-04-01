//import React from "react";
import React, { Component } from "react";
import "./block.css";

class Block extends Component {
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
              <small>Miner </small>
              {this.props.miner}
            </h4>
            <h4 class="block-txs">
              {this.props.nTxs}
              <small> txs in 5 secs</small>
              {this.props.to}
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
