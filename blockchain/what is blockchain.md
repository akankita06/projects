### What is blockchain ?

According to Wikipedia definition, "Blockchain is a a growing list of records called **Blocks,** that are linked together using **cryptography.**"

A **Block** consists of data and block header. Data in the block could be just a string of words, program, money transfers, or any other type of transaction. Block header consists of quite a few fields including hash of the previous block in the chain. A **Hash** is like a fingerprint or a unique identifier of the block. You can go back up the chain from the current block following the previous hash field in the blocks. This is why we say that in a blockchain, blocks are linked by cryptography (hashes). The hash of the block is derived by applying a hashing function like SHA-256 on the data in the block. The more detailed list of block header fields is described under the section of Blockchain mining. 


### Hashing

"Hashing function is a mathematical function that converts an input of arbitrary size into an encrypted output of fixed size." For eg: whether your input is 1 character long or 10 pages long, a hashing algorithm will provide an encrypted output for it that is always x character long. 

The 3 important properties of a hashing function used in blockchains are:

1. They are "collision-free" i.e. no 2 two input values hash to the same output value
2. Given an input, It should be difficult to the guess the hash that the function will output
3. It should be difficult to reverse-engineer a hash i.e. to figure out the input value that will result in a certain hash output.

Most commonly used hashing function in blockchain is SHA-256.  This function takes in the the input and outputs a 256-bit hash value which is usually represented by 64 hexadecimal digits. 

In blockchain, hashing has following uses:

1. In calculating the hash of the block 
2. Storing the hash of the prev block - to create a link between the blocks and to ensure that the data is not tampered with 
3. Cryptocurrency mining for blockchains using Proof-of-work mechanism 


### Main characteristics of blockchain

Following are the characteristics or important underlying concepts of blockchain:

1. **Decentralized / Distributed p2p network**

    P2P network stands for peer-to-peer network. This refers to a group of devices (called nodes) that are connected and collectively store and share files. Each node is a peer in this network. P2P network is based on the principle of decentralization. There is no central authority or server involved unlike traditional systems. The peers in the network communicate directly with each other. This underlying principle forms the basis of blockchain. 

    "Blockchain is a digital ledger that tracks one or more digital assets on the p2p network". All the nodes in the network maintain a complete copy of this ledger. So when a node goes down, other nodes are still present to keep the blockchain highly available. Decentralization has a number of benefits:

    - no dependence on a central authority or third party
    - complete transparency
    - high availability of the blockchain

1. **Immutability**

    Immutability for a blockchain means that once the data is added to the blockchain, it cannot be modified. In the prev section, we discussed that each block of data has its own hash in the blockchain. This hash is calculated by applying the hashing algorithm to the data in the block. And the blocks are linked via this hash. 

    Now, if a user tries to change the data in a block on one of the nodes, the hash of the block will change. Even the smallest change in the data can result in a changed hash. If the hash of the current block changes, the "prev hash" of the block next to the current block in the blockchain will not match the "hash" of the current block, and the link between the two blocks will break. This break in the blockchain will invalidate the current block and the subsequent blocks in the chain. The node where this happens, will then need to discard its copy of blockchain and get a valid copy of blockchain from its peer nodes where the data was not changed. 

    Another way would be to change the data in the block but keep the same hash of the block. However, this is not possible because hashing algorithms by nature are designed to be reverse-engineering-proof.

    This is how blockchain ensures immutability of the data. 

2. **Enhanced security**

    Blockchain provides enhanced security for transactions in following ways. First, the authenticity of transaction is verified by the network. Second, the transaction is validated during the data mining to ensure that the data in the block is correct after which the block is added to the blockchain. Third, with even a small code change the hash of the block will change and render the subsequent chain invalid - protecting the data against attackers. 

1. **Anonymity**

    When a user performs transaction on blockchain, the address recorded with the transaction details is your public address (wallet address). There is no other personal identification like email, username, etc. that you are required to provide. Since there is nothing linking public address to personal identification, your identity remains hidden. But this is only possible when you do not personally link your wallet address to your personal identification in any way. 

1. **Transparency**

    Since the blockchain is decentralized, all the transactions can on it can be viewed through blockchain explorers. You can also join the network as a node and view the transactions. This provides an easy traceability for the transactions.

