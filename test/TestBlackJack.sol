pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/BlackJack.sol";

contract TestBlackJack {
    function testItBet() public {
        // Get the deployed contract
        BlackJack blackJack = BlackJack(DeployedAddresses.BlackJack());

        // Call getGreeting function in deployed contract
        string memory bet = blackJack.payContract();

        // Assert that the function returns the correct greeting
        Assert.equal(bet, "Contract Paid.", "Bet should be 1.");
    }
}
