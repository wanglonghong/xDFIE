/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

require('dotenv').config();
require('chai/register-should');

const HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = process.env["MNEMONIC"];
var infuraProjectId = "7e2769ac3d864c78a4458725f62c8598";

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 9545, // Standard Ethereum port (default: none)
      network_id: '*', // eslint-disable-line camelcase
    },

    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/' + infuraProjectId),
      network_id: 4, // eslint-disable-line camelcase
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

    ropsten: {
      provider: function() {
        // Or, pass an array of private keys, and optionally use a certain subset of addresses
        var privateKeys = [
          "",
        
        ];
        return new HDWalletProvider(privateKeys, "https://ropsten.infura.io/v3/" + infuraProjectId);
      },
      // provider: () => new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/' + infuraProjectID),
      network_id: 3, // eslint-disable-line camelcase
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

    kovan: {
      provider: function() {
        // Or, pass an array of private keys, and optionally use a certain subset of addresses
        // 00935ae519db3b0c0c905f6e16f5cb18f71995ec467b03f153255886d317c16e  DFIE1
        // 79c8b4cbf0aa26c6af1a3ff50899737b6ed53c5a5554dc60cb576f0dc47a6181  DFIE 

        var privateKeys = [
          "79c8b4cbf0aa26c6af1a3ff50899737b6ed53c5a5554dc60cb576f0dc47a6181",
        
        ];
        return new HDWalletProvider(privateKeys, "https://kovan.infura.io/v3/" + infuraProjectId);
      },
      network_id: 42, // eslint-disable-line camelcase
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      websockets: true
    },
    live: {
      provider: function () {
          // Or, pass an array of private keys, and optionally use a certain subset of addresses
          //UMC owner mainnet address 0x52636B52f9461D848078D9ADDEEF0f6BaFa56FF1
          var privateKeys = [
            "e839d2e110532701bd742c555e3300745ba9d095fd177928b9b5b3214d673fb1",
          ];
          return new HDWalletProvider(privateKeys, "https://mainnet.infura.io/v3/" + infuraProjectId);
      },
      network_id: 1,
      gas: 1500000,
      gasPrice: 145000000000,
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
    }
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  // compilers: {
  //   solc: {
  //     // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
  //     // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
  //     // settings: {          // See the solidity docs for advice about optimization and evmVersion
  //     //  optimizer: {
  //     //    enabled: false,
  //     //    runs: 200
  //     //  },
  //     //  evmVersion: "byzantium"
  //     // }
  //   },
  // },
  // Configure your compilers
  compilers: {
    solc: {
        version: "0.7.0",
        settings: {          // See the solidity docs for advice about optimization and evmVersion
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
  }
};
