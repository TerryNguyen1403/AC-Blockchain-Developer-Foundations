import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Oqd36Ydv91HxrLqddRm9c");

  const privateKey = String(process.env.TESTNET_PRIVATE_KEY);
  const wallet = new ethers.Wallet(privateKey, provider);

  const abi = [
    "function mint(address to) external",
    "function admin() view returns(address)",
    "function ownerOf(uint256 _tokenId) view returns(address)"
  ];
  const contractAddress = "0xCD74D3F0e8592CA501F0cE6E2d98Fd18903e2F48"; // Replace with your contract address
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  /**
   * Mint a NFT to deployer
   */
  console.log(`Admin: ${await contract.admin()}`);

  // Mint NFT
  const tx = await contract.mint(contract.admin());
  console.log("TX hash....: ", tx.hash);

  // Log the owner of NFT with _id = 0
  console.log(`ownerOf(0) is: ${await contract.ownerOf(0)}`);
}

main().catch(console.error);