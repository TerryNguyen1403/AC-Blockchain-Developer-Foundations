// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Welcome {
    string public greeting;
    address public userAddress;

    // Constructor - tạo khi deploy contract
    constructor(){
        greeting = 'greeting';
        userAddress = msg.sender;
    }

    // Tạo hàm getGreeting
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}