const express = require('express');

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
router.post('/orders', (req, res) => {
  const username = req.body.username;

  let transcript = extractTranscript(username);

  if (!transcript) {
    res.status(404).json('The username not found');
  } else {
    order = {
      "id": orders.length,
      "transcript": transcript,
      "security": {
        "hash": security.getHash(JSON.stringify(transcript))
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
router.post('/verifications', (req, res) => {
  const certificate = req.body.certificate;

  if(!certificate) {
    res.status(400).json("Bad request");
    return
  }

  const username = certificate.transcript.username;
  let actualTranscript = extractTranscript(username);

  const isVerificationSuccessForActualTranscript = security.verifyHash(
    JSON.stringify(actualTranscript),
    certificate.security.hash
  );

  const isVerificationSuccessForSubmittedTranscript = security.verifyHash(
    JSON.stringify(certificate.transcript),
    certificate.security.hash
  );

  const isVerificationSuccess = isVerificationSuccessForActualTranscript && isVerificationSuccessForSubmittedTranscript

  console.log(isVerificationSuccess);
  res.json(isVerificationSuccess);
});


module.exports = router;
