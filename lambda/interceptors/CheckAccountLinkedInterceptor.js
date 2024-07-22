const log = require('../lib/log')

const CheckAccountLinkedInterceptor = {
    process(handlerInput) {
        log.info("CheckAccountLinkedInterceptor:::", handlerInput.requestEnvelope.request.type);
        
    }
};

module.export = CheckAccountLinkedInterceptor;