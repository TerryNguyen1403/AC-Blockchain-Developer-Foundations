import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Oqd36Ydv91HxrLqddRm9c");

  const privateKey = String(process.env.TESTNET_PRIVATE_KEY);
  const wallet = new ethers.Wallet(privateKey, provider);

  const abi = [
    "function mint(address to, uint256 amount) public",
    "function balanceOf(address _owner) public view returns (uint256 balance)"
  ];
  const contractAddress = "0x874Eb90A7DF033da94B0A976EDa3dC1a1c90c745"; // Replace with your contract address
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const deployer = "0x4b7d7f0720ca4b276aF03f303F86621C2902132B";

  /**
   * Get the current balance of deployer
  */
 const raw = await contract.balanceOf(deployer);
 console.log("Balance of deployer in Wei: ", raw);
 console.log('Balance of deployer Token term: ', ethers.formatUnits(raw, 18));

//  const tx = await contract.mint("0x4b7d7f0720ca4b276aF03f303F86621C2902132B", 200);
//  await tx.wait();

//  console.log('After minting: ', await contract.balanceOf("0x4b7d7f0720ca4b276aF03f303F86621C2902132B"));
  
}

main().catch(console.error);