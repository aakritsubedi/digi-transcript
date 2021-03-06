const express = require('express');

const blockchain = require('../blockchain');
const security = require('../security');
const { TRANSCRIPTS }= require('../data');

const router = express.Router();

const orders = [

];

const extractTranscript = (username) => {
  let transcript;
  Object.keys(TRANSCRIPTS).forEach((key) => {
    if(TRANSCRIPTS[key].username == username) {
      transcript = TRANSCRIPTS[key];
    }
  });

  return transcript;
}


// @route POST /api/orders
router.post('/orders', async (req, res) => {
  const username = req.body.username;

  let transcript = extractTranscript(username);

  if (!transcript) {
    res.status(404).json('The username not found');
  } else {

    const transcriptHash = security.getHash(JSON.stringify(transcript));
    const transaction = await blockchain.issueNewCertificate(transcriptHash);

    order = {
      "id": orders.length + 1,
      "transcript": transcript,
      "security": {
        "transactionHash": transaction.transactionHash
      }
    }

    orders.push(order);
    res.json(order);
  }
});


// @route GET /api/orders
router.get('/orders', (req, res) => {
  res.json(orders);
});


// @route GET /api/orders/id
router.get('/orders/:id', (req, res) => {
  const id = req.params.id;

  if(orders.length == 0 || orders.length-1 < id) {
    res.status(404).json("Order not found");
  } else {
    res.json(orders[id]);
  }
});


// @route POST /api/verifications
router.post('/verifications', async (req, res) => {
  const certificate = req.body.certificate;

  if(!certificate || !certificate.security.transactionHash) {
    res.status(400).json("Bad request, insufficient data");
    return;
  }

  const { certificateHash } = await blockchain.getCertificateFromTransaction(
    certificate.security.transactionHash
  );

  const isVerificationSuccess = security.verifyHash(
    JSON.stringify(certificate.transcript),
    certificateHash
  );

  console.log(isVerificationSuccess);
  res.json(isVerificationSuccess);
});


module.exports = router;
