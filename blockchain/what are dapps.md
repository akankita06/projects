## What is a dapp ?

The traditional web applications follow the client server model where the application runs on the server and clients access them through the browser. The servers are managed by an organization who have complete authority over the applications. So, web applications can have multiple users accessing it, but they are controlled by a single entity. 

On the flip side, dapps or decentralized applications are the applications that exist and run on blockchain. And since blockchain is a p2p network without a single authority overseeing it, dapps follow the same model. They are not controlled by a single authority. 

Eg: In a traditional social network app, all messages and updates reside on the respective company's server and are controlled by them. So, they can delete your profile or messages. However, if you put a social network dapp on blockchain, no one (not even the dapp creators) can delete your messages once you post them on it. 

The dapps can be classified as per the blockchain model:

1. Dapps that have their own blockchain like ethereum, and other alternative cryptocurrencies.
2. Dapps that are essentially protocols and have tokens required for their functioning. Eg:  Omni protocol which is a trading platform developed on Bitcoin blockchain. 
3. Dapps that use the protocols (dapps of type 2). Eg:  SAFE Network (Secure Access For Everyone) - a decentralized data storage and communications network that helps create censorship resistant websites and applications. It issues SafeCoins which leverages Omni Protocol. These SafeCoins are used to allow the users to use different functions on the dapp.  



## Smart contracts vs dapps

The difference between smart contracts and dapps can be explained using the analogy of web applications. Smart contracts here are like the backend system of a web application. They include the logic of how the application works behind the scenes, and have an API through which the front-end  can connect to it. Dapps here can be thought of as the web application itself. It includes both the front end (interface) and backend (Smart contract). 



## DeFI (decentralized finance) dapps

DeFI is what a certain class of cryptocurrencies is trying to achieve. Most DeFI projects are software protocols that run on top of another cryptocurrency and use a combination of that protocol's crypto asset (as well as their own and may be others) as a means to automate a financial service. Eg: DAI - it allows users to "lock" cryptocurrency in a smart contract running on Ethereum blockchain, where the funds are used as collateral to generate new assets that power its lending service. So, where Bitcoin may serve as pure money or store of value, the DeFI cryptocurrencies serve as "capital assets" similar to stocks and bonds and aim to provide exposure to the value of the service provided.

The different classes of problems these projects are attempting to solve:

- **Lending and borrowing**

    The problems included under this class include:

    - allow users to take out a loan with software, removing the need for a trusted third party
    - automate maintenance margins and interest rates required in lending. This allows for automatic liquidation should balances fall below specified collateral ratio.

    Even though there are many different projects trying to solve the problems under this class, they have their own protocols that differentiate them in some way.  The dapps under this space have broadly 2 types of users: 

    - **Lenders** - Users who wish to lend their cryptocurrency would send those tokens to an address controlled by the protocol, and earn interests based on the amount they lend.
    - **Borrowers** - Borrowers are users who wish to borrow cryptocurrency. However, in order to borrow, they first have to post collateral in the form of a cryptocurrency. They are then allowed to borrow cryptocurrencies as a percentage of the posted value.

- **Decentralized exchanges (DEX)**

    Decentralized exchanges allow users to exchange crypto assets without the need for a mediator allowing for true peer-to-peer trading of cryptocurrencies. Benefits of having decentralized exchanges are:

    - they provide access to trading pairs, even when the vol. of the underlying asset may be too small for larger exchanges
    - user funds are not held by centralized parties but in personal wallets which increases privacy for those using DEX
- **Derivatives**

    Derivative markets are where buyers and sellers exchange contracts based on the expected future value of an asset. These assets can be anything from cryptocurrencies to future event outcomes to real-world stocks and bonds.



## Common tools and libraries used to build dapps:

