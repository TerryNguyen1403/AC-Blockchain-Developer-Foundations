pragma solidity ^0.8.0;

contract Welcome {
    string public greeting;

    // Constructor
    // This function is called when the contract is deployed
    // It sets the greeting to 'greeting'
    constructor() {
        greeting = 'greeting';
    }

    // Function to get the greeting
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}