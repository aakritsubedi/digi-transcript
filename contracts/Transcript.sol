// Smart Contract for Transcript

// 1. Version of solidity Programming language that we want to use
pragma solidity ^0.5.0;

// 2. Declare the smart contract 
contract DigitalTranscript {
  uint public transcriptCount = 0;

  struct Transcript {
    uint id;
    string transcriptHash;
    uint studentId;
    uint institutionId; 
    string timestamp;
    bool  status;
  }

  // Storage 
  mapping(uint => Transcript) public transcript; 

  // Event 
  event TranscriptCreated(
    uint id,
    string transcriptHash,
    uint studentId,
    uint institutionId, 
    string timestamp,
    bool  status
  );

  event TaskCompleted(
    uint id,
    bool status
  );

  // Constructor fn to initilize the transcript
  constructor() public {
    createTranscript("hashhash...hash", 1,1,'23/Sept/2020', false);
  }

  function createTranscript(string memory _transcriptHash, uint _studentId, uint _institutionId, string memory _timestamp, bool status ) public  {
    transcriptCount ++;
    transcript[transcriptCount] = Transcript(transcriptCount, _transcriptHash, _studentId, _institutionId, _timestamp, status);

    emit TranscriptCreated(transcriptCount, _transcriptHash, _studentId, _institutionId, _timestamp, status);
  }

} 