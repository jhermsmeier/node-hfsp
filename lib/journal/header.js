/**
 * Header
 * @return {Header}
 */
function Header() {

  if( !(this instanceof Header) )
    return new Header()

  // Journal header's magic number
  this.magic = Header.MAGIC // (int32)
  // Endianness detection marker (?)
  this.endian = Header.ENDIAN // (int32)
  // Zero-based byte offset of the
  // start of the first transaction
  this.start = 0x00 // (unknown type off_t; prob. uint32)
  // Zero-based byte offset of where free space begins
  this.end = 0x00 // (unknown type off_t; prob. uint32)
  // Byte size of the entire journal
  this.size = 0x00 // (unknown type off_t; prob. uint32)
  // Byte size of each block_list_header in the journal
  this.blhdrSize = 0x00000000 // (int32)
  this.checksum = 0x00000000 // (uint32)
  // Byte size of the journal_header
  this.jhdrSize = 0x00000000 // (int32)
  this.sequenceNumber = 0x00000000 // (uint32)

}

Header.MAGIC = 0x4A4E4C78 // 'JNLx'
Header.OLD_MAGIC = 0x4A484452 // 'JHDR'
Header.ENDIAN = 0x12345678

/**
 * Header prototype
 * @type {Object}
 */
Header.prototype = {

  constructor: Header,

}

// Exports
module.exports = Header
