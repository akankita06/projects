const HDWalletProvider = require('truffle-hd-wallet');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider( 
    // add the mneumonic here which will give the access to the public and private keys
    "words 1 - 12 "
    , // link of what network or url of the network to connect - so this would the Infura link
    'https://rinkeby.infura.io/<>'
    );

const web3 = new Web3(provider);

const deploy = async () => {
    
    console.log("Attempting to deploy from account", accounts[0]); 

    const account = web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ date: bytecode, arguments: ['Hi there'] })
    .send({ from: accounts[0], gas: '1000000' });

    console.log("Contract deployed to", result.options.address);
};

deploy();