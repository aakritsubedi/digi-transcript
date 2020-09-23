const { assert } = require("chai");

const DigitalTranscript = artifacts.require('./Transcript.sol');

contract('DigiTranscript', (accounts) => {
  before(async () => {
    this.transcript = await DigitalTranscript.deployed()
  })

  it('Deployed Successfully...',  async () => {
    const address = await this.transcript.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('Creates tasks...', async () => {
    const result = await this.transcript.createTask("hashhash...hash", 1,1,'23/Sept/2020', false)
    const transcriptCount = await this.transcript.transcriptCount()
    assert.equal(transcriptCount, 2)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 2)
    assert.equal(event.content, 'hashhash...hash')
    assert.equal(event.completed, false)
  })

})