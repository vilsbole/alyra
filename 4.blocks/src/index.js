import { ethers } from 'ethers';
import './styles.css'

console.log('Hello from ./src/index.js');

// JSON_RPC using curl
//   curl -X POST \
//   -H "Content-Type: application/json" \
//   --data '{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}' \
//   "https://mainnet.infura.io/v3/<YOUR_API_KEY>"

// JSON_RPC using fetch
// fetch('https://mainnet.infura.io/v3/<YOUR_API_KEY>', {
//   method: 'POST',
//   body: JSON.stringify({
//     jsonrpc: "2.0",
//     id: 1,
//     method: "eth_blockNumber",
//     params: []
//   })
// }).then(console.log)

document.addEventListener("DOMContentLoaded", function(event) {
  // - Code to execute when all DOM content is loaded.
  // - including fonts, images, etc.

  const web3 = ethers.getDefaultProvider()

  web3.getBlockNumber()
    .then(block => {
      console.log('Last Block', block)
      return block
    })
    .then(block => {
      const blockNumbers = []
      for (let i = 0; i < 10; i++) {
        blockNumbers.push(block - i)
      }
      console.log(blockNumbers)
      return blockNumbers
    })
    .then(blockNumbers => {
      const blockPromises = blockNumbers.map(num => web3.getBlock(num))
      return Promise.all(blockPromises)
    })
    .then(blocks => {
      console.log('Blocks', blocks)
      return blocks.map(block => `
        <div class="block">
          <a href="https://etherscan.io/block/${block.number}" target="_blank">
            <span>number: ${block.number}</span> <span>hash: ${block.hash}</span>
          </a>
        </div>`
      )
    })
    .then(blockDivs => {
      const container = document.querySelector('#block-list')
      blockDivs.forEach(div => container.insertAdjacentHTML('beforeEnd', div))
    })

});
