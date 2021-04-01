import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./App.css";
import TX from "./TX";
import Block from "./Block";

const tx = {
  volume: 10.0,
  fees: 0.19,
  sz: 4486,
  root: "0xad95cf8d71a66d372dc5521c5464931021cca8581d334455fea17260dc6e7cd5",
  hash: "0x46283ad39b1462361afab2620500961f0345cc4aec901b54025000995ec945a4",
  prev_hash:
    "0x437cc1ac6da6f1cc24ff8ff0ff6a90c098d87854a3feb45f4dadb9416b6f5e9f",
  number: 2,
  n_txs: 4,
  mined: false,
  time: 1617202879.796135,
  txs: [
    "0x62eb4385598dd21e451c1acf53d27937ea566fc0cf7ef04630be2176264a9c8f",
    "0xa07e5974255cdf0fa608b5ffc5b5a89d048407351a97af7ec8b4c78ed1755227",
    "0x8e1b03f81df3502e395537d26684b125b097ac6fb79378ccd8c47af785119723",
    "0xbbc021a56fcff766f6e4543c0beb09fb734d18a7618b69252170920d094fefb8",
  ],
};

const HASH_LENGTH = 18;

class App extends Component {
  render() {
    return (
      <div>
        <div class="topp"></div>
        <TX
          hash={tx.hash.substring(0, HASH_LENGTH)}
          fr={tx.hash.substring(0, HASH_LENGTH)}
          to={tx.hash.substring(0, HASH_LENGTH)}
          value={300}
        />
        <Block
          number={tx.number}
          miner={tx.root.substr(0, HASH_LENGTH)}
          nTxs={tx.number}
          volume={tx.sz}
        />
      </div>
    );
  }
}

export default App;
