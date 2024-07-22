const log = require('../lib/log')

const ResponseInterceptor = {
  process (handlerInput, response) {
    log.info('OUTGOING:::RESPONSE', response)
  }
}

module.exports = ResponseInterceptor