2. **Consensus**

    The decisions made in the blockchain such as which transactions are legitimate , etc. are made by a voting system which is implemented through consensus algorithms. Here, each node votes and the decision that majority of nodes agree on sustains. The 2 most common consensus algorithms implemented in the blockchain are - proof-of-work and proof-of-stake. 

    **Proof-of-work**

     Proof-of-work algorithm is called so as it requires a huge amount of processing power. The blockchains with this consensus mechanism are secured and verified by virtual miners around the world racing to solve a math puzzle first. Winner updates the blockchain with latest verified transactions and is rewarded by the network with a predetermined amount of cryptocurrency. As the value of cryptocurrency grows, more miners are incentivized to join the network increasing its power and security. Security is enhanced because when more people are trying to solve the puzzle first, you will need more processing power to get ahead in the game. And individual or groups are discouraged from meddling. 

    **Proof-of-stake**

    Proof-of-stake is similar to proof-of-work in that it is the process by which a network participant gets selected to add the latest block of transactions to the blockchain and earn some reward in exchange. However, in proof-of-stake, a network of **validators stake** their own crypto for a chance to validate the new block, update the blockchain and earn a reward. The network selects the winner based on the crypto each validator has in the pool and the length of time they've had it there. It rewards the most invested validator, who then validates the block and the other validators attest that the block is accurate. After a certain min. number of attestations, the blockchain is updated. And the network distributes reward to all participating validators proportional to their stake. 

3. **Faster process**

    Since blockchain transactions don't need verification or validation from a central authority or third party, they are processed much faster. Eg: when money transfers take place through banks, they take a couple of days to get approved. The only delay involved with money transfers in blockchains is the time it takes to mine that transaction which is usually just a few minutes. 

While all the above really make the case for blockchain, it still faces some **challenges** today:

1. **Significant technology cost of mining**

    Proof-of-work systems in blockchain use a lot of computational power with a lot of miners rushing to solve the puzzle and win the reward. According to a recent Forbes article, "Bitcoin uses roughly enough electricity to power countries with populations in tens of millions, with an environmental burden of ~34 megatons of carbon emissions or more." 

2. **Low transactions per second**

    Even though the overall processing speed of transactions are faster due to elimination of central authorities and middle-men, blockchain network can manage only about 7 transactions per second. The number may vary from network to network but it is in a similar range. While Visa (in real-world), for eg., can process 24000 transactions per second. 

3. **Use in illegal activities**

    The privacy afforded to the users on the blockchain while being good in most cases, has had a few issues as well. It allows for illegal trading and activity on the blockchain network such as buying and selling illegal drugs.

4. **Regulation**

    Blockchains have been around for sometime now, however, it still lacks essential governmental regulations around it to be used widely. 


### What is blockchain mining ?

Blockchain consists of a number of blocks linked cryptographically. Each block stores multiple transactions. The transactions that are verified by a node but not yet added to any block are collected in that node's "unconfirmed transactions" area called memory pool. Blockchain miners can choose the transactions from this pool to add to the block. 

Usually the block has a size limit (currently 1MB) and the miners can only choose any number of transactions from the pool as long as they all fit within the block limit. The miners are, however, incentivized to choose - 1. the max number of transactions that would fit in the block, and 2. the transactions with higher transaction fee. This is because as a reward for verifying and validating the transactions in their block, and adding them to the blockchain, they receive all the transaction fees associated with the transactions in their block. 

However, it is not as easy to add the block into the blockchain. To be able to add their block and claim the transaction fees, the miners first need to a solve a cryptographic puzzle. If they are able to solve this puzzle first, they can add their block to the blockchain and claim the transaction fees. Additionally, they are also rewarded some amount of cryptocurrency by the blockchain network according to the predefined rules for adding the block. 

**What is the cryptographic puzzle ?** 

Along with data, the block also contains a block header. The header includes following fields:

- version - block version number. This is updated when the software is upgraded and it specifies a new verison
- prev hash - hash of the previous block (header)
- hash of merkle root - hash of all the chosen transactions in the current block.
- timestamp - current block timestamp as seconds
- bits - current target hash (in a compact format). This is defined by the network
- nonce - this is a 32 bit number (~ 4 billion values).

