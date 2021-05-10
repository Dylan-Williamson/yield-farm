const DigitalMusicToken = artifacts.require('DigitalMusicToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(deployer, network, accounts) {

  // deploy mock dai
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  // deploy digital music token
  await deployer.deploy(DigitalMusicToken)
  const digitalMusicToken = await DigitalMusicToken.deployed()
  
  // deploy TokenFarm
  await deployer.deploy(TokenFarm, digitalMusicToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed()

  // transfer all tokens to TokenFarm (10 Million)
  await digitalMusicToken.transfer(tokenFarm.address, '10000000000000000000000000')
    
  // transfer 100 mock dai tokens to investor
  await daiToken.transfer(accounts[1], '100000000000000000000')
};
