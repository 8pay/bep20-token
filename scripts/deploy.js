const hre = require("hardhat");

function tokens(n) {
  return ethers.utils.parseEther(n);
}

async function main() {
  const owner = process.env.OWNER;
  const whitelister = process.env.WHITELISTER;

  const EightPayToken = await hre.ethers.getContractFactory("EightPayToken");
  const eightPayToken = await EightPayToken.deploy();

  await eightPayToken.deployed();

  await eightPayToken.transfer(owner, tokens('88888888'));
  await eightPayToken.transferOwnership(owner);
  await eightPayToken.transferWhitelister(whitelister);
  
  console.log("EightPayToken deployed to:", eightPayToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
