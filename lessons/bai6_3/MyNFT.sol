// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import ERC-721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    uint256 public nextTokenId;
    address public admin;

    constructor() ERC721("MyNFT", "MNFT") {
        admin = msg.sender;
    }

    // Mint NFT
    function mint(address to) external{
        require(msg.sender == admin, "Only admin");
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }
}