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
    mapping(uint => Certificate) public certificates;

    // Event
    event CertificateIssued(uint id, string certificateHash, address owner);

    // Constructor fn to initilize the dummy certificate
    constructor() public {
        //issueCertificate("6811EC49F0749A2C73D23FD8054D1ACBED30AE68F8997B91BA0BEAFB93ABD95F");
    }

    function issueCertificate(string memory _hash) public {
        certificateCount++;
        certificates[certificateCount] = Certificate(certificateCount, _hash, msg.sender);

        emit CertificateIssued(certificateCount, _hash, msg.sender);
    }
}
