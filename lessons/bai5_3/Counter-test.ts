import { ethers } from "ethers";

async function main() {
    const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Oqd36Ydv91HxrLqddRm9c");

    const privateKey = String(process.env.TESTNET_PRIVATE_KEY);
    const wallet = new ethers.Wallet(privateKey, provider);

    const abi = [
        "function getCount() public view returns (uint)",
        "function increment() public"
    ];

    const contractAddress = "0xee84898f6461D0EED9156A012D3ED4007Ec5C7F1";
    const contract = new ethers.Contract(contractAddress, abi, wallet);

    /**
     * Test Counter
     */

    // Get current count
    console.log('Count: ', await contract.getCount());

    // Increment
    const tx = await contract.increment()
    await tx.wait();

    // Get count after increment()
    console.log("After increment: ", await contract.getCount());
}

main().catch(console.error);