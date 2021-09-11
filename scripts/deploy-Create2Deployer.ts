// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre from 'hardhat'

export async function main() {
  // We get the contract to deploy
  const Create2DeployerFactory = await hre.ethers.getContractFactory(
    'Create2Deployer'
  )

  // deploy Create2Deployer
  const Create2Deployer = await Create2DeployerFactory.deploy()

  // log deployed addresses
  console.log('Create2Deployer deployed to ', Create2Deployer.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
