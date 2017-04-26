/**
 * Volume
 * @return {Volume}
 */
function Volume( options ) {

  if( !(this instanceof Volume) )
    return new Volume( options )

  this.device = null

}

/**
 * Volume prototype
 * @type {Object}
 */
Volume.prototype = {

  constructor: Volume,

}

// Exports
module.exports = Volume
