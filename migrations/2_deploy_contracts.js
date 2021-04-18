const BlackJack = artifacts.require("BlackJack");
const HelloWorld = artifacts.require("HelloWorld");
const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  deployer.deploy(BlackJack);
  deployer.deploy(HelloWorld);
  deployer.deploy(SimpleStorage);
};
