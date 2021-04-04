import React, { Component } from "react";
import "../styles/account.css";

export class Account extends Component {
  render() {
    return (
      <div className="acc">
        <div className="acc-pubkey">0x21378127asdf876asd12342</div>
        <div className="acc-balance">Balance: 12 Eth</div>
        <div className="acc-nonce">
          Nonce: <div className="acc-nonce-number">1</div>
        </div>
      </div>
    );
  }
}

export default Account;