The puzzle is to find a hash using all the fields of the block header that is lower than the current target hash. Now, the version, prev hash, timestamp, bits are fixed values (for a given timestamp). And with the assumption, that the miners do not waste their time changing the chosen transactions, the only flexibility in computing the hash of the current block is by varying the nonce. So, in order to solve the puzzle, the miners compute the hash of the block for the entire range of values of nonce till they find a hash that meets the criteria. Mind you, if the timestamp changes i.e. even after a second, if you try the same nonce value, the hash of the block will be done. So, ideally, you want to compute the hash for all the possible nonce values in a second in the race to find a suitable hash. Solving this cryptographic puzzle is called **Blockchain mining.** 

Since, the hashing algorithm is computationally significantly complex, achieving the ideal condition of running through entire nonce range in a second requires a huge computation power. This is why, blockchain mining is said to be very computationally expensive or demanding. 

**Blockchain mining is only relevant for blockchain networks that use proof-of-work mechanism.** 


### Blockchain vs cryptocurrency vs token

Blockchain is the system of devices connected in p2p fashion with certain characteristics described above. It is the underlying technology on which some rules are defined which represent how the blockchain operates and which all the participants of blockchain must abide by for the blockchain to function. These rules are called **Protocols.** The rules include things like algorithms being used, rewards and penalties, etc. 

The rules also define the native asset of the blockchain network, which is called **Cryptocurrency.** Eg: Bitcoin is the native asset of the blockchain network running on bitcoin protocol. Ether is the native asset on the blockchain network running on ethereum protocol. These cryptocurrencies are usually used to pay transaction fees on the network and to incentivize users to keep the network secure. 

Some organizations or projects developed on top of the blockchain networks define their unit of value for transactions instead of using the native asset. These units are called **Tokens.** These are created by platforms that are built on top of the blockchains. Eg: Ethereum blockchain has multiple tokens defined on it like DAI, LINK, etc. These tokens can be used to participate in DeFI mechanisms, accessing platform-specific services, etc. Tokens can also represent physical assets like a utility or service (real-estate, data storage, art, processing power, etc.)


### Uses of blockchain

Some of the common uses for blockchains are for cases where:

- traceability or tracking is required - eg: in real-estate for keeping records of property, in the art industry - for records of art pieces and digital assets
- financial transactions - eg: sending and receiving money quickly, for the operations that banks usually performs - like giving loans, etc.
- immutability and security is required - eg: in healthcare for keeping health records of the patients without  the fear of it being tampered in anyway and accessible only by certain individuals ensuring privacy


### Resources

- [https://www.udemy.com/course/build-your-blockchain-az/](https://www.udemy.com/course/build-your-blockchain-az/)
- [https://www.gemini.com/cryptopedia/cryptocurrencies-vs-tokens-difference](https://www.gemini.com/cryptopedia/cryptocurrencies-vs-tokens-difference)
- [https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake](https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake?utm_source=google_search_nb&utm_medium=cpc&utm_campaign=9943088770&utm_content=127915792732&utm_term=&utm_creative=523247202125&cb_device=c&cb_placement=&cb_country=us&cb_city=open&cb_language=en_us&gclid=Cj0KCQjwvaeJBhCvARIsABgTDM5_gISogQpdLpQNwqvS71TLPuSOFvwUMHAz6zYTa4WXaul5lNPUh_0aAq6CEALw_wcB)
- [https://www.kraken.com/en-us/learn/what-is-decentralized-finance-defi](https://www.kraken.com/en-us/learn/what-is-decentralized-finance-defi/?gclid=Cj0KCQjwvaeJBhCvARIsABgTDM6-qHGHRCcIxpnsIOf9gxuagiM-n1VOfGaP33gnNYIPOknuB4dCN5YaAgWuEALw_wcB)
- [https://101blockchains.com/introduction-to-blockchain-features/](https://101blockchains.com/introduction-to-blockchain-features/)
- [https://www.blockchain-council.org/blockchain/blockchain-role-of-p2p-network/](https://www.blockchain-council.org/blockchain/blockchain-role-of-p2p-network/)
- [https://medium.com/fluree/immutability-and-the-enterprise-an-immense-value-proposition-98cd3bf900b1](https://medium.com/fluree/immutability-and-the-enterprise-an-immense-value-proposition-98cd3bf900b1)
- [https://www.investopedia.com](https://www.investopedia.com/terms/h/hash.asp)
- [https://www.businessinsider.com/blockchain-cryptocurrency-regulations-us-global](https://www.businessinsider.com/blockchain-cryptocurrency-regulations-us-global)
- [https://bisontrails.co/networks-protocols-tokens-coins/](https://bisontrails.co/networks-protocols-tokens-coins/)
