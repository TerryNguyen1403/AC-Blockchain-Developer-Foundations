// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Create index for candidates
    uint candidateId;

    // Create the owner
    address private owner;
    constructor() {
        owner = msg.sender;
    }

    // Candidate struct
    struct Candidate {
        string name;
        uint voteCount;
    }

    mapping (uint => Candidate) public candidates;

    mapping (address => bool) public hasVoted;

    // Create modifier
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can create candidates");
        _;
    }

    // Voted event
    event Voted(address voter, uint candidateId);

    // Create candidate function
    function createCandidate(string memory _candidateName)
        public
        onlyOwner
    {
        candidateId++;
        Candidate storage c = candidates[candidateId];
        c.name = _candidateName;
    }

    function vote(uint _candidateId) public {
        require(hasVoted[msg.sender]==false, "This address has already voted!");
        candidates[_candidateId].voteCount++;
        hasVoted[msg.sender] = true;
        
        emit Voted(msg.sender, _candidateId);
    }
}