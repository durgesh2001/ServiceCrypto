const hre = require("hardhat");

async function main() {
  const serviceCrypto = await hre.ethers.getContractFactory("serviceCrypto");
  const contract = await serviceCrypto.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});