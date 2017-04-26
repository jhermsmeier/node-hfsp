/**
 * BlockListHeader
 * @return {BlockListHeader}
 */
function BlockListHeader() {

  if( !(this instanceof BlockListHeader) )
    return new BlockListHeader()

  this.maxBlocks = 0x0000
  this.numBlocks = 0x0000
  this.bytesUsed = 0x00000000
  this.checksum = 0x00000000
  this.flags = 0x00000000
  // this.blockInfo = null // (?)

}

BlockListHeader.CHECK_CHECKSUMS = 0x0001
BlockListHeader.FIRST_HEADER    = 0x0002

/**
 * BlockListHeader prototype
 * @type {Object}
 */
BlockListHeader.prototype = {

  constructor: BlockListHeader,

}

// Exports
module.exports = BlockListHeader
