const log = require("../lib/log");

const RequestInterceptor = {
  process(handlerInput) {
    log.info('INCOMIN:::REQUEST', handlerInput.requestEnvelope);
  }
};

module.exports = RequestInterceptor
