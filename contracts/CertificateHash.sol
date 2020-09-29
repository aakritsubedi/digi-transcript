// Smart Contract for Certificate

// 1. Version of solidity Programming language that we want to use
pragma solidity ^0.5.0;

// import "@nomiclabs/builder/console.sol";

// 2. Declare the smart contract
contract CertificateHash {
    uint256 public certificateCount = 0; //State

    struct Certificate {
        uint256 id;
        string certificateHash;
        address studentId;
    }

    // Storage
    mapping(uint256 => Certificate) public certificates;
    mapping(uint256 => Certificate) public certificateInfo;

    // Event
    event CertificateIssued(uint256 id, string certificateHash, address owner);

    // Constructor fn to initilize the task
    constructor() public {
        issueCertificate("12556666666666666666666666");
    }

    function issueCertificate(string memory _hash) public {
        certificateCount++;
        certificates[certificateCount] = Certificate(certificateCount, _hash, msg.sender);

        emit CertificateIssued(certificateCount, _hash, msg.sender);
    }
}
