
const CheckAccountLinkedInterceptor = {
    process(handlerInput) {
        console.log("CheckAccountLinkedInterceptor:::", handlerInput.requestEnvelope.request.type);
        
    }
};

module.export = CheckAccountLinkedInterceptor;