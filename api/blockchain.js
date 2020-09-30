const Web3 = require('web3');

const nodeURL = process.env.NODE_URL || 'http://localhost:7545';

const gasLimit = 3000000;

web3 = new Web3(nodeURL);

const accountAddress = process.env.ACCOUNT || "0x5881EBbC9f8f72D332A9C71a99732d681b7F4A4d"; // Use the desired ethereum account here

const certificateHash = require('../build/contracts/CertificateHash.json')
const contractAbi = certificateHash.abi;
const contractAddress = certificateHash.networks[5777].address;

const contract = new web3.eth.Contract(contractAbi, contractAddress);


const getCertificatesCount = async () => {
  // Get current certificates count
  return await contract.methods.certificateCount().call((err, result) => {
    if(err) {
      console.log(err);
    } else {
      return result;
    }
  });
}


const issueNewCertificate = async (transcriptHash) => {
  // Send a new certificate hash to the blockchain
  const result = await contract.methods
    .issueCertificate(transcriptHash).send({
      from: accountAddress,
      gas: gasLimit
    });
  return {
    transactionHash: result.transactionHash,
    blockHash: result.blockHash
  };
}

// This function is not being used currently
const getCertificateFromHash = async (txHash) => {
  const transaction = await web3.eth.getTransaction(txHash);

  return {
    hash: transaction.hash,
  };
}

const getCertificateFromUserId = async (userId) => {
  // Get certificate from blockchain using userId
  const transaction = await contract.methods.certificates(userId).call();
  
  return transaction.certificateHash;
}


module.exports = {
  getCertificatesCount,
  issueNewCertificate,
  getCertificateFromUserId
}
