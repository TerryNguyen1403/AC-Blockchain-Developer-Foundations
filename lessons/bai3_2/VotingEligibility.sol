// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingEligibility {
    uint minAge = 18;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    function checkEligibility() public view returns(bool) {
        if (minAge >= 18) {
            return true;
        } else {
            return false;
        }
    }
    
    function updateMinAge(uint _minAge) public {
        require(msg.sender == owner);
        minAge = _minAge;
    }
}