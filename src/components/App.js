import React, { Component } from "react";
import "../styles/app.css";
import Block from "./Block";
import BlockDetails from "./BlockDetails";
import TXDetails from "./TXDetails";
import Account from "./Account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const URL = "http://localhost:5000/";

class App extends Component {
  state = {
    blocks: [],
  };

  componentDidMount() {
    this.fetchBlocks();
    this.binterval = setInterval(() => this.fetchBlocks(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.binterval);
    clearInterval(this.tinterval);
  }

  async fetchBlocks() {
    fetch(URL + "blocks")
      .then((response) => response.json())
      .then((block) => {
        let parsedBlocks = [];
        JSON.parse(block["blocks"]).forEach((block) => {
          parsedBlocks.push(JSON.parse(block));
        });
        this.setState({
          blocks: parsedBlocks,
        });
      });
  }

  render() {
    const blockItems = [];
    this.state.blocks.forEach((block) => {
      blockItems.push(
        <Block
          number={block.number}
          hash={block.hash}
          nTxs={block.n_txs}
          volume={block.volume}
        />
      );
    });

    return (
      <Router>
        <div class="main-content">
          <Switch>
            <Route path="/" exact>
              <div class="main-lists">
                <div class="block-items">{blockItems}</div>
              </div>
            </Route>
            <Route path="/block/:hash" component={BlockDetails} />
            <Route path="/acc/:hash" component={Account} />
            <Route path="/tx/:block_number/:hash" component={TXDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
