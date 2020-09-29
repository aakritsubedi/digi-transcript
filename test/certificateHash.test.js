const { assert } = require("chai");

const Certificate = artifacts.require('./CertificateHash.sol');

contract('Certificate', (accounts) => {
  before(async () => {
    this.certificate = await Certificate.deployed()
  })

  it('Deployed Successfully...',  async () => {
    const address = await this.certificate.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('List all certificates...', async () => {
    const certificateCount = await this.certificate.certificateCount() 
    const certficate = await this.certificate.certificates(certificateCount)
    assert.equal(certficate.id.toNumber(), certificateCount.toNumber())
    assert.equal(certficate.certificateHash, '6811EC49F0749A2C73D23FD8054D1ACBED30AE68F8997B91BA0BEAFB93ABD95F')
    assert.equal(certficate.id.toNumber(), 1)
  })

  it('Issue Certificate...', async () => {
    const result = await this.certificate.issueCertificate('6811EC49F0749A2C73D23FD8054D1ACBED30AE68F8997B91BA0BEAFB93ABD95F')
    const certificateCount = await this.certificate.certificateCount()
    assert.equal(certificateCount, 2)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 2)
    assert.equal(event.certificateHash, '6811EC49F0749A2C73D23FD8054D1ACBED30AE68F8997B91BA0BEAFB93ABD95F')
  })
})