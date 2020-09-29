const CertificateHash = artifacts.require("CertificateHash");

module.exports = function (deployer) {
  deployer.deploy(CertificateHash);
};
