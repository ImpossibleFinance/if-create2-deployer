import '@nomiclabs/hardhat-waffle'
import dotenv from 'dotenv'

dotenv.config()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: {
    version: '0.8.7',
    settings: {
      optimizer: { enabled: false },
    },
  },
  networks: {
    hardhat: {},

    bsc_main: {
      url: 'https://bsc-dataseed.binance.org/',
      chainId: 56,
      gasPrice: 5000000000,
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },
    bsc_test: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainId: 97,
      gasPrice: 11000000000,
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },

    eth_main: {
      // metamask RPC url
      url: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },
    eth_rinkeby: {
      // metamask RPC url
      url: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },
    eth_ropsten: {
      // metamask RPC url
      url: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },

    polygon_main: {
      // recommended by polygon
      url: 'https://polygon-rpc.com',
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },
    polygon_mumbai: {
      // recommended by polygon
      url: 'https://matic-testnet-archive-rpc.bwarelabs.com',
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },

    moonbeam_mb_alpha: {
      // testnet for moonbeam (moonbase alpha)
      // note: this chain is ephemeral, chain is purged from time to time
      url: 'https://rpc.testnet.moonbeam.network',
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },

    moonriver_main: {
      url: 'https://rpc.moonriver.moonbeam.network',
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },

    avalanche_main: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },
    avalanche_fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },

    arbitrum_rinkeby: {
      url: 'https://rinkeby.arbitrum.io/rpc',
      accounts: { mnemonic: process.env.MNEMONIC || '' },
    },
  },
}
