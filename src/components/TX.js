//import React from "react";
import React, { Component } from "react";
import "../styles/tx.css";

const HASH_LENGTH = 18;

class TX extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="circle">
            <div class="circle-text">TX</div>
          </div>
          <div class="col-1">
            <h4 class="tx-hash">
              <a>{String(this.props.hash).substring(0, HASH_LENGTH)}</a>
            </h4>
            <h4 class="tx-time">2 min ago</h4>
          </div>
          <div class="col-2">
            <h4 class="tx-from">
              <small>FROM </small>
              {String(this.props.fr).substring(0, HASH_LENGTH)}
            </h4>
            <h4 class="tx-to">
              <small>TO </small>
              {String(this.props.to).substring(0, HASH_LENGTH)}
            </h4>
          </div>
          <div class="tx-value">
            {this.props.value} ether
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TX;
