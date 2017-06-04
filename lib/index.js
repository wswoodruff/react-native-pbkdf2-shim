module.exports = {
    pbkdf2: function(password, salt, iterations, keylen, digest, callback) {
        throw Error('pbkdf2 Not implemented.');
    },
    pbkdf2Sync: function(password, salt, iterations, keylen, digest) {
        throw Error('pbkdf2Sync Not implemented.');
    }
}
