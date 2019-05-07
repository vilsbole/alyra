const web3 = ethers.getDefaultProvider()
web3.on('block', function(blockNumber) {
  // do something
})
