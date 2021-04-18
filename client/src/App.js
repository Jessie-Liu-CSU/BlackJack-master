import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import BlackJack from "./contracts/BlackJack.json";
import HelloWorld from "./contracts/HelloWorld.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();

      // add SimpleStorage contract instance.
      let deployedNetwork = SimpleStorageContract.networks[networkId];
      const storageInstance = new web3.eth.Contract(
          SimpleStorageContract.abi,
          deployedNetwork && deployedNetwork.address,
      );

      // add HelloWorld contract instance.添加新的contract
      deployedNetwork = HelloWorld.networks[networkId];
      const helloWorldInstance = new web3.eth.Contract(
          HelloWorld.abi,
          deployedNetwork && deployedNetwork.address
      );

      // add BlackJack contract instance.添加新的contract
      deployedNetwork = BlackJack.networks[networkId];
      const blackJackInstance = new web3.eth.Contract(
          BlackJack.abi,
          deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      // 添加新的instance
      this.setState({ web3, accounts, storageContract: storageInstance, helloWorldContract: helloWorldInstance, blackJackContract: blackJackInstance }, this.runExample);
      //this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, storageContract, helloWorldContract, blackJackContract } = this.state;

    // Stores a given value, 5 by default.初始化，一进入页面就set收取 5 wei
    await storageContract.methods.set(5).send({ from: accounts[0] });
    // Get the value from the contract to prove it worked.
    const storageResponse = await storageContract.methods.get().call();

    // HelloWorld
    const helloResponse = await helloWorldContract.methods.getGreeting().call();

    // BlackJack 添加新的response（set或者get参考以上storage）
    //const blackJackPayResponse = await blackJackContract.methods.payContract().call();
    //const blackJackBetResponse = await blackJackContract.methods.PlayerBet().call();
    const blackJackBetResponse = await blackJackContract.methods.Initial(1).call();
    //const blackjackDealResponse = await blackJackContract.methods.deal().call();

    // Update state with the result.
    // 以上所有的get response都要在以下rename
    //this.setState({ storageValue: storageResponse, hello: helloResponse, blackjackDeal:  blackjackDealResponse });
    //this.setState({ storageValue: storageResponse, hello: helloResponse });
    this.setState({ storageValue: storageResponse, hello: helloResponse, blackjackBet:  blackJackBetResponse });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
        <div>The greeting response is: {this.state.hello}</div>
        <div>The greeting response is: {this.state.blackjackBet}</div>
      </div>
    );
  }
}

export default App;