1. **Metamask**

    Metamask is a browser extension that serves as an Ethereum wallet for storing ethers. A wallet is an application through which you can create and interact with your accounts on the Ethereum network - you can see the balance, send transactions, connect to other applications, etc. 

    With Metamask,  you can create your public and private addresses for interacting with the Ethereum network. These addresses are in hexadecimal format which are hard to remember. So you get a 12 work mneumonic (aka secret recovery phrase) unique for you as a user. As long as you remember this mneumonic, you can access all the accounts, and the public and private addresses you have associated with them. This should be kept secure as anyone who has this neumonic can get access your addresses and empty your accounts. With these addresses, you can also create 1 or more accounts on metamask which you can use to see the balance, send transactions, and connect to other applications. 

    Other than the main ethereum network, with Metamask you can also connect to test networks like Rinkeby on ethereum. Same accounts on metamask can be used across networks - only for main networks you would use real ethers, while on test networks you would fake ethers.

    For testing your dapp through test network, you will first need to get some fake ethers in order to be able to use it for testing. For Rinkeby network, these are available at [https://faucet.rinkeby.io/](https://faucet.rinkeby.io/). 

2. **Solidity language**

    Solidity is the language to write smart contracts on the ethereum network. It is similar to Javascript. It is a strongly typed language and written in files with .sol extension. One thing to note is, it has some gotcha behaviors compared to Javascript and other usual languages. 

    Each contract in solidity can be thought of as a class which is then compiled and deployed to the network. Each deployment of this contract then becomes an instance of that contract.

    When a contract is compiled by the solidity compiler, it generates 2 outputs -  1. EVM bytecode, 2. application binary interface (ABI)

    Byte code is the compiled contract code in low level language. These are the instructions to the machine for efficient execution of the code logic.

    While ABI is an interface to interact with the contract. Just like API defines endpoints through which you can interact with the backend for traditional applications; similarly, ABI provides you an interface to interact with the contract from outside the blockchain (like your front end) or for contract-to-contract interactions. It is written in high level language understandable to people. 

3. **Remix IDE**

    You can use your usual IDEs like VSCode, Atom to write solidity code by installing the Solidity packages. However, there is a native IDE specifically for solidity for writing smart contracts called Remix available on browser at [http://remix.ethereum.or](http://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null)g. 

    With Remix, you can also test your local version of the smart contract as well as to test or interact with a deployed contract on an ethereum network. You can also deploy your contracts on any ethereum network with Remix. For any testing, interactions or deployments on the ethereum network, you would need to connect your accounts (From Metamask) with Remix. For local testing, Remix provides you with test accounts with some amount of ether. 

    While Remix is great for creating, testing and deploying smart contracts, it cannot help you test your entire dapp which will usually involve a front end as well. 

4. **Web3**

    In the solidity section, we saw that solidity compiler output bytecode and ABI for a smart contract, where ABI is the interface that is used to interact with the contract. Web3 is a collection of JS libraries with which your JS code can interact with the ABI of the smart contract. 

    It basically provides us with an API with which we can work with blockchain by connecting to a local or remote Ethereum node. For our development, we use web3 to interact with the ethereum node (main, local, or test network) on which we have deployed our contract. 

5. **Infura**

    Infura is a service that provides you a hosted node or a cluster of nodes on any ethereum network of your choice without you having to go through the hassle of hosting the nodes in that network yourself. You can use Infura to deploy your contracts on its node while testing or for scaled deployment. It provides you a key and an API to communicate with these nodes in the Ethereum blockchain over HTTPs or through web sockets. 

6. **Solcjs**

    Solcjs is the solidity compiler which can be used to compile solidity files directly from within your Javascript project. It is especially useful when you are trying to build a front end for your dapp and want to test it end-to-end. You can compile the solidity file using solc and even create your own compile, testing and deploying scripts without needing external tooling. Since, the ethereum tools are under rapid development, some of them may not be entirely reliable at its current state. In such a case, being able to develop these scripts comes in pretty handy. 

### Local development tools to build dapps

1. **Ganache**

     When you test a contract, you need a blockchain network to deploy it on and test it. We talked about the test networks available on browser like Rinkeby where you can deploy the contracts. However, if you want to do a local development, you'd need a local blockchain to deploy the contract on to test it. Ganache fits the bill here. It is a personal blockchain that you can use for developing, deploying and testing the contracts entirely in your local environment. It also provides you a local wallet that you can use to interact with the smart contract. 

    The only thing to consider here is some behavioral differences between ganache and main ethereum network. Eg: the mining behavior - being local, your transactions might be mined instantly on gananche, however, the main ethereum network takes a few seconds usually to mine transactions. So, while synchronous transaction execution logic, would test fine with ganache, it will most likely not give you the desired output on the main network. Hence, you'd want to consider asynchronous code logic for executing transactions.

    Similarly, gas limit is dynamic on the main network and can be changed by miners, while in ganache, you are working with an exact number (that you've set). 

2. **Truffle**

    Ganache (from previous section) is a part of the Truffle suite. With truffle, you get a complete testing framework and other features like smart contract compilation, linking, and deployment (including on external ethereum networks like rinkeby); automating contract testing; a. interactive console for interacting with the contracts; etc.



## Things to note while building dapps

- Smart contract interactions can be of 2 types: Call functions, and Sending a transactions.

    A call function in a contract is used to fetch the data stored in the contract. This is a function in the contract which returns some data but does not manipulate that data in anyway, and therefore, runs instantly. Calling functions do not require any ethers. You can freely call them. 

    Sending transactions - these interactions with smart contract are when you are accessing a contract logic or function which manipulates the data stored in the contract. These take time to execute and return a transaction hash. Executing them also costs money.

    tldr -  data fetchers run instantly and do not cost money; and data manipulators take time to execute and cost money.

- How web3 JS library works

    Web3 needs a provider from the network it is talking to else it won't know which n/w it is talking to. You can change the providers depending on which n/w you are deploying to. 

- Whenever you want to access a deployed contract, for eg: to test it or to interact with it, you will need the address of the deployed contract.
- You can check the mined contract transactions on rinkeby at `https://rinkeby.etherscan.io/`


## Resources

[https://www.leewayhertz.com/what-are-dapps/](https://www.leewayhertz.com/what-are-dapps/)
[https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/)
[https://www.gemini.com/cryptopedia/cryptocurrencies-vs-tokens-difference](https://www.gemini.com/cryptopedia/cryptocurrencies-vs-tokens-difference)
[https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake](https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake?utm_source=google_search_nb&utm_medium=cpc&utm_campaign=9943088770&utm_content=127915792732&utm_term=&utm_creative=523247202125&cb_device=c&cb_placement=&cb_country=us&cb_city=open&cb_language=en_us&gclid=Cj0KCQjwvaeJBhCvARIsABgTDM5_gISogQpdLpQNwqvS71TLPuSOFvwUMHAz6zYTa4WXaul5lNPUh_0aAq6CEALw_wcB)
[https://www.kraken.com/en-us/learn/what-is-decentralized-finance-defi](https://www.kraken.com/en-us/learn/what-is-decentralized-finance-defi/?gclid=Cj0KCQjwvaeJBhCvARIsABgTDM6-qHGHRCcIxpnsIOf9gxuagiM-n1VOfGaP33gnNYIPOknuB4dCN5YaAgWuEALw_wcB)
[https://www.investopedia.com/terms/d/decentralized-applications-dapps.asp](https://www.investopedia.com/terms/d/decentralized-applications-dapps.asp)
[https://www.oreilly.com/library/view/hands-on-smart-contract/9781492045250/ch08.html](https://www.oreilly.com/library/view/hands-on-smart-contract/9781492045250/ch08.html)
[https://docs.soliditylang.org/en/v0.8.6/abi-spec.html](https://docs.soliditylang.org/en/v0.8.6/abi-spec.html)
[https://ethereum.stackexchange.com/questions/58093/difference-between-ganache-and-truffle/58096](https://ethereum.stackexchange.com/questions/58093/difference-between-ganache-and-truffle/58096)
[https://www.trufflesuite.com](https://www.trufflesuite.com/docs/truffle/overview)
[https://ethereumico.io/](https://ethereumico.io/)
