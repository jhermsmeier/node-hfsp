/**
 * Transaction
 * @return {Transaction}
 */
function Transaction() {

  if( !(this instanceof Transaction) )
    return new Transaction()

  this.bufferSize = 0x00000000
  this.buffer = null // *Buffer (TODO)
  this.blockListHeaderCount = 0
  this.totalBytes = 0
  this.flushedBytes = 0
  this.killedBytes = 0

  this.startOffset = 0x00000000
  this.endOffset = 0x00000000

  this.journal = null // *Journal (TODO)
  this.nextTransaction = null // *Transaction (TODO)
  this.sequenceNumber = 0

  this.trimList = { // new TrimList (TODO)
    allocatedCount: 0,
    extentCount: 0,
    extents: null, // *Extents (TODO)
  }

  this.delayedHeaderWrite = false
  this.flushOnCompletion = false

}

/**
 * Transaction prototype
 * @type {Object}
 */
Transaction.prototype = {

  constructor: Transaction,

}

// Exports
module.exports = Transaction
