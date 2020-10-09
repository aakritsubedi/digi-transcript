const Web3 = require('web3');
const { NODE_URL, ACCOUNT_ADDRESS } = require('./config');

const gasLimit = 3000000;

web3 = new Web3(NODE_URL);

const accountAddress = ACCOUNT_ADDRESS;

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

const decodeTransactionData = (data) => {
  let slicedData = data.slice(138); // The first 137 characters contain metadata
                                    // and remaining characters contain the transaction value
  return web3.utils.hexToString('0x' + slicedData);
}

const getCertificateFromTransaction = async (txHash) => {
  const transaction = await web3.eth.getTransaction(txHash);

  return {
    transactionHash: transaction.hash,
    certificateHash: decodeTransactionData(transaction.input)
  };
}

const getCertificateFromId = async (certificateId) => {
  // Get certificate from blockchain
  const transaction = await contract.methods.certificates(certificateId).call();
  
  return transaction.certificateHash;
}


module.exports = {
  getCertificatesCount,
  issueNewCertificate,
  getCertificateFromTransaction,
  getCertificateFromId
}
