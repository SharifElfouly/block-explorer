import React, { Component } from "react";
import "../styles/app.css";
import TX from "./TX";
import Block from "./Block";
import BlockDetails from "./BlockDetails";
import TXDetails from "./TXDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    blocks: [],
    txs: [],
  };

  /** componentDidMount() {
    this.fetchBlocks();
    this.fetchTxs();
  }*/

  componentDidMount() {
    this.fetchBlocks();
    this.fetchTxs();
    this.binterval = setInterval(() => this.fetchBlocks(), 3000);
    this.tinterval = setInterval(() => this.fetchTxs(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.binterval);
    clearInterval(this.tinterval);
  }

  async fetchBlocks() {
    fetch("http://localhost:5000/blocks")
      .then((response) => response.json())
      .then((block) => {
        this.setState({ blocks: block["blocks"].reverse() });
      });
  }

  async fetchTxs() {
    fetch("http://localhost:5000/txs")
      .then((response) => response.json())
      .then((tx) => {
        this.setState({ txs: tx["transactions"] });
      });
  }

  render() {
    const blockItems = [];
    this.state.blocks.forEach(function (block, index) {
      //console.log(block);
      blockItems.push(
        <Block
          number={block.number}
          hash={block.hash}
          nTxs={block.n_txs}
          volume={block.volume}
        />
      );
    });

    const txItems = [];
    this.state.txs.forEach(function (tx, index) {
      //console.log(tx);
      txItems.push(
        <TX fr={tx.fr} hash={tx.hash} to={tx.to} value={tx.value} />
      );
    });

    return (
      <Router>
        <div class="main-content">
          <Switch>
            <Route path="/" exact>
              <div class="main-lists">
                <div class="block-items">{blockItems}</div>
                <div class="txs-items">{txItems}</div>
              </div>
            </Route>
            <Route path="/block/:hash" component={BlockDetails} />
            <Route path="/tx/:hash" component={TXDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
