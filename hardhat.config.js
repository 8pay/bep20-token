require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("solidity-coverage");
require("dotenv").config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.5.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000
      }
    }
  },
  networks: {
    mainnet: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: { mnemonic: process.env.MNEMONIC }
    },
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: { mnemonic: process.env.MNEMONIC }
    }
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_KEY
  },
  namedAccounts: {
    deployer: 0,
    trader1: 1,
    trader2: 2,
    trader3: 3,
    trader4: 4,
    treasury: 5,
    newOwner: 6
  }
};

