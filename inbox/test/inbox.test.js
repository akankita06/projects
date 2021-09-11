const assert = require('assert');
const ganache = require('ganache-cli');
//Web3 is the constructor of web3
const Web3 = require('web3');

// web3 here is the instance of web3 after providing the 
// provider of the network to which it is supposed to connect
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile'); 

let accounts;
let inbox;
const INITIAL_STRING = "Hi there";

beforeEach(async () => {
    // get a list of all accounts
    // ---------
    // old version for async code
    // web3.eth.getAccounts()
    // .then(fetchedAccounts => {
    //     console.log(fetchedAccounts);
    // });
    //----------
    // using async await
    accounts = await web3.eth.getAccounts();

    // use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface)) // teaches web3 about what methofs an Inbox contract has
        .deploy({ data: bytecode, arguments: [INITIAL_STRING] }) // tells web3 that we want to deploy a new copy of this contract
    .send({ from: accounts[0], gas: '1000000' }); // instructs web3 to send out a transaction that creates this contract from acconts[0] with a gas limit of 1000000

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        //console.log(inbox); => Contract object
        //inbox.options.address -> gives the address of the deployed contract instance
        
        // this test checks if the contract was successfully deployed
        // if it was a success , the address of the deployed contract would exist
        assert.ok(inbox.options.address);  
        console.log(inbox.options.address);
    });

    it ("test the default message in the contract", async () => {
        // access method "message" on the contract inbox
        // call method is used when fetching the data without manipulating it
        const message = await inbox.methods.message().call(); 
        assert.equal(message, INITIAL_STRING);
    });

    it ("can change the message", async () => {
        const newMessage = "This is the new message";
        await inbox.methods.setMessage(newMessage)
        .send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, newMessage);

    });
});