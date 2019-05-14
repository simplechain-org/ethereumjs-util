const axlsign = require('axlsign')

function buf2hex(buffer: Buffer) {
  // buffer is an ArrayBuffer
  return Array.prototype.map
    .call(new Uint8Array(buffer), function(x: any) {
      return ('00' + x.toString(16)).slice(-2)
    })
    .join('')
}

export const x25519key = function(secretKey: Buffer, publicKey: Buffer) {
  var sharedKey = axlsign.sharedKey(secretKey, publicKey)
  return buf2hex(sharedKey)
}
