const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');
//updated web3 and hdwallet-provider imports added for convenience
const provider = new HDWalletProvider(
  'swamp maze perfect pull evil enforce crumble record veteran zone emotion cigar',
  'https://sepolia.infura.io/v3/1f0a8d684d1a4a959b3ddfd16494ff1a'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
