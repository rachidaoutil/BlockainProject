crypt = require('crypto')

module.exports = {
    secret:crypt.randomBytes(64)
}