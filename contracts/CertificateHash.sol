// Smart Contract for Certificate
pragma solidity ^0.5.0; // Version of solidity Programming language that we want to use

// Declare the smart contract
contract CertificateHash {
    uint public certificateCount = 0; //State

    struct Certificate {
        uint id;
        string certificateHash;
    }

    // Storage
    mapping(uint => Certificate) public certificates; //array or list 

    // Event
    event CertificateIssued(uint id, string certificateHash);

    function issueCertificate(string memory _hash) public {
        certificateCount++;
        certificates[certificateCount] = Certificate(certificateCount, _hash);

        emit CertificateIssued(certificateCount, _hash);
    }
}
