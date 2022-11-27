// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };
//https://eth-goerli.g.alchemy.com/v2/AecBTI07qBNac8ShD5iEgcPQgu0V80fR

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:"0.8.0",
  networks:{
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/AecBTI07qBNac8ShD5iEgcPQgu0V80fR',
      accounts:['154ce2b427becfcc383a1a88422822e487081f418e10bde30292dc5f1f8ddf5d']
    }
  }
}