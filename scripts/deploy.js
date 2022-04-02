require("@nomiclabs/hardhat-ganache");


const hre = require("hardhat");

async function main() {


  // We get the contract to deploy
  const Todo = await hre.ethers.getContractFactory("Todo");
  const todo = await Todo.deploy();

  await todo.deployed();

  console.log("Todo deployed to:", todo.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
