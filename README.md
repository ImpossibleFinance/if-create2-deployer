# IF Create2 Deployers

This repo contains Impossible Finance's create2 deployers.

## Deployed Deployers

This create2 contract is deployed to the address:

```
0x790DeEB2929201067a460974612c996D2A25183d
```

Using the EOA `0x7c450965a6b06065c219f714862Fa035866567Cf`.

This create2 contract is on the following chains:

```
BSC
    Mainnet ✅
    Testnet ✅
ETH
    Mainnet ⌛
    Rinkeby ✅
    Ropsten ⌛
Polygon
    Mainnet ⌛
    Mumbai ✅
Avalanche
    Mainnet ⌛
    Fuji ✅
Moonbeam
    Mainnet ⌛
    Moonbase Alpha ✅❗
        Deployed at time of writing, but this chain is occasionally purged
Moonriver
    Canary net ⌛
Arbitrum
    Rinkeby ⌛
```

## Setup

Install dependencies:

```
yarn install
```

You also must add a account / mnemonic in a file named `.env` in the root of the repo with the contents:

```
MAINNET_MNEMONIC='example example example example...'
```

## Deploy

### Test deploy to hardhat

```
npx hardhat run ./scripts/deploy-Create2Deployer.ts --network hardhat
```

### Deploy to chains

Please be careful to deploy from a wallet that has the same nonce on every chain.

It is not necessary to run these deploy commands again unless you want to deploy new create2 contracts.

```
# bsc
npx hardhat run ./scripts/deploy-Create2Deployer.ts --network bsc_main
npx hardhat run ./scripts/deploy-Create2Deployer.ts --network bsc_test
# eth
npx hardhat run ./scripts/deploy-Create2Deployer.ts --network eth_main
npx hardhat run ./scripts/deploy-Create2Deployer.ts --network eth_rinkeby
npx hardhat run ./scripts/deploy-Create2Deployer.ts --network eth_ropsten
# polygon
npx hardhat run ./scripts/deploy-Create2Deployer.ts --network polygon_main
npx hardhat run ./scripts/deploy-Create2Deployer.ts --network polygon_mumbai
# avalanche
npx hardhat run ./scripts/deploy-Create2Deployer.ts --network avalanche_fuji
# moonbeam
npx hardhat run ./scripts/deploy-Create2Deployer.ts --network moonbeam_mb_alpha
```
