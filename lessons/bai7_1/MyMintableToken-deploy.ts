import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log("====================");
    console.log(hre.network.name);
    console.log("====================");

    console.log("====================");
    console.log("Deploy MyMintableToken Contract");
    console.log("====================");

    console.log("====================");
    console.log("Deployer: ", deployer);
    console.log("====================");

    await deploy("MyMintableToken", {
        from: deployer,
        skipIfAlreadyDeployed: false,
        log: true,
        autoMine: true,
        args: []
    })
}

func.tags = ["deploy"];
export default func;